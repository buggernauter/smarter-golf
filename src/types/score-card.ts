export type Hole = {
  number: number;
  par: number;
  score: number;
  penalty: number;
  downIn3: boolean;
  threePutt: boolean;
  meter: number;
  scoringGoal: string;
  scoringZone: boolean;
};

export type BooleanHoleValue = "scoringZone" | "downIn3" | "threePutt";
export type NumericHoleValue = "penalty" | "score";
