import { ClipboardList } from 'lucide-react';
import type { Prediction, ScoreGoal } from '@/types/score-card';
import { StyledIconButton } from '@/pages/round-tracker/styles';
import {
    StyledForecastCard,
    StyledForecastGoal,
    StyledForecastHeader,
    StyledForecastProgress,
    StyledForecastResult,
    StyledForecastScore,
    StyledForecastStat,
    StyledForecastStats,
    StyledForecastStatValue,
} from '@/pages/round-tracker/components/forecast/styles';
import { Spacer } from '@/components/ui/spacer';

interface Props {
    prediction: Prediction;
    scoreGoal: ScoreGoal;
    totalHoles: number;
    onOpenSummary: () => void;
}

export const Forecast = ({ prediction, scoreGoal, totalHoles, onOpenSummary }: Props) => {
    const remainingBudget = scoreGoal - 1 - prediction.strokesSoFar;
    const range = prediction.predictedStrokesRange;
    const forecast = prediction.isRoundComplete
        ? prediction.strokesSoFar
        : prediction.completedHoles < 3
          ? 'Calculating …'
          : range === null
            ? '–'
            : `${range.lower}–${range.higher}`;
    const hasForecast = prediction.isRoundComplete || (prediction.completedHoles >= 3 && range !== null);

    return (
        <StyledForecastCard aria-live="polite" aria-atomic="true">
            <StyledForecastHeader>
                <StyledForecastResult>
                    <Spacer size={8} />

                    <StyledForecastScore $hasForecast={hasForecast}>{forecast}</StyledForecastScore>
                </StyledForecastResult>
                <StyledForecastGoal>
                    <StyledIconButton type="button" aria-label="Open round summary" onClick={onOpenSummary}>
                        <ClipboardList aria-hidden="true" />
                    </StyledIconButton>
                </StyledForecastGoal>
            </StyledForecastHeader>

            <StyledForecastStats>
                <StyledForecastStat>
                    <StyledForecastStatValue>{prediction.strokesSoFar}</StyledForecastStatValue> strokes
                </StyledForecastStat>
                <StyledForecastStat>
                    <StyledForecastStatValue>{Math.abs(remainingBudget)}</StyledForecastStatValue>{' '}
                    {remainingBudget < 0 ? 'strokes over target' : 'strokes remaining'}
                </StyledForecastStat>
            </StyledForecastStats>

            <StyledForecastProgress
                aria-label="Completed holes"
                value={prediction.completedHoles}
                max={totalHoles}
            />
        </StyledForecastCard>
    );
};
