import type { Hole } from "../types/score-card";

export type PlayedHoleSummary = {
  playedHoles: Hole[];
  totalDownIn3: number;
  totalPar: number;
  totalPenalty: number;
  totalScore: number;
  totalScoringZone: number;
  totalThreePutt: number;
};

export const isHolePlayed = (hole: Hole) =>
  hole.score > 0 ||
  hole.penalty > 0 ||
  hole.scoringZone ||
  hole.downIn3 ||
  hole.threePutt;

export const getPlayedHoles = (holes: Hole[]) => holes.filter(isHolePlayed);

export const hasRoundData = (holes: Hole[]) => holes.some(isHolePlayed);

export const isSaveableRound = (holes: Hole[]) => {
  const playedHoleCount = getPlayedHoles(holes).length;

  return playedHoleCount === 9 || playedHoleCount === 18;
};

export const getPlayedHoleSummary = (holes: Hole[]): PlayedHoleSummary =>
  getPlayedHoles(holes).reduce<PlayedHoleSummary>(
    (summary, hole) => {
      summary.playedHoles.push(hole);
      summary.totalPar += hole.par;
      summary.totalScore += hole.score;
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
