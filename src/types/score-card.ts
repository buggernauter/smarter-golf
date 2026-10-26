export const ScoreGoal = {
    Break100: 100,
    Break90: 90,
    Break80: 80,
} as const;

export type ScoreGoal = (typeof ScoreGoal)[keyof typeof ScoreGoal];

export type SavedRound = {
    id: string;
    savedAt: string;
    playedHoles: Hole[];
    scoreGoal: ScoreGoal | null;
};

export type Hole = {
    number: number;
    par: number;
    stroke: number;
    penalty: number;
    downIn3: boolean;
    threePutt: boolean;
    meter: number;
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
export type PlayedHoleSummary = {
    playedHoles: Hole[];
    totalDownIn3: number;
    totalPar: number;
    totalPenalty: number;
    totalScore: number;
    totalScoringZone: number;
    totalThreePutt: number;
};

export type PlayStrategy = {
    heading: string;
    points: readonly string[];
};
