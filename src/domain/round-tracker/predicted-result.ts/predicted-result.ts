import { coursePar } from '../../../api/chgk';

// Modellantagande, bör senare utvärderas mot historiska rundor.
const PRIOR_STD = 0.8;

export type PredictionInput = {
    holes: ReadonlyArray<{ score: number; par: number }>;
    /** Antal virtuella hål som startvärdet motsvarar. */
    startingWeight: number;
};

export type Prediction = {
    playedHoles: number;
    currentResult: number;
    predictedResult: number;
    predictedStrokes: number;
    /** Uppskattat spann, utan verifierad täckningssannolikhet. */
    estimatedResultRange: { bestResult: number; worstResult: number };
    /** Andel av rundan med registrerade slutresultat, 0–100. */
    playedPercentage: number;
    isComplete: boolean;
};

const check = ({
    playedHoleResults,
    totalHoles,
    startingWeight,
}: Omit<PredictionInput, 'holes'> & { playedHoleResults: number[]; totalHoles: number }) => {
    if (!Number.isInteger(totalHoles) || totalHoles < 1) {
        throw new RangeError('totalHoles måste vara ett positivt heltal.');
    }

    if (!Number.isFinite(startingWeight) || startingWeight <= 0) {
        throw new RangeError('startingWeight måste vara ändligt och större än 0.');
    }
    if (
        playedHoleResults.length > totalHoles ||
        playedHoleResults.some((score) => !Number.isInteger(score))
    ) {
        throw new RangeError('Ange heltalsresultat för högst totalHoles avslutade hål.');
    }
};

export const predictRound = ({ holes, startingWeight }: PredictionInput): Prediction | null => {
    const playedHoleResults: number[] = [];
    const totalHoles = holes.length;
    let currentResult = 0;

    for (const hole of holes) {
        if (hole.score > 0) {
            const result = hole.score - hole.par - 1;
            playedHoleResults.push(result);
            currentResult += result;
        }
    }

    check({
        playedHoleResults,
        totalHoles,
        startingWeight,
    });

    const playedHoles = playedHoleResults.length;

    const remaining = totalHoles - playedHoles;

    if (remaining === 0) {
        return {
            playedHoles,
            currentResult,
            predictedResult: currentResult,
            predictedStrokes: Math.round(coursePar + totalHoles + currentResult),
            estimatedResultRange: { bestResult: currentResult, worstResult: currentResult },
            playedPercentage: 100,
            isComplete: true,
        };
    }

    const averageResultPerPlayedHole = currentResult / playedHoles;
    const effectiveHoleCount = playedHoles + startingWeight;
    // Bogey motsvarar 0, så de virtuella hålen bidrar bara till vikten.
    const estimatedResultPerRemainingHole = currentResult / effectiveHoleCount;

    let squaredDeviations = 0;
    for (const score of playedHoleResults) {
        squaredDeviations += (score - averageResultPerPlayedHole) ** 2;
    }

    // Tar även hänsyn till skillnaden mellan observerat snitt
    // och startvärdet, så tidig oenighet ger större osäkerhet.
    const weightedMeanDifference =
        ((playedHoles * startingWeight) / effectiveHoleCount) * averageResultPerPlayedHole ** 2;

    const estimatedResultVariancePerHole =
        (squaredDeviations + startingWeight * PRIOR_STD ** 2 + weightedMeanDifference) / effectiveHoleCount;

    const expected = currentResult + remaining * estimatedResultPerRemainingHole;
    const remainingResultStandardDeviation = Math.sqrt(
        estimatedResultVariancePerHole * remaining * (1 + remaining / effectiveHoleCount),
    );

    return {
        playedHoles,
        currentResult,
        predictedResult: expected,
        predictedStrokes: Math.round(coursePar + totalHoles + expected),
        estimatedResultRange: {
            bestResult: expected - remainingResultStandardDeviation,
            worstResult: expected + remainingResultStandardDeviation,
        },
        playedPercentage: Math.round((playedHoles / totalHoles) * 100),
        isComplete: false,
    };
};
