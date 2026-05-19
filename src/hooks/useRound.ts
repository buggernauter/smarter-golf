import { useCallback, useEffect, useState } from "react";

import {
  createInitialHoles,
  toggleRoundBooleanValue,
  updateRoundNumericValue,
} from "../domain/round-engine";

import type { BooleanHoleValue, NumericHoleValue } from "../types/score-card";
import { useRoundStorage } from "./useRoundStorage";

export const useRound = () => {
  const { clearRound, hydrateRound, syncRound } = useRoundStorage();
  const [holes, setHoles] = useState(() => hydrateRound(createInitialHoles()));

  useEffect(() => {
    syncRound(holes);
  }, [holes, syncRound]);

  const updateNumericField = useCallback(
    (index: number, field: NumericHoleValue, value: number) => {
      setHoles((currentHoles) =>
        updateRoundNumericValue(currentHoles, index, field, value),
      );
    },
    [],
  );

  const toggleCheckbox = useCallback(
    (index: number, field: BooleanHoleValue) => {
      setHoles((currentHoles) =>
        toggleRoundBooleanValue(currentHoles, index, field),
      );
    },
    [],
  );

  const resetRound = useCallback(() => {
    clearRound();
    setHoles(createInitialHoles());
  }, [clearRound]);

  return {
    holes,
    resetRound,
    toggleCheckbox,
    updateNumericField,
  };
};
