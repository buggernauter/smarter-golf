import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  StyledHeader,
  StyledNavigation,
  StyledNavigationButton,
  StyledHeaderTitle,
} from "./styles";

type MobileScoreCardNavProps = {
  activeHoleIndex: number;
  totalHoles: number;
  onScrollToHole: (index: number) => void;
};

export const CardNavigator = ({
  activeHoleIndex,
  totalHoles,
  onScrollToHole,
}: MobileScoreCardNavProps) => (
  <StyledHeader>
    <StyledNavigation aria-label="Navigera mellan hål">
      <StyledNavigationButton
        type="button"
        onClick={() => onScrollToHole(activeHoleIndex - 1)}
        disabled={activeHoleIndex === 0}
        aria-label="Föregående hål"
      >
        <ChevronLeft aria-hidden="true" />
      </StyledNavigationButton>
      <StyledHeaderTitle>Hål {activeHoleIndex + 1}</StyledHeaderTitle>
      <StyledNavigationButton
        type="button"
        onClick={() => onScrollToHole(activeHoleIndex + 1)}
        disabled={activeHoleIndex === totalHoles - 1}
        aria-label="Nästa hål"
      >
        <ChevronRight aria-hidden="true" />
      </StyledNavigationButton>
    </StyledNavigation>
  </StyledHeader>
);
