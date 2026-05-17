export const EMPTY_SCORE_VALUE = 0;

export const SCORE_OPTIONS = Array.from(
  { length: 10 },
  (_, index) => index + 1,
);

export const PENALTY_OPTIONS = Array.from({ length: 11 }, (_, index) => index);
export const STORAGE_KEY = "score-card";
