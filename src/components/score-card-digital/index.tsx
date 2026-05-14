import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { meterValues, parValues, scoringGoals } from "../../api/chgk";
import {
  CompactSelect,
  FieldLabel,
  GoalCell,
  HoleCard,
  HoleCardHeader,
  HoleField,
  HoleGoal,
  HoleGrid,
  HoleMeta,
  HoleTitle,
  HoleToggle,
  Intro,
  IntroTitle,
  MobileButton,
  MobileDot,
  MobileDots,
  MobileHeader,
  MobileList,
  MobileNav,
  MobilePosition,
  Page,
  RelationLabel,
  ScoreField,
  ScoreTable,
  Summary,
  SummaryItem,
  SummaryLabel,
  TableWrapper,
} from "./styles";

type Hole = {
  number: number;
  par: number;
  score: number;
  penalty: number;
  downIn3: boolean;
  threePutt: boolean;
  meter: string;
  scoringGoal: string;
  scoringZone: boolean;
};
const initialHoles: Hole[] = parValues.map((par, i) => ({
  number: i + 1,
  par,
  score: 0,
  penalty: 0,
  downIn3: false,
  threePutt: false,
  meter: meterValues[i] || "",
  scoringGoal: scoringGoals[i],
  scoringZone: false,
}));

const scoreOptions = Array.from({ length: 10 }, (_, index) => index + 1);
const penaltyOptions = Array.from({ length: 11 }, (_, index) => index);

