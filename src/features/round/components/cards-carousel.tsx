import type { RefObject } from "react";

import type {
  BooleanHoleValue,
  Hole,
  NumericHoleValue,
} from "../../../types/score-card";
import { Card } from "./card";
import {
  StyledCarouselList,
  StyledPagination,
  StyledPaginationDot,
} from "./styles";

type Props = {
  activeHoleIndex: number;
  carouselRef: RefObject<HTMLDivElement | null>;
  holes: Hole[];
  onScrollToHole: (index: number) => void;
  onToggleCheckboxValue: (index: number, field: BooleanHoleValue) => void;
  onUpdateNumericValue: (
    index: number,
    field: NumericHoleValue,
    value: number,
  ) => void;
  setHoleCardRef: (index: number, card: HTMLElement | null) => void;
};

export const CardsCarousel = ({
  activeHoleIndex,
  carouselRef,
  holes,
  onScrollToHole,
  onToggleCheckboxValue,
  onUpdateNumericValue,
  setHoleCardRef,
}: Props) => (
  <>
    <StyledCarouselList ref={carouselRef}>
      {holes.map((hole, index) => (
        <Card
          key={hole.number}
          hole={hole}
          index={index}
          onToggleCheckbox={onToggleCheckboxValue}
          onUpdateNumericValue={onUpdateNumericValue}
          setHoleCardRef={setHoleCardRef}
        />
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
