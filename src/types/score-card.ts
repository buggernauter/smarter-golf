export type Hole = {
    number: number;
    par: number;
    stroke: number;
    penalty: number;
    downIn3: boolean;
    threePutt: boolean;
    meter: number;
    scoringGoal: string;
    scoringZone: boolean;
};

export type BooleanHoleValue = 'scoringZone' | 'downIn3' | 'threePutt';
export type NumericHoleValue = 'penalty' | 'stroke';
export type Prediction = {
    completedHoles: number;
    strokesSoFar: number;
    predictedRemainingStrokes: number | null;
    predictedTotalStrokes: number | null;
    playedPercentage: number;
    isRoundComplete: boolean;
    predictedStrokesRange: { lower: number; higher: number } | null;
};
export type GetPredictedStrokesRange = ({
    completedHoles,
    strokesSoFar,
    predictedTotalStrokes,
}: {
    completedHoles: number;
    strokesSoFar: number;
    predictedTotalStrokes: number;
}) => Prediction['predictedStrokesRange'];
