import { Check, X } from "lucide-react";

import type { Hole } from "../../types/score-card";
import {
  StyledBadge,
  StyledCloseButton,
  StyledEmptyText,
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
  onClose: () => void;
};

const isHolePlayed = (hole: Hole) =>
  hole.score > 0 ||
  hole.penalty > 0 ||
  hole.scoringZone ||
  hole.downIn3 ||
  hole.threePutt;

const renderCheckState = (value: boolean) =>
  value ? <Check aria-hidden="true" /> : <X aria-hidden="true" />;

export const ScoreCardSummary = ({ holes, onClose }: Props) => {
  const playedHoles = holes.filter(isHolePlayed);

  if (playedHoles.length === 0) {
    return (
      <>
        <StyledTableCard>
          <StyledEmptyText>Ingen spelad hålstatistik ännu.</StyledEmptyText>
        </StyledTableCard>
        <StyledCloseButton type="button" title="Close" onClick={onClose}>
          Close
        </StyledCloseButton>
      </>
    );
  }

  const totalPar = playedHoles.reduce((sum, hole) => sum + hole.par, 0);
  const totalScore = playedHoles.reduce((sum, hole) => sum + hole.score, 0);
  const totalScoringZone = playedHoles.reduce(
    (sum, hole) => sum + Number(hole.scoringZone),
    0,
  );
  const totalDownIn3 = playedHoles.reduce(
    (sum, hole) => sum + Number(hole.downIn3),
    0,
  );
  const totalPenalty = playedHoles.reduce((sum, hole) => sum + hole.penalty, 0);
  const totalThreePutt = playedHoles.reduce(
    (sum, hole) => sum + Number(hole.threePutt),
    0,
  );

  return (
    <>
      <StyledTableCard>
        <StyledTableWrapper>
          <StyledTable aria-label="Översikt för spelade hål">
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
      </StyledTableCard>
      <StyledCloseButton type="button" title="Close" onClick={onClose}>
        Close
      </StyledCloseButton>
    </>
  );
};
