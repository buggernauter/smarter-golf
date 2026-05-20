import { ClipboardList } from "lucide-react";
import { useState } from "react";

import { CardsCarousel } from "../features/round/components/cards-carousel";
import { HoleNavigator } from "../features/round/components/hole-navigator";

import { SummarySheet } from "../features/round/components/summary-sheet";
import {
  StyledActionBar,
  StyledIconButton,
  StyledPage,
  StyledResetButton,
  StyledResetIcon,
} from "../features/round/components/styles";
import { useRound } from "../hooks/useRound";
import { useRoundNavigation } from "../hooks/useRoundNavigation";

export const RoundTrackerPage = () => {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const { holes, playStrategy, resetRound, updateNumericField, toggleCheckbox } =
    useRound();
  const {
    activeHoleIndex,
    carouselRef,
    nextHole,
    previousHole,
    setHoleCardRef,
    scrollToHole,
  } = useRoundNavigation({
    holesCount: holes.length,
  });

  return (
    <StyledPage>
      <HoleNavigator
        title={<span>Hål {activeHoleIndex + 1}</span>}
        isOnFirstHole={activeHoleIndex === 0}
        isOnLastHole={activeHoleIndex === holes.length - 1}
        onNextHole={nextHole}
        onPreviousHole={previousHole}
      />

      <CardsCarousel
        activeHoleIndex={activeHoleIndex}
        carouselRef={carouselRef}
        holes={holes}
        onScrollToHole={scrollToHole}
        onToggleCheckboxValue={toggleCheckbox}
        onUpdateNumericValue={updateNumericField}
        setHoleCardRef={setHoleCardRef}
        playStrategy={playStrategy}
      />

      <StyledActionBar>
        <StyledIconButton
          type="button"
          aria-label="Öppna rondöversikt"
          onClick={() => setIsSummaryOpen(true)}
        >
          <ClipboardList aria-hidden="true" />
        </StyledIconButton>
      </StyledActionBar>

      <StyledResetButton
        type="button"
        aria-label="Nollställ rond"
        onClick={resetRound}
      >
        <StyledResetIcon aria-hidden="true" />
      </StyledResetButton>

      <SummarySheet
        holes={holes}
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
      />
    </StyledPage>
  );
};
