import type { Hole, PlayedHoleSummary } from '@/types/score-card';

export const isHoleCompleted = (hole: Pick<Hole, 'stroke'>) =>
    Number.isSafeInteger(hole.stroke) && hole.stroke > 0;

const getPlayedHoles = (holes: Hole[]) => holes.filter(isHoleCompleted);

export const hasPlayedHoles = (holes: Hole[]) => holes.some(isHoleCompleted);

export const getRoundSummary = (holes: Hole[]): PlayedHoleSummary =>
    getPlayedHoles(holes).reduce<PlayedHoleSummary>(
        (summary, hole) => {
            summary.playedHoles.push(hole);
            summary.totalPar += hole.par;
            summary.totalScore += hole.stroke;
            summary.totalPenalty += hole.penalty;
            summary.totalDownIn3 += Number(hole.downIn3);
            summary.totalScoringZone += Number(hole.scoringZone);
            summary.totalThreePutt += Number(hole.threePutt);

            return summary;
        },
        {
            playedHoles: [],
            totalDownIn3: 0,
            totalPar: 0,
            totalPenalty: 0,
            totalScore: 0,
            totalScoringZone: 0,
            totalThreePutt: 0,
        },
    );
