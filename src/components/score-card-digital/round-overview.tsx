import {
  StyledSummaryCard,
  StyledSummaryGrid,
  StyledSummaryLabel,
} from "./styles";

type Props = {
  relationLabel: string;
  totalScore: number;
  totalScoringZone: number;
  totalDownIn3: number;
  totalPenalty: number;
  totalThreePutt: number;
};

export const RoundOverview = ({
  relationLabel,
  totalScore,
  totalScoringZone,
  totalDownIn3,
  totalPenalty,
  totalThreePutt,
}: Props) => (
  <StyledSummaryGrid aria-label="Resultat">
    <StyledSummaryCard>
      <StyledSummaryLabel>Resultat</StyledSummaryLabel>
      <strong>{totalScore}</strong>
    </StyledSummaryCard>
    <StyledSummaryCard>
      <StyledSummaryLabel>Score</StyledSummaryLabel>
      <strong>{relationLabel}</strong>
    </StyledSummaryCard>
    <StyledSummaryCard>
      <StyledSummaryLabel>Scoring zone</StyledSummaryLabel>
      <strong>{totalScoringZone}</strong>
    </StyledSummaryCard>
    <StyledSummaryCard>
      <StyledSummaryLabel>Down in 3</StyledSummaryLabel>
      <strong>{totalDownIn3}</strong>
    </StyledSummaryCard>
    <StyledSummaryCard>
      <StyledSummaryLabel>Straff</StyledSummaryLabel>
      <strong>{totalPenalty}</strong>
    </StyledSummaryCard>
    <StyledSummaryCard>
      <StyledSummaryLabel>3-putt</StyledSummaryLabel>
      <strong>{totalThreePutt}</strong>
    </StyledSummaryCard>
  </StyledSummaryGrid>
);
