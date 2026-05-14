import "./styles.css";
import { parValues } from "../../api/chgk";

type Hole = {
  number: number;
  par: number;
};

const holes: Hole[] = parValues.map((par, index) => ({
  number: index + 1,
  par,
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
      <div className="print-card-page">
        <div className="print-card-toolbar no-print">
          <button
            type="button"
            className="print-card-button"
            aria-label="Skriv ut"
            onClick={() => window.print()}
          >
            <svg
              className="print-card-button-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 3h10v4H7V3Zm10 14H7v4h10v-4Z" />
              <path d="M6 8h12a3 3 0 0 1 3 3v5h-3v-3H6v3H3v-5a3 3 0 0 1 3-3Zm2 7h8v2H8v-2Z" />
            </svg>
          </button>
        </div>
        <main className="print-sheet" aria-label="Scorekort för utskrift">
          <section className="sheet-grid">
            {sections.map((section) => (
              <section key={section.title} className="nine-card">
                <div className="nine-card-header">
                  <h3>{section.title}</h3>
                  <p>Par {section.parTotal}</p>
                </div>

                <table className="print-table">
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
                          <span className="check-box" aria-hidden="true" />
                        </td>
                        <td>
                          <span className="check-box" aria-hidden="true" />
                        </td>
                        <td>
                          <span className="write-box" aria-hidden="true" />
                        </td>
                        <td>
                          <span className="write-box" aria-hidden="true" />
                        </td>
                        <td>
                          <span className="check-box" aria-hidden="true" />
                        </td>
                        <td>
                          <span className="write-box" aria-hidden="true" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            ))}
          </section>

          <div className="sheet-lower">
            <section className="sheet-summary" aria-label="Summering">
              <div className="summary-field">
                <span>Ut</span>
                <strong>{frontPar}</strong>
                <div className="summary-write-box" />
              </div>
              <div className="summary-field">
                <span>In</span>
                <strong>{backPar}</strong>
                <div className="summary-write-box" />
              </div>
              <div className="summary-field">
                <span>Total</span>
                <strong>{totalPar}</strong>
                <div className="summary-write-box" />
              </div>
              <div className="summary-field">
                <span>Till par</span>
                <strong>&nbsp;</strong>
                <div className="summary-write-box" />
              </div>
            </section>

            <section className="sheet-help" aria-label="Förklaring">
              <div className="help-block">
                <h3>Scoringmål</h3>
                <ul>
                  <li>Par 3: putt/chip-läge direkt från tee.</li>
                  <li>Par 4: cirka 90 m kvar efter 2 slag.</li>
                  <li>Par 5: cirka 90 m kvar efter 3 slag.</li>
                </ul>
              </div>
              <div className="help-block">
                <h3>Förklaring</h3>
                <p>
                  <strong>Down in 3:</strong> Att du får bollen i hål på tre
                  slag från scoringzonen.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
