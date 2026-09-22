import type { Round, Scores } from "../../types/lag-put";

export const lagPuttDistances: Record<Round, number[]> = {
  frontNine: [22, 12, 18, 10, 14, 8, 22, 12, 18],
  backNine: [10, 14, 8, 22, 12, 18, 10, 14, 8],
};

type ScoringSystem = {
  distance: string;
  label: string;
  result: number;
};

export const scoringSystem: ScoringSystem[] = [
  { distance: "Holed", label: "Eagle", result: -2 },
  { distance: "0-0.5m", label: "Birdie", result: -1 },
  { distance: "0.5-1m", label: "Par", result: 0 },
  { distance: "1-2m", label: "Bogey", result: 1 },
  { distance: "2-3m", label: "Double Bogey", result: 2 },
  { distance: "3m", label: "Triple Bogey", result: 3 },
];

export const rankings = [
  { label: "World Class", score: -5.5 },
  { label: "European Tour", score: -2.9 },
  { label: "Challenge Tour", score: -1.5 },
  { label: "HCP +2", score: 0.2 },
  { label: "HCP scratch", score: 2 },
  { label: "HCP 5", score: 6.3 },
  { label: "HCP 10", score: 10.7 },
] as const;

export const createEmptyScores = (): Scores => ({
  frontNine: lagPuttDistances.frontNine.map(() => ""),
  backNine: lagPuttDistances.backNine.map(() => ""),
});
