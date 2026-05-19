import { MIN_ROUND_VALUE } from "../constants";

export const clampValue = (value: number, max: number) =>
  Math.max(MIN_ROUND_VALUE, Math.min(max, value));
