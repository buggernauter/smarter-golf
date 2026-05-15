import { holeData } from "../../api/chgk";
import {
  CellCheckBox,
  CellWriteBox,
  HelpBlock,
  NineCard,
  NineCardHeader,
  NineCardPar,
  NineCardTitle,
  Page,
  PrintButton,
  PrintGlobalStyles,
  PrintTable,
  Sheet,
  SheetGrid,
  SheetHelp,
  SheetLower,
  SheetSummary,
  SummaryField,
  SummaryWriteBox,
  Toolbar,
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
      <PrintGlobalStyles />
      <Page>
        <Toolbar className="no-print">
          <PrintButton
            type="button"
            aria-label="Skriv ut"
            onClick={() => window.print()}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3h10v4H7V3Zm10 14H7v4h10v-4Z" />
              <path d="M6 8h12a3 3 0 0 1 3 3v5h-3v-3H6v3H3v-5a3 3 0 0 1 3-3Zm2 7h8v2H8v-2Z" />
            </svg>
          </PrintButton>
        </Toolbar>
        <Sheet aria-label="Scorekort för utskrift">
          <SheetGrid>
            {sections.map((section) => (
              <NineCard key={section.title}>
                <NineCardHeader>
                  <NineCardTitle>{section.title}</NineCardTitle>
                  <NineCardPar>Par {section.parTotal}</NineCardPar>
                </NineCardHeader>

                <PrintTable>
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
                          <CellCheckBox aria-hidden="true" />
                        </td>
                        <td>
                          <CellCheckBox aria-hidden="true" />
                        </td>
                        <td>
                          <CellWriteBox aria-hidden="true" />
                        </td>
                        <td>
                          <CellWriteBox aria-hidden="true" />
                        </td>
                        <td>
                          <CellCheckBox aria-hidden="true" />
                        </td>
                        <td>
                          <CellWriteBox aria-hidden="true" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </PrintTable>
              </NineCard>
            ))}
          </SheetGrid>

          <SheetLower>
            <SheetSummary aria-label="Summering">
              <SummaryField>
                <span>Ut</span>
                <strong>{frontPar}</strong>
                <SummaryWriteBox />
              </SummaryField>
              <SummaryField>
                <span>In</span>
                <strong>{backPar}</strong>
                <SummaryWriteBox />
              </SummaryField>
              <SummaryField>
                <span>Total</span>
                <strong>{totalPar}</strong>
                <SummaryWriteBox />
              </SummaryField>
              <SummaryField>
                <span>Till par</span>
                <strong>&nbsp;</strong>
                <SummaryWriteBox />
              </SummaryField>
            </SheetSummary>

            <SheetHelp aria-label="Förklaring">
              <HelpBlock>
                <h3>Scoringmål</h3>
                <ul>
                  <li>Par 3: putt/chip kring green.</li>
                  <li>Par 4: cirka 90 m kvar efter 2 slag.</li>
                  <li>Par 5: cirka 90 m kvar efter 3 slag.</li>
                </ul>
              </HelpBlock>
              <HelpBlock>
                <h3>Förklaring</h3>
                <p>
                  <strong>Down in 3:</strong> Att du får bollen i hål på tre
                  slag från scoringzonen.
                </p>
              </HelpBlock>
            </SheetHelp>
          </SheetLower>
        </Sheet>
      </Page>
    </>
  );
}
