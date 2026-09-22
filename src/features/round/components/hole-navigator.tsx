import { ChevronLeft, ChevronRight } from "lucide-react";

import { Header } from "../../../components/global-header";
import { StyledNavigationButton } from "../../../pages/round-tracker/styles";
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
  <Header
    title={title}
    leading={
      <StyledNavigationButton
        type="button"
        onClick={onPreviousHole}
        disabled={isOnFirstHole}
        aria-label="Föregående hål"
      >
        <ChevronLeft aria-hidden="true" />
      </StyledNavigationButton>
    }
    trailing={
      <StyledNavigationButton
        type="button"
        onClick={onNextHole}
        disabled={isOnLastHole}
        aria-label="Nästa hål"
      >
        <ChevronRight aria-hidden="true" />
      </StyledNavigationButton>
    }
  />
);
