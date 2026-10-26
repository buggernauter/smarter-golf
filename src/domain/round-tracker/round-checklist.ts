import { StrategyPoint } from '@/domain/round-tracker/round-strategy';

export const getChecklistStats = (checkedPoints: readonly string[]) => {
    const hasReachedScoringZone = checkedPoints.includes(StrategyPoint.ScoringZone);
    const hasTwoPutts = checkedPoints.includes(StrategyPoint.TwoPutts);

    return {
        scoringZone: hasReachedScoringZone,
        downIn3: hasReachedScoringZone && hasTwoPutts,
    };
};
