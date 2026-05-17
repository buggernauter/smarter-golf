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

export type BooleanHoleField = "scoringZone" | "downIn3" | "threePutt";
export type NumericHoleField = "penalty" | "score";

export type UpdateCheckBoxValue = (
  index: number,
  field: BooleanHoleField,
) => (event: React.ChangeEvent<HTMLInputElement>) => void;

export type ToggleHoleBooleanField = (
  index: number,
  field: BooleanHoleField,
) => () => void;

export type UpdateHoleNumericField = (
  index: number,
  field: NumericHoleField,
) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
