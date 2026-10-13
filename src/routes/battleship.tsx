import { createFileRoute } from "@tanstack/react-router";
import { BattleshipPage } from "../pages/battle-ship";

export const Route = createFileRoute("/battleship")({
  component: BattleshipPage,
});
