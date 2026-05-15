import type { Hole } from "../types/score-card";

export type Props = {
  totalScore: number;
  totalPenalty: number;
  totalDownIn3: number;
  totalThreePutt: number;
  totalScoringZone: number;
};

export const summarizeHoles = (holes: Hole[]): Props => {
  const summary: Props = {
    totalScore: 0,
    totalPenalty: 0,
    totalDownIn3: 0,
    totalThreePutt: 0,
    totalScoringZone: 0,
  };

  for (const hole of holes) {
    summary.totalScore += hole.score + hole.penalty;
    summary.totalPenalty += hole.penalty;
    summary.totalDownIn3 += Number(hole.downIn3);
    summary.totalThreePutt += Number(hole.threePutt);
    summary.totalScoringZone += Number(hole.scoringZone);
  }

  return summary;
};
