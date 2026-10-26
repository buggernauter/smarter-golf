import { PREDICTION_MARGIN } from '@/constants.ts';
import type { Hole, Prediction } from '@/types/score-card.ts';
import { isHoleCompleted } from '@/domain/round-tracker/round-summary';

type PredictionInput = {
    holes: ReadonlyArray<Hole>;
};

const validate = ({ holes }: PredictionInput) => {
    if (holes.length === 0) {
        throw new RangeError('The forecast requires at least one planned hole.');
    }
    for (const hole of holes) {
        if (!Number.isSafeInteger(hole.stroke) || hole.stroke < 0) {
            throw new RangeError('Score must be a non-negative safe integer.');
        }
        if (!Number.isFinite(hole.par) || hole.par < 1) {
            throw new RangeError('Par must be finite and at least 1.');
        }
    }
};

const getPredictedStrokesRange = (
    strokesSoFar: number,
    predictedTotalStrokes: number,
    isRoundComplete: boolean,
): Prediction['predictedStrokesRange'] => {
    if (isRoundComplete) {
        return { lower: strokesSoFar, higher: strokesSoFar };
    }

    const predictedScore = Math.round(predictedTotalStrokes);
    return {
        lower: predictedScore - PREDICTION_MARGIN,
        higher: predictedScore + PREDICTION_MARGIN,
    };
};

export const predictRound = ({ holes }: PredictionInput): Prediction => {
    validate({ holes });

    const completedHoles = holes.filter(isHoleCompleted);
    if (completedHoles.length === 0) {
        return {
            completedHoles: 0,
            strokesSoFar: 0,
            predictedRemainingStrokes: null,
            predictedTotalStrokes: null,
            predictedStrokesRange: null,
            playedPercentage: 0,
            isRoundComplete: false,
        };
    }

    const remainingHoles = holes.filter((hole) => !isHoleCompleted(hole));
    const strokesSoFar = completedHoles.reduce((sum, hole) => sum + hole.stroke, 0);
    const completedHolesPar = completedHoles.reduce((sum, hole) => sum + hole.par, 0);
    const remainingHolesPar = remainingHoles.reduce((sum, hole) => sum + hole.par, 0);
    const strokesOverParSoFar = strokesSoFar - completedHolesPar;
    const averageStrokesOverParPerHole = strokesOverParSoFar / completedHoles.length;

    const predictedRemainingStrokes =
        remainingHolesPar + averageStrokesOverParPerHole * remainingHoles.length;
    const predictedTotalStrokes = strokesSoFar + predictedRemainingStrokes;
    const isRoundComplete = remainingHoles.length === 0;

    const predictedStrokesRange = getPredictedStrokesRange(
        strokesSoFar,
        predictedTotalStrokes,
        isRoundComplete,
    );

    return {
        completedHoles: completedHoles.length,
        strokesSoFar,
        predictedRemainingStrokes,
        predictedStrokesRange,
        predictedTotalStrokes,
        playedPercentage: Math.round((completedHoles.length / holes.length) * 100),
        isRoundComplete,
    };
};
