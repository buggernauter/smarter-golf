import { holeData } from "../api/chgk";
import { activeScoringStrategy } from "./round-strategy";
import type {
  BooleanHoleValue,
  Hole,
  NumericHoleValue,
} from "../types/score-card";

const createInitialHole = ({
  holeNr,
  parValue,
  meterValue,
}: (typeof holeData)[number]): Hole => ({
  number: holeNr,
  par: parValue,
  score: 0,
  penalty: 0,
  downIn3: false,
  threePutt: false,
  meter: meterValue,
  scoringGoal: activeScoringStrategy.getTargetByPar(parValue),
  scoringZone: false,
});

export const createInitialHoles = (): Hole[] => holeData.map(createInitialHole);

export const clampHoleIndex = (index: number, holeCount: number) =>
  Math.max(0, Math.min(index, Math.max(0, holeCount - 1)));

export const updateRoundNumericValue = (
  holes: Hole[],
  index: number,
  field: NumericHoleValue,
  value: number,
) =>
  holes.map((hole, holeIndex) =>
    holeIndex === index ? { ...hole, [field]: value } : hole,
  );

export const toggleRoundBooleanValue = (
  holes: Hole[],
  index: number,
  field: BooleanHoleValue,
) =>
  holes.map((hole, holeIndex) =>
    holeIndex === index ? { ...hole, [field]: !hole[field] } : hole,
  );
