import type { PlayStrategy } from '@/types/score-card';

export const StrategyPoint = {
    ScoringZone: '~ 90 m from green',
    TwoPutts: '2 putts',
} as const;

const par3Strategy: PlayStrategy = {
    heading: 'Scoring zone in 1 shot',
    points: ['Ball of green ', StrategyPoint.TwoPutts],
};
const par4Strategy: PlayStrategy = {
    heading: 'Scoring zone in 2 shots',
    points: ['Ball in play', StrategyPoint.ScoringZone, 'Green hit', StrategyPoint.TwoPutts],
};

const par5Strategy: PlayStrategy = {
    heading: 'Scoring zone in 3 shots',
    points: ['Ball in play', 'layup', StrategyPoint.ScoringZone, 'Green hit', StrategyPoint.TwoPutts],
};

export const getPlayStrategy = (parValue: number): PlayStrategy => {
    switch (parValue) {
        case 3:
            return par3Strategy;
        case 4:
            return par4Strategy;
        case 5:
            return par5Strategy;
        default:
            throw new RangeError('Play strategy requires a par of 3, 4 or 5.');
    }
};

export const getStrategyDelta = (stroke: number, par: number) => {
    const targetScore = par + 1;
    return stroke - targetScore;
};
