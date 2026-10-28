import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Printer } from "lucide-react";

import { holeData } from "@/api/chgk";
import { Header } from "@/components/global-header";
import {
  StyledActionButton,
  StyledAsideGrid,
  StyledCard,
  StyledCardHeader,
  StyledCardMeta,
  StyledCardTitle,
  StyledCheckboxBox,
  StyledGrid,
  StyledInfoCard,
  StyledInputBox,
  StyledPage,
  StyledPrintGlobalStyle,
  StyledSectionGroup,
  StyledSheet,
  StyledSummary,
  StyledSummaryField,
  StyledSummaryInput,
  StyledTable,
} from "@/components/score-card-print/styles";

type Hole = {
  number: number;
  par: number;
};

const holes: Hole[] = holeData.map(({ holeNr, parValue }) => ({
  number: holeNr,
  par: parValue,
}));

const frontNine = holes.slice(0, 9);
const backNine = holes.slice(9);

const totalPar = holes.reduce((sum, hole) => sum + hole.par, 0);
const frontPar = frontNine.reduce((sum, hole) => sum + hole.par, 0);
const backPar = backNine.reduce((sum, hole) => sum + hole.par, 0);

const sections = [
  { title: "Out", holes: frontNine, parTotal: frontPar },
  { title: "In", holes: backNine, parTotal: backPar },
];

export default function ScoreCardPrint() {
  const navigate = useNavigate();

  return (
    <>
      <StyledPrintGlobalStyle />
      <StyledPage>
        <Header
          className="no-print"
          title="Score card"
          leading={
            <StyledActionButton
              type="button"
              aria-label="Back to scorecard"
              onClick={() => void navigate({ to: "/" })}
            >
              <ArrowLeft aria-hidden="true" />
            </StyledActionButton>
          }
          trailing={
            <StyledActionButton
              type="button"
              aria-label="Print"
              onClick={() => window.print()}
            >
              <Printer aria-hidden="true" />
            </StyledActionButton>
          }
        />
        <StyledSheet aria-label="Printable scorecard">
          <StyledGrid>
            {sections.map((section) => (
              <StyledCard key={section.title}>
                <StyledCardHeader>
                  <StyledCardTitle>{section.title}</StyledCardTitle>
                  <StyledCardMeta>Par {section.parTotal}</StyledCardMeta>
                </StyledCardHeader>

                <StyledTable>
                  <thead>
                    <tr>
                      <th>Hole</th>
                      <th>Par</th>
                      <th>SZ</th>
                      <th>D3</th>
                      <th>Penalties</th>
                      <th>Putts</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.holes.map((hole) => (
                      <tr key={hole.number}>
                        <td>{hole.number}</td>
                        <td>{hole.par}</td>

                        <td>
                          <StyledCheckboxBox aria-hidden="true" />
                        </td>
                        <td>
                          <StyledCheckboxBox aria-hidden="true" />
                        </td>
                        <td>
                          <StyledInputBox aria-hidden="true" />
                        </td>
                        <td>
                          <StyledInputBox aria-hidden="true" />
                        </td>
                        <td>
                          <StyledInputBox aria-hidden="true" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </StyledTable>
              </StyledCard>
            ))}
          </StyledGrid>

          <StyledSectionGroup>
            <StyledSummary aria-label="Summary">
              <StyledSummaryField>
                <span>Out</span>
                <strong>{frontPar}</strong>
                <StyledSummaryInput />
              </StyledSummaryField>
              <StyledSummaryField>
                <span>In</span>
                <strong>{backPar}</strong>
                <StyledSummaryInput />
              </StyledSummaryField>
              <StyledSummaryField>
                <span>Total</span>
                <strong>{totalPar}</strong>
                <StyledSummaryInput />
              </StyledSummaryField>
              <StyledSummaryField>
                <span>To par</span>
                <strong>&nbsp;</strong>
                <StyledSummaryInput />
              </StyledSummaryField>
            </StyledSummary>

            <StyledAsideGrid aria-label="Explanation">
              <StyledInfoCard>
                <h3>Scoring targets</h3>
                <ul>
                  <li>Par 3: putt or chip around the green.</li>
                  <li>Par 4: about 90 m remaining after 2 shots.</li>
                  <li>Par 5: about 90 m remaining after 3 shots.</li>
                </ul>
              </StyledInfoCard>
              <StyledInfoCard>
                <h3>Explanation</h3>
                <p>
                  <strong>Down in 3:</strong> Hole the ball in three
                  strokes from the scoring zone.
                </p>
              </StyledInfoCard>
            </StyledAsideGrid>
          </StyledSectionGroup>
        </StyledSheet>
      </StyledPage>
    </>
  );
}
