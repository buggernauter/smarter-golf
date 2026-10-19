import { scoreGoal } from '../../../../api/player';
import type { Prediction } from '../../../../domain/round-tracker/predicted-result.ts/predicted-result';
import type { getRoundGoalStatus } from '../../../../domain/round-tracker/golf-round-goal';

import {
    StyledForecastCard,
    StyledForecastGoal,
    StyledForecastResult,
    StyledForecastScore,
    StyledForecastLabel,
    StyledForecastText,
} from './styles';

interface Props {
    prediction: Prediction;
    goalStatus: ReturnType<typeof getRoundGoalStatus>;
    totalHoles: number;
}

const formatStrokes = (value: number) =>
    new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 1 }).format(value);

export const Forecast = ({ prediction, goalStatus, totalHoles }: Props) => {
    const remainingHoles = totalHoles - prediction.playedHoles;
    const { remainingBudget, improvementNeeded, goalAchieved } = goalStatus;

    return (
        <StyledForecastCard aria-live="polite" aria-atomic="true">
            <StyledForecastResult>
                <StyledForecastLabel>{prediction.isComplete ? 'Slutscore' : 'Prognos'}</StyledForecastLabel>
                <StyledForecastScore>
                    {Math.round(prediction.expectedFinal)} slag
                    {!prediction.isComplete && prediction.predictionInterval && (
                        <span>
                            {' · troligen '}
                            {prediction.predictionInterval.lower}–{prediction.predictionInterval.upper}
                        </span>
                    )}
                </StyledForecastScore>
                <StyledForecastText>
                    {prediction.playedHoles} av {totalHoles} hål färdigspelade
                </StyledForecastText>
                {!prediction.isComplete && (
                    <StyledForecastText>
                        {prediction.predictionInterval
                            ? 'Preliminärt spann (80 %)'
                            : 'Utifrån Scoring Zone-planen'}
                    </StyledForecastText>
                )}
            </StyledForecastResult>
            <StyledForecastGoal>
                {/* <StyledForecastLabel>
                    Break {scoreGoal + 1} · högst {scoreGoal} slag
                </StyledForecastLabel> */}
                {prediction.isComplete ? (
                    <StyledForecastScore>
                        {goalAchieved ? 'Målet klarat!' : 'Målet nåddes inte'}
                    </StyledForecastScore>
                ) : (
                    <>
                        <StyledForecastScore>
                            {remainingBudget < 0
                                ? `${Math.abs(remainingBudget)} slag över målbudgeten`
                                : `${remainingBudget} slag kvar på ${remainingHoles} hål`}
                        </StyledForecastScore>
                        <StyledForecastText>
                            {remainingBudget < remainingHoles
                                ? 'Målet går inte längre att nå den här rundan.'
                                : improvementNeeded > 0
                                  ? `Spela ${formatStrokes(Math.ceil(improvementNeeded * 10) / 10)} slag bättre än prognosen på återstående hål.`
                                  : 'Prognosen ligger inom mål.'}
                        </StyledForecastText>
                    </>
                )}
            </StyledForecastGoal>
        </StyledForecastCard>
    );
};
