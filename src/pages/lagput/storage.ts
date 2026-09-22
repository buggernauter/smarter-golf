import type { SavedLagputRound, Scores } from "../../types/lag-put";

export const getSavedLagputRounds = (value: string | null | undefined) => {
  if (!value) {
    return [];
  }

  try {
    const parsedValue: unknown = JSON.parse(value);
    const rounds = Array.isArray(parsedValue) ? parsedValue : [parsedValue];

    return rounds.filter(isSavedLagputRound);
  } catch {
    return [];
  }
};

const isSavedLagputRound = (value: unknown): value is SavedLagputRound => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const round = value as Partial<SavedLagputRound>;

  return (
    isScores(round.scores) &&
    typeof round.totalScore === "number" &&
    typeof round.level === "string" &&
    typeof round.savedAt === "string"
  );
};

const isScores = (value: unknown): value is Scores => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const scores = value as Partial<Scores>;

  return (
    Array.isArray(scores.frontNine) &&
    Array.isArray(scores.backNine) &&
    scores.frontNine.every((score) => typeof score === "string") &&
    scores.backNine.every((score) => typeof score === "string")
  );
};
