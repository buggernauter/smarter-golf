import { useEffect, useState, type ChangeEvent } from "react";

import { holeData } from "../api/chgk";
import { summarizeHoles } from "../helpers/score-card";
import { useLocalStorage } from "./useLocalStorage";
import type {
  BooleanHoleField,
  Hole,
  NumericHoleField,
} from "../types/score-card";
import { STORAGE_KEY } from "../constants";

const getScoringGoal = (parValue: number) => {
  if (parValue === 4) return "~90 m på 2 slag";

  if (parValue === 5) return "~90 m på 3 slag";

  return "Putt/chip-läge från tee";
};

const initialValue: Hole[] = holeData.map(
  ({ holeNr, parValue, meterValue }) => ({
    number: holeNr,
    par: parValue,
    score: 0,
    penalty: 0,
    downIn3: false,
    threePutt: false,
    meter: meterValue,
    scoringGoal: getScoringGoal(parValue),
    scoringZone: false,
  }),
);

const createInitialHoles = (): Hole[] =>
  holeData.map(({ holeNr, parValue, meterValue }) => ({
    number: holeNr,
    par: parValue,
    score: 0,
    penalty: 0,
    downIn3: false,
    threePutt: false,
    meter: meterValue,
    scoringGoal: getScoringGoal(parValue),
    scoringZone: false,
  }));

const hasStoredHoleData = (holes: Hole[]) =>
  holes.some(
    (hole) =>
      hole.score > 0 ||
      hole.penalty > 0 ||
      hole.downIn3 ||
      hole.threePutt ||
      hole.scoringZone,
  );

const getStoredHoles = (storedValue?: string | null) => {
  if (!storedValue) {
    return;
  }

  try {
    const parsedValue = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      return;
    }

    return initialValue.map((hole, index) => {
      const storedHole = parsedValue[index];

      if (!storedHole || typeof storedHole !== "object") {
        return hole;
      }

      return {
        ...hole,
        score:
          typeof storedHole.score === "number" ? storedHole.score : hole.score,
        penalty:
          typeof storedHole.penalty === "number"
            ? storedHole.penalty
            : hole.penalty,
        downIn3:
          typeof storedHole.downIn3 === "boolean"
            ? storedHole.downIn3
            : hole.downIn3,
        threePutt:
          typeof storedHole.threePutt === "boolean"
            ? storedHole.threePutt
            : hole.threePutt,
        scoringZone:
          typeof storedHole.scoringZone === "boolean"
            ? storedHole.scoringZone
            : hole.scoringZone,
      };
    });
  } catch (error) {
    console.log(error);
  }
};

export const useScoreCard = (customInitialValue?: Hole[]) => {
  const { getValue, removeValue, setValue } = useLocalStorage();
  const storedHoles =
    customInitialValue ?? getStoredHoles(getValue(STORAGE_KEY));
  const [holes, setHoles] = useState<Hole[]>(storedHoles ?? initialValue);

  useEffect(() => {
    if (!hasStoredHoleData(holes)) {
      removeValue(STORAGE_KEY);
      return;
    }

    setValue({
      key: STORAGE_KEY,
      value: JSON.stringify(holes),
    });
  }, [holes, removeValue, setValue]);

  const updateHole = <K extends keyof Hole>(
    index: number,
    field: K,
    value: Hole[K],
  ) => {
    setHoles((prev) =>
      prev.map((hole, i) => (i === index ? { ...hole, [field]: value } : hole)),
    );
  };

  const updateCheckBoxValue =
    (index: number, field: BooleanHoleField) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      updateHole(index, field, event.target.checked);
    };

  const toggleBooleanField = (index: number, field: BooleanHoleField) => () => {
    setHoles((prev) =>
      prev.map((hole, i) =>
        i === index ? { ...hole, [field]: !hole[field] } : hole,
      ),
    );
  };

  const handleHoleStatChange =
    (index: number, field: NumericHoleField) =>
    (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      updateHole(index, field, Number.parseInt(event.target.value, 10) || 0);
    };

  const resetScoreCard = () => {
    setHoles(createInitialHoles());
  };

  const summary = summarizeHoles(holes);

  return {
    holes,
    setHoles,
    resetScoreCard,
    updateHole,
    updateCheckBoxValue,
    toggleBooleanField,
    handleHoleStatChange,
    ...summary,
  };
};
