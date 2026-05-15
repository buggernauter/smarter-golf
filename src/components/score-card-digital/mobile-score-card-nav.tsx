import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  MobileButton,
  MobileHeader,
  MobileNav,
  MobilePosition,
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
  <MobileHeader>
    <MobileNav aria-label="Navigera mellan hål">
      <MobileButton
        type="button"
        onClick={() => onScrollToHole(activeHoleIndex - 1)}
        disabled={activeHoleIndex === 0}
        aria-label="Föregående hål"
      >
        <ChevronLeft aria-hidden="true" />
      </MobileButton>
      <MobilePosition>Hål {activeHoleIndex + 1}</MobilePosition>
      <MobileButton
        type="button"
        onClick={() => onScrollToHole(activeHoleIndex + 1)}
        disabled={activeHoleIndex === totalHoles - 1}
        aria-label="Nästa hål"
      >
        <ChevronRight aria-hidden="true" />
      </MobileButton>
    </MobileNav>
  </MobileHeader>
);
