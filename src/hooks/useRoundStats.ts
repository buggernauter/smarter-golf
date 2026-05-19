import { useMemo } from "react";

import { getRoundStats } from "../domain/round-selectors";
import type { Hole } from "../types/score-card";

export const useRoundStats = (holes: Hole[]) =>
  useMemo(() => getRoundStats(holes), [holes]);
