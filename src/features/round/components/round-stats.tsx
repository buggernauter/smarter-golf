import {
  StyledSummaryCard,
  StyledSummaryGrid,
  StyledSummaryLabel,
} from "./styles";

type Props = {
  relationToPar: string;
  totalDownIn3: number;
  totalPenalty: number;
  totalScore: number;
  totalScoringZone: number;
  totalThreePutt: number;
};

export const RoundStats = ({
  relationToPar,
  totalDownIn3,
  totalPenalty,
  totalScore,
  totalScoringZone,
  totalThreePutt,
}: Props) => (
  <StyledSummaryGrid aria-label="Resultat">
    <StyledSummaryCard>
      <StyledSummaryLabel>Resultat</StyledSummaryLabel>
      <strong>{totalScore}</strong>
    </StyledSummaryCard>
    <StyledSummaryCard>
      <StyledSummaryLabel>Score</StyledSummaryLabel>
      <strong>{relationToPar}</strong>
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
