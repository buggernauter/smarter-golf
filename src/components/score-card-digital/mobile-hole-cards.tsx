import type { RefObject } from "react";

import {
  EMPTY_SCORE_VALUE,
  PENALTY_OPTIONS,
  SCORE_OPTIONS,
} from "../../constants";
import type {
  Hole,
  UpdateCheckBoxValue,
  UpdateHoleNumericField,
} from "../../types/score-card";
import {
  CompactSelect,
  FieldLabel,
  HoleCard,
  HoleCardHeader,
  HoleField,
  HoleGoal,
  HoleGrid,
  HoleMeta,
  HoleTitle,
  HoleToggle,
  MobileDot,
  MobileDots,
  MobileList,
  ScoreField,
  SelectChevron,
  SelectFieldControl,
} from "./styles";

type Props = {
  holes: Hole[];
  activeHoleIndex: number;
  mobileListRef: RefObject<HTMLDivElement | null>;
  cardRefs: RefObject<Array<HTMLElement | null>>;
  onMobileScroll: () => void;
  onScrollToHole: (index: number) => void;
  updateCheckBoxValue: UpdateCheckBoxValue;
  updateNumericField: UpdateHoleNumericField;
};

export const HoleCards = ({
  holes,
  activeHoleIndex,
  mobileListRef,
  cardRefs,
  onMobileScroll,
  onScrollToHole,
  updateCheckBoxValue,
  updateNumericField,
}: Props) => (
  <>
    <MobileList ref={mobileListRef} onScroll={onMobileScroll}>
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
                onChange={updateCheckBoxValue(index, "scoringZone")}
              />
            </HoleToggle>

            <HoleToggle>
              <FieldLabel>Down in 3</FieldLabel>
              <input
                type="checkbox"
                checked={hole.downIn3}
                onChange={updateCheckBoxValue(index, "downIn3")}
              />
            </HoleToggle>

            <HoleField>
              <FieldLabel>Straff</FieldLabel>
              <SelectFieldControl>
                <CompactSelect
                  value={hole.penalty}
                  onChange={updateNumericField(index, "penalty")}
                >
                  {PENALTY_OPTIONS.map((penalty) => (
                    <option key={penalty} value={penalty}>
                      {penalty}
                    </option>
                  ))}
                </CompactSelect>
                <SelectChevron aria-hidden="true" />
              </SelectFieldControl>
            </HoleField>

            <HoleToggle>
              <FieldLabel>3-putt</FieldLabel>
              <input
                type="checkbox"
                checked={hole.threePutt}
                onChange={updateCheckBoxValue(index, "threePutt")}
              />
            </HoleToggle>
          </HoleGrid>

          <ScoreField>
            <FieldLabel>Score</FieldLabel>
            <SelectFieldControl>
              <CompactSelect
                value={hole.score}
                onChange={updateNumericField(index, "score")}
              >
                <option value={EMPTY_SCORE_VALUE}></option>
                {SCORE_OPTIONS.map((score) => (
                  <option key={score} value={score}>
                    {score}
                  </option>
                ))}
              </CompactSelect>
              <SelectChevron aria-hidden="true" />
            </SelectFieldControl>
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
          onClick={() => onScrollToHole(index)}
        />
      ))}
    </MobileDots>
  </>
);
