import { Summary, SummaryItem, SummaryLabel } from "./styles";

type Props = {
  relationLabel: string;
  totalScore: number;
  totalScoringZone: number;
  totalDownIn3: number;
  totalPenalty: number;
  totalThreePutt: number;
};

export const ScoreCardSummary = ({
  relationLabel,
  totalScore,
  totalScoringZone,
  totalDownIn3,
  totalPenalty,
  totalThreePutt,
}: Props) => (
  <Summary aria-label="Resultat">
    <SummaryItem>
      <SummaryLabel>Resultat</SummaryLabel>
      <strong>{totalScore}</strong>
    </SummaryItem>
    <SummaryItem>
      <SummaryLabel>Score</SummaryLabel>
      <strong>{relationLabel}</strong>
    </SummaryItem>
    <SummaryItem>
      <SummaryLabel>Scoring zone</SummaryLabel>
      <strong>{totalScoringZone}</strong>
    </SummaryItem>
    <SummaryItem>
      <SummaryLabel>Down in 3</SummaryLabel>
      <strong>{totalDownIn3}</strong>
    </SummaryItem>
    <SummaryItem>
      <SummaryLabel>Straff</SummaryLabel>
      <strong>{totalPenalty}</strong>
    </SummaryItem>
    <SummaryItem>
      <SummaryLabel>3-putt</SummaryLabel>
      <strong>{totalThreePutt}</strong>
    </SummaryItem>
  </Summary>
);
