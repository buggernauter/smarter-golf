import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  StyledHeader,
  StyledHeaderTitle,
  StyledNavigation,
  StyledNavigationButton,
} from "./styles";

type Props = {
  activeHoleIndex: number;
  isOnFirstHole: boolean;
  isOnLastHole: boolean;
  onNextHole: () => void;
  onPreviousHole: () => void;
};

export const HoleNavigator = ({
  activeHoleIndex,
  isOnFirstHole,
  isOnLastHole,
  onNextHole,
  onPreviousHole,
}: Props) => (
  <StyledHeader>
    <StyledNavigation aria-label="Navigera mellan hål">
      <StyledNavigationButton
        type="button"
        onClick={onPreviousHole}
        disabled={isOnFirstHole}
        aria-label="Föregående hål"
      >
        <ChevronLeft aria-hidden="true" />
      </StyledNavigationButton>
      <StyledHeaderTitle>Hål {activeHoleIndex + 1}</StyledHeaderTitle>
      <StyledNavigationButton
        type="button"
        onClick={onNextHole}
        disabled={isOnLastHole}
        aria-label="Nästa hål"
      >
        <ChevronRight aria-hidden="true" />
      </StyledNavigationButton>
    </StyledNavigation>
  </StyledHeader>
);
