import { createFileRoute } from "@tanstack/react-router";

import ScoreCardPrint from "../components/score-card-print";

export const Route = createFileRoute("/print")({
  component: ScoreCardPrint,
});
