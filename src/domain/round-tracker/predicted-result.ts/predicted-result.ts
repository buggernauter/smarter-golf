import { isHoleCompleted } from '../golf-round-selectors.ts';

// Egna, preliminära modellantaganden som ska valideras mot riktiga rundor.
const FORM_RESIDUAL_LIMIT = 2;
const FORM_PRIOR_HOLES = 12;
const FORM_ADJUSTMENT_LIMIT = 0.35;
const CENTRAL_80_PERCENT_Z = 1.2815515655446004;

export type PredictionInput = {
    holes: ReadonlyArray<{
        score: number;
        expectedTotalStroke: number;
    }>;
    predictionRange?: {
        fullRoundStandardDeviation: number;
        baselineStandardDeviation: number;
    };
};

export type Prediction = {
    playedHoles: number;
    actualTotalScore: number;
    expectedRemaining: number;
    expectedFinal: number;
    formAdjustment: number;
    predictionInterval: { lower: number; upper: number; level: 0.8; isCalibrated: false } | null;
    playedPercentage: number;
    isComplete: boolean;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const validate = ({ holes, predictionRange: uncertainty }: PredictionInput) => {
    if (holes.length !== 18) {
        throw new RangeError('Prognosen kräver en planerad rond med 18 hål.');
    }
    for (const hole of holes) {
        if (!Number.isSafeInteger(hole.score) || hole.score < 0) {
            throw new RangeError('Score måste vara ett icke-negativt säkert heltal.');
        }
        if (!Number.isFinite(hole.expectedTotalStroke) || hole.expectedTotalStroke < 1) {
            throw new RangeError('Förväntad bruttoscore måste vara ändlig och minst 1.');
        }
    }
    if (
        uncertainty &&
        (!Number.isFinite(uncertainty.fullRoundStandardDeviation) ||
            uncertainty.fullRoundStandardDeviation < 0 ||
            !Number.isFinite(uncertainty.baselineStandardDeviation) ||
            uncertainty.baselineStandardDeviation < 0)
    ) {
        throw new RangeError('Ogiltiga parametrar för prognosens osäkerhet.');
    }
};

export const predictRound = ({ holes, predictionRange: uncertainty }: PredictionInput): Prediction => {
    validate({ holes, predictionRange: uncertainty });

    const playedHoles = holes.filter(isHoleCompleted);
    const remaining = holes.filter((hole) => !isHoleCompleted(hole));
    const actualTotalScore = playedHoles.reduce((sum, hole) => sum + hole.score, 0);
    const strokesAboveExpected = playedHoles.reduce(
        (sum, hole) =>
            sum + clamp(hole.score - hole.expectedTotalStroke, -FORM_RESIDUAL_LIMIT, FORM_RESIDUAL_LIMIT),
        0,
    );
    const formAdjustment = clamp(
        strokesAboveExpected / (playedHoles.length + FORM_PRIOR_HOLES),
        -FORM_ADJUSTMENT_LIMIT,
        FORM_ADJUSTMENT_LIMIT,
    );
    const expectedRemaining = remaining.reduce(
        (sum, hole) => sum + Math.max(1, hole.expectedTotalStroke + formAdjustment),
        0,
    );
    const expectedFinal = actualTotalScore + expectedRemaining;
    const isComplete = remaining.length === 0;

    let predictionInterval: Prediction['predictionInterval'] = null;
    if (isComplete || uncertainty) {
        const fraction = remaining.length / holes.length;

        const variance = uncertainty
            ? uncertainty.fullRoundStandardDeviation ** 2 * fraction +
              uncertainty.baselineStandardDeviation ** 2 * fraction ** 2
            : 0;
        const margin = CENTRAL_80_PERCENT_Z * Math.sqrt(variance);
        predictionInterval = {
            lower: Math.max(actualTotalScore + remaining.length, Math.floor(expectedFinal - margin)),
            upper: Math.ceil(expectedFinal + margin),
            level: 0.8,
            isCalibrated: false,
        };
    }

    return {
        playedHoles: playedHoles.length,
        actualTotalScore,
        expectedRemaining,
        expectedFinal,
        formAdjustment,
        predictionInterval,
        playedPercentage: Math.round((playedHoles.length / holes.length) * 100),
        isComplete,
    };
};
