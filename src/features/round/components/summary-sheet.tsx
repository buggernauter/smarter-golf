import { Check, X } from "lucide-react";

import { getPlayedHoleSummary } from "../../../domain/round-selectors";
import type { Hole } from "../../../types/score-card";
import {
  StyledBadge,
  StyledEmptyText,
  StyledPrimaryButton,
  StyledSummarySheet,
  StyledSummarySheetBackdrop,
  StyledSummarySheetBody,
  StyledSummarySheetFooter,
  StyledSummarySheetHeader,
  StyledSummarySheetTitle,
  StyledTable,
  StyledTableCard,
  StyledTableCell,
  StyledTableCellPrimary,
  StyledTableFooterCell,
  StyledTableStatusCell,
  StyledTableValue,
  StyledTableWrapper,
} from "./styles";

type Props = {
  holes: Hole[];
  isOpen: boolean;
  onClose: () => void;
  onSaveRound: () => void;
};

const renderCheckState = (value: boolean) =>
  value ? <Check aria-hidden="true" /> : <X aria-hidden="true" />;

export const SummarySheet = ({
  holes,
  isOpen,
  onClose,
  onSaveRound,
}: Props) => {
  const {
    playedHoles,
    totalDownIn3,
    totalPar,
    totalPenalty,
    totalScore,
    totalScoringZone,
    totalThreePutt,
  } = getPlayedHoleSummary(holes);

  return (
    <StyledSummarySheetBackdrop
      $open={isOpen}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <StyledSummarySheet
        $open={isOpen}
        aria-label="Översikt för spelade hål"
        aria-modal="true"
        role="dialog"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <StyledSummarySheetHeader>
          <StyledSummarySheetTitle>Scorekort</StyledSummarySheetTitle>
        </StyledSummarySheetHeader>

        <StyledSummarySheetBody>
          <StyledTableCard>
            {playedHoles.length === 0 ? (
              <StyledEmptyText>Ingen spelad hålstatistik ännu.</StyledEmptyText>
            ) : (
              <StyledTableWrapper>
                <StyledTable>
                  <thead>
                    <tr>
                      <th>Hål</th>
                      <th>Par</th>
                      <th>Slag</th>
                      <th>SZ</th>
                      <th>D3</th>
                      <th>Straff</th>
                      <th>3-putt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playedHoles.map((hole) => (
                      <tr key={hole.number}>
                        <StyledTableCellPrimary>
                          <StyledBadge>{hole.number}</StyledBadge>
                        </StyledTableCellPrimary>
                        <StyledTableCell>{hole.par}</StyledTableCell>
                        <StyledTableValue>{hole.score || "-"}</StyledTableValue>
                        <StyledTableStatusCell
                          $tone={hole.scoringZone ? "success" : "danger"}
                        >
                          {renderCheckState(hole.scoringZone)}
                        </StyledTableStatusCell>
                        <StyledTableStatusCell
                          $tone={hole.downIn3 ? "success" : "danger"}
                        >
                          {renderCheckState(hole.downIn3)}
                        </StyledTableStatusCell>
                        <StyledTableCell>{hole.penalty}</StyledTableCell>
                        <StyledTableStatusCell $tone="danger">
                          {hole.threePutt ? <X aria-hidden="true" /> : "No"}
                        </StyledTableStatusCell>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <StyledTableFooterCell>Result</StyledTableFooterCell>
                      <StyledTableCell>{totalPar}</StyledTableCell>
                      <StyledTableValue>{totalScore}</StyledTableValue>
                      <StyledTableCell>{totalScoringZone}</StyledTableCell>
                      <StyledTableCell>{totalDownIn3}</StyledTableCell>
                      <StyledTableCell>{totalPenalty}</StyledTableCell>
                      <StyledTableCell>{totalThreePutt}</StyledTableCell>
                    </tr>
                  </tfoot>
                </StyledTable>
              </StyledTableWrapper>
            )}
          </StyledTableCard>
        </StyledSummarySheetBody>

        <StyledSummarySheetFooter>
          <StyledPrimaryButton type="button" onClick={onClose}>
            Close
          </StyledPrimaryButton>

          <StyledPrimaryButton onClick={onSaveRound}>
            Save round
          </StyledPrimaryButton>
        </StyledSummarySheetFooter>
      </StyledSummarySheet>
    </StyledSummarySheetBackdrop>
  );
};
