import type { RefObject } from "react";

import {
  EMPTY_SCORE_VALUE,
  PENALTY_OPTIONS,
  SCORE_OPTIONS,
} from "../../constants";
import type {
  Hole,
  ToggleHoleBooleanField,
  UpdateHoleNumericField,
} from "../../types/score-card";
import {
  StyledCardDescription,
  StyledCardHeader,
  StyledCardMeta,
  StyledCardTitle,
  StyledCardWrapper,
  StyledCarouselList,
  StyledCompactSelect,
  StyledField,
  StyledFieldLabel,
  StyledGrid,
  StyledPagination,
  StyledPaginationDot,
  StyledSelectControl,
  StyledSelectIcon,
  StyledToggleButton,
} from "./styles";

type Props = {
  holes: Hole[];
  activeHoleIndex: number;
  mobileListRef: RefObject<HTMLDivElement | null>;
  cardRefs: RefObject<Array<HTMLElement | null>>;
  onMobileScroll: () => void;
  onScrollToHole: (index: number) => void;
  toggleBooleanField: ToggleHoleBooleanField;
  updateNumericField: UpdateHoleNumericField;
};

export const HoleCardCarousel = ({
  holes,
  activeHoleIndex,
  mobileListRef,
  cardRefs,
  onMobileScroll,
  onScrollToHole,
  toggleBooleanField,
  updateNumericField,
}: Props) => (
  <>
    <StyledCarouselList ref={mobileListRef} onScroll={onMobileScroll}>
      {holes.map((hole, index) => (
        <StyledCardWrapper
          key={hole.number}
          ref={(element) => {
            cardRefs.current[index] = element;
          }}
        >
          <StyledCardHeader>
            <div>
              <StyledCardTitle>Hål {hole.number}</StyledCardTitle>
              <StyledCardMeta>{hole.meter} m</StyledCardMeta>
            </div>
          </StyledCardHeader>

          <StyledCardDescription>{hole.scoringGoal}</StyledCardDescription>

          <StyledGrid>
            <StyledToggleButton
              type="button"
              $active={hole.scoringZone}
              aria-pressed={hole.scoringZone}
              onClick={toggleBooleanField(index, "scoringZone")}
            >
              Scoring zone
            </StyledToggleButton>

            <StyledToggleButton
              type="button"
              $active={hole.downIn3}
              aria-pressed={hole.downIn3}
              onClick={toggleBooleanField(index, "downIn3")}
            >
              Down in 3
            </StyledToggleButton>
            <StyledToggleButton
              type="button"
              $active={hole.threePutt}
              $tone="danger"
              aria-pressed={hole.threePutt}
              onClick={toggleBooleanField(index, "threePutt")}
            >
              3-putt
            </StyledToggleButton>

            <StyledField>
              <StyledFieldLabel>Straff</StyledFieldLabel>
              <StyledSelectControl>
                <StyledCompactSelect
                  value={hole.penalty}
                  onChange={updateNumericField(index, "penalty")}
                >
                  {PENALTY_OPTIONS.map((penalty) => (
                    <option key={penalty} value={penalty}>
                      {penalty}
                    </option>
                  ))}
                </StyledCompactSelect>
                <StyledSelectIcon aria-hidden="true" />
              </StyledSelectControl>
            </StyledField>
          </StyledGrid>

          <StyledField>
            <StyledFieldLabel>Score</StyledFieldLabel>
            <StyledSelectControl>
              <StyledCompactSelect
                value={hole.score}
                onChange={updateNumericField(index, "score")}
              >
                <option value={EMPTY_SCORE_VALUE}>-</option>
                {SCORE_OPTIONS.map((score) => (
                  <option key={score} value={score}>
                    {score}
                  </option>
                ))}
              </StyledCompactSelect>
              <StyledSelectIcon aria-hidden="true" />
            </StyledSelectControl>
          </StyledField>
        </StyledCardWrapper>
      ))}
    </StyledCarouselList>

    <StyledPagination aria-hidden="true">
      {holes.map((hole, index) => (
        <StyledPaginationDot
          key={hole.number}
          type="button"
          $active={index === activeHoleIndex}
          aria-label={`Gå till hål ${hole.number}`}
          aria-current={index === activeHoleIndex ? "true" : undefined}
          onClick={() => onScrollToHole(index)}
        />
      ))}
    </StyledPagination>
  </>
);
