import { holeData } from "../../api/chgk";
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
  StyledToolbar,
} from "./styles";

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
  { title: "Ut", holes: frontNine, parTotal: frontPar },
  { title: "In", holes: backNine, parTotal: backPar },
];

export default function ScoreCardPrint() {
  return (
    <>
      <StyledPrintGlobalStyle />
      <StyledPage>
        <StyledToolbar className="no-print">
          <StyledActionButton
            type="button"
            aria-label="Skriv ut"
            onClick={() => window.print()}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3h10v4H7V3Zm10 14H7v4h10v-4Z" />
              <path d="M6 8h12a3 3 0 0 1 3 3v5h-3v-3H6v3H3v-5a3 3 0 0 1 3-3Zm2 7h8v2H8v-2Z" />
            </svg>
          </StyledActionButton>
        </StyledToolbar>
        <StyledSheet aria-label="Scorekort för utskrift">
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
                      <th>Hål</th>
                      <th>Par</th>
                      <th>SZ</th>
                      <th>D3</th>
                      <th>Straff</th>
                      <th>Putts</th>
                      <th>3-putt</th>
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
                          <StyledCheckboxBox aria-hidden="true" />
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
            <StyledSummary aria-label="Summering">
              <StyledSummaryField>
                <span>Ut</span>
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
                <span>Till par</span>
                <strong>&nbsp;</strong>
                <StyledSummaryInput />
              </StyledSummaryField>
            </StyledSummary>

            <StyledAsideGrid aria-label="Förklaring">
              <StyledInfoCard>
                <h3>Scoringmål</h3>
                <ul>
                  <li>Par 3: putt/chip kring green.</li>
                  <li>Par 4: cirka 90 m kvar efter 2 slag.</li>
                  <li>Par 5: cirka 90 m kvar efter 3 slag.</li>
                </ul>
              </StyledInfoCard>
              <StyledInfoCard>
                <h3>Förklaring</h3>
                <p>
                  <strong>Down in 3:</strong> Att du får bollen i hål på tre
                  slag från scoringzonen.
                </p>
              </StyledInfoCard>
            </StyledAsideGrid>
          </StyledSectionGroup>
        </StyledSheet>
      </StyledPage>
    </>
  );
}