export default function ScoreCardDigital() {
  const [holes, setHoles] = useState<Hole[]>(initialHoles);
  const [activeHoleIndex, setActiveHoleIndex] = useState(0);
  const mobileListRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const updateHole = <K extends keyof Hole>(
    index: number,
    field: K,
    value: Hole[K],
  ) => {
    setHoles((prev) =>
      prev.map((h, i) => (i === index ? { ...h, [field]: value } : h)),
    );
  };

  const totalPar = holes.reduce((sum, h) => sum + h.par, 0);

  const totalScore = holes.reduce(
    (sum, h) => sum + h.score + h.penalty,

    0,
  );

  const totalPenalty = holes.reduce((sum, h) => sum + h.penalty, 0);

  const totalDownIn3 = holes.filter((h) => h.downIn3).length;

  const totalThreePutt = holes.filter((h) => h.threePutt).length;

  const totalScoringZone = holes.filter((h) => h.scoringZone).length;

  const relationToPar = totalScore - totalPar;

  const relationLabel =
    relationToPar === 0
      ? "±0"
      : relationToPar > 0
        ? `+${relationToPar}`
        : relationToPar.toString();

  const scrollToHole = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, holes.length - 1));
    const card = cardRefs.current[nextIndex];

    if (!card) {
      return;
    }

    card.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setActiveHoleIndex(nextIndex);
  };

  const handleMobileScroll = () => {
    const container = mobileListRef.current;

    if (!container) {
      return;
    }

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      const distance = Math.abs(card.offsetLeft - container.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveHoleIndex((prev) => (prev === closestIndex ? prev : closestIndex));
  };

  return (
    <Page>
      <MobileHeader>
        <MobileNav aria-label="Navigera mellan hål">
          <MobileButton
            type="button"
            onClick={() => scrollToHole(activeHoleIndex - 1)}
            disabled={activeHoleIndex === 0}
            aria-label="Föregående hål"
          >
            <ChevronLeft aria-hidden="true" />
          </MobileButton>
          <MobilePosition>
            Hål {activeHoleIndex + 1}
          </MobilePosition>
          <MobileButton
            type="button"
            onClick={() => scrollToHole(activeHoleIndex + 1)}
            disabled={activeHoleIndex === holes.length - 1}
            aria-label="Nästa hål"
          >
            <ChevronRight aria-hidden="true" />
          </MobileButton>
        </MobileNav>
      </MobileHeader>

      <MobileList
        ref={mobileListRef}
        onScroll={handleMobileScroll}
      >
        {holes.map((hole, index) => (
          <HoleCard
            key={hole.number}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
          >
            <HoleCardHeader>
              <div>
                <HoleTitle>Hål {hole.number}</HoleTitle>
                <HoleMeta>
                  Par {hole.par} • {hole.meter} m
                </HoleMeta>
              </div>
            </HoleCardHeader>

            <HoleGoal>{hole.scoringGoal}</HoleGoal>

            <HoleGrid>
              <HoleToggle>
                <FieldLabel>Scoring zone</FieldLabel>
                <input
                  type="checkbox"
                  checked={hole.scoringZone}
                  onChange={(e) =>
                    updateHole(index, "scoringZone", e.target.checked)
                  }
                />
              </HoleToggle>

              <HoleToggle>
                <FieldLabel>Down in 3</FieldLabel>
                <input
                  type="checkbox"
                  checked={hole.downIn3}
                  onChange={(e) =>
                    updateHole(index, "downIn3", e.target.checked)
                  }
                />
              </HoleToggle>

              <HoleField>
                <FieldLabel>Straff</FieldLabel>
                <CompactSelect
                  value={hole.penalty}
                  onChange={(e) =>
                    updateHole(index, "penalty", parseInt(e.target.value) || 0)
                  }
                >
                  {penaltyOptions.map((penalty) => (
                    <option key={penalty} value={penalty}>
                      {penalty}
                    </option>
                  ))}
                </CompactSelect>
              </HoleField>

              <HoleToggle>
                <FieldLabel>3-putt</FieldLabel>
                <input
                  type="checkbox"
                  checked={hole.threePutt}
                  onChange={(e) =>
                    updateHole(index, "threePutt", e.target.checked)
                  }
                />
              </HoleToggle>
            </HoleGrid>

            <ScoreField>
              <FieldLabel>Score</FieldLabel>
              <CompactSelect
                value={hole.score}
                onChange={(e) =>
                  updateHole(index, "score", parseInt(e.target.value) || 0)
                }
              >
                <option value={0}></option>
                {scoreOptions.map((score) => (
                  <option key={score} value={score}>
                    {score}
                  </option>
                ))}
              </CompactSelect>
            </ScoreField>
          </HoleCard>
        ))}
      </MobileList>

      <MobileDots aria-hidden="true">
        {holes.map((hole, index) => (
          <MobileDot
            key={hole.number}
            type="button"
            $active={index === activeHoleIndex}
            aria-label={`Gå till hål ${hole.number}`}
            aria-current={index === activeHoleIndex ? "true" : undefined}
            onClick={() => scrollToHole(index)}
          />
        ))}
      </MobileDots>

      <TableWrapper>
        <ScoreTable>
          <thead>
            <tr>
              <th>Hål</th>
              <th>Par</th>
              <th>Meter</th>
              <th>Scoring zone mål</th>
              <th>Scoring zone</th>
              <th>Down in 3</th>
              <th>Straff</th>
              <th>3-putt</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {holes.map((hole, index) => (
              <tr key={hole.number}>
                <td>{hole.number}</td>
                <td>{hole.par}</td>
                <td>{hole.meter}</td>
                <GoalCell>{hole.scoringGoal}</GoalCell>
                <td>
                  <input
                    type="checkbox"
                    checked={hole.scoringZone}
                    onChange={(e) =>
                      updateHole(index, "scoringZone", e.target.checked)
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={hole.downIn3}
                    onChange={(e) =>
                      updateHole(index, "downIn3", e.target.checked)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    inputMode="numeric"
                    value={hole.penalty}
                    onChange={(e) =>
                      updateHole(
                        index,
                        "penalty",
                        parseInt(e.target.value) || 0,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={hole.threePutt}
                    onChange={(e) =>
                      updateHole(index, "threePutt", e.target.checked)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    inputMode="numeric"
                    value={hole.score}
                    onChange={(e) =>
                      updateHole(index, "score", parseInt(e.target.value) || 0)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td>Total</td>
              <td>{totalPar}</td>
              <td colSpan={2}></td>
              <td>{totalScoringZone}</td>
              <td>{totalDownIn3}</td>
              <td>{totalPenalty}</td>
              <td>{totalThreePutt}</td>
              <td>{totalScore}</td>
            </tr>

            <tr>
              <RelationLabel colSpan={8}>Relation till par</RelationLabel>
              <td>{relationLabel}</td>
            </tr>
          </tfoot>
        </ScoreTable>
      </TableWrapper>

      <Intro>
        <IntroTitle>Scoringmetod</IntroTitle>

        <p>En scoring zone inom cirka 90&nbsp;meter från hålet.</p>

        <ul>
          <li>Par&nbsp;4: är i scoringzonen på maximalt två slag</li>

          <li>Par&nbsp;5: är scoringzonen på maximalt tre slag</li>

          <li>
            Par&nbsp;3: du har bollen på green eller får putt/chip‑läge direkt
            från tee
          </li>
        </ul>

        <p>
          <strong>Down&nbsp;in&nbsp;3</strong> betyder att du får bollen i hål
          på tre slag från scoringzonen.
        </p>
      </Intro>

      <Summary aria-label="Sammanfattning">
        <SummaryItem>
          <SummaryLabel>Par</SummaryLabel>
          <strong>{totalPar}</strong>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>Score</SummaryLabel>
          <strong>{totalScore}</strong>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>Relation</SummaryLabel>
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
    </Page>
  );
}
