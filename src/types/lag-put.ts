export const holes = ["frontNine", "backNine"] as const;

export const LAGPUT_SCORE_STORAGE_KEY = "lagput-score";

export type Round = (typeof holes)[number];
export type Scores = Record<Round, string[]>;

export type SavedLagputRound = {
  scores: Scores;
  totalScore: number;
  level: string;
  savedAt: string;
};
