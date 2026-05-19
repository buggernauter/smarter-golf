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

export type RoundStats = {
  relationToPar: string;
  playedHoles: Hole[];
  totalDownIn3: number;
  totalPenalty: number;
  totalPutts: number;
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

const getRelationToParValue = (holes: Hole[]) =>
  holes.reduce((total, hole) => {
    if (hole.score === 0 && hole.penalty === 0) {
      return total;
    }

    return total + hole.score + hole.penalty - hole.par;
  }, 0);

const formatRelationToPar = (relationToPar: number) => {
  if (relationToPar === 0) {
    return "-";
  }

  if (relationToPar > 0) {
    return `+${relationToPar}`;
  }

  return relationToPar.toString();
};

export const getRoundStats = (holes: Hole[]): RoundStats => {
  const relationToPar = getRelationToParValue(holes);

  return holes.reduce<RoundStats>(
    (stats, hole) => {
      stats.totalScore += hole.score + hole.penalty;
      stats.totalPenalty += hole.penalty;
      stats.totalDownIn3 += Number(hole.downIn3);
      stats.totalThreePutt += Number(hole.threePutt);
      stats.totalScoringZone += Number(hole.scoringZone);

      return stats;
    },
    {
      relationToPar: formatRelationToPar(relationToPar),
      playedHoles: getPlayedHoles(holes),
      totalDownIn3: 0,
      totalPenalty: 0,

      totalPutts: 0,
      totalScore: 0,
      totalScoringZone: 0,
      totalThreePutt: 0,
    },
  );
};
