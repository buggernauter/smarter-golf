import { Check, X } from "lucide-react";

import type { Hole } from "../../types/score-card";
import {
  OverviewCard,
  OverviewCloseButton,
  OverviewCell,
  OverviewEmpty,
  OverviewFooterLabel,
  OverviewHoleCell,
  OverviewHoleBadge,
  OverviewIconCell,
  OverviewScore,
  OverviewTable,
  OverviewTableWrap,
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

export const SummarizedCard = ({ holes, onClose }: Props) => {
  const playedHoles = holes.filter(isHolePlayed);

  if (playedHoles.length === 0) {
    return (
      <>
        <OverviewCard>
          <OverviewEmpty>Ingen spelad hålstatistik ännu.</OverviewEmpty>
        </OverviewCard>
        <OverviewCloseButton type="button" title="Close" onClick={onClose}>
          Close
        </OverviewCloseButton>
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
      <OverviewCard>
        <OverviewTableWrap>
          <OverviewTable aria-label="Översikt för spelade hål">
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
                  <OverviewHoleCell>
                    <OverviewHoleBadge>{hole.number}</OverviewHoleBadge>
                  </OverviewHoleCell>
                  <OverviewCell>{hole.par}</OverviewCell>
                  <OverviewScore>{hole.score || "-"}</OverviewScore>
                  <OverviewIconCell
                    $tone={hole.scoringZone ? "success" : "danger"}
                  >
                    {renderCheckState(hole.scoringZone)}
                  </OverviewIconCell>
                  <OverviewIconCell $tone={hole.downIn3 ? "success" : "danger"}>
                    {renderCheckState(hole.downIn3)}
                  </OverviewIconCell>
                  <OverviewCell>{hole.penalty}</OverviewCell>
                  <OverviewIconCell $tone="danger">
                    {hole.threePutt ? <X aria-hidden="true" /> : "No"}
                  </OverviewIconCell>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <OverviewFooterLabel>Result</OverviewFooterLabel>
                <OverviewCell>{totalPar}</OverviewCell>
                <OverviewScore>{totalScore}</OverviewScore>
                <OverviewCell>{totalScoringZone}</OverviewCell>
                <OverviewCell>{totalDownIn3}</OverviewCell>
                <OverviewCell>{totalPenalty}</OverviewCell>
                <OverviewCell>{totalThreePutt}</OverviewCell>
              </tr>
            </tfoot>
          </OverviewTable>
        </OverviewTableWrap>
      </OverviewCard>
      <OverviewCloseButton type="button" title="Close" onClick={onClose}>
        Close
      </OverviewCloseButton>
    </>
  );
};
