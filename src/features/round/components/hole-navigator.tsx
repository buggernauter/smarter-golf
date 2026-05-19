import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  StyledHeader,
  StyledHeaderTitle,
  StyledNavigation,
  StyledNavigationButton,
} from "./styles";
import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  isOnFirstHole: boolean;
  isOnLastHole: boolean;
  onNextHole: () => void;
  onPreviousHole: () => void;
};

export const HoleNavigator = ({
  title,
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
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
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
