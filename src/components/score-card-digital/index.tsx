import { useCallback, useEffect, useRef, useState } from "react";

import { useScoreCard } from "../../hooks/use-score-card";
import { HoleCards } from "./mobile-hole-cards";
import { CardNavigator } from "./mobile-score-card-nav";

import { ScoreCardSummary } from "./score-card-summary";

import { IconActionButton, Page, TopActionBar } from "./styles";
import { ClipboardList } from "lucide-react";
import { SummarizedCard } from "./summarized-card";

export const ScoreCardDigital = () => {
  const [activeHoleIndex, setActiveHoleIndex] = useState(0);
  const [showSummarize, setShowSummarize] = useState(false);
  const mobileListRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const previousShowSummarizeRef = useRef(false);
  const summaryOriginHoleIndexRef = useRef(0);
  const isRestoringHolePositionRef = useRef(false);

  const {
    holes,
    totalScore,
    totalPenalty,
    totalDownIn3,
    totalThreePutt,
    totalScoringZone,
    updateCheckBoxValue,
    handleHoleStatChange,
  } = useScoreCard();

  const scrollCardIntoView = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const nextIndex = Math.max(0, Math.min(index, holes.length - 1));
      const card = cardRefs.current[nextIndex];
      if (!card) {
        return;
      }
      card.scrollIntoView({
        behavior,
        inline: "start",
        block: "nearest",
      });
    },
    [holes.length],
  );

  const scrollToHole = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, holes.length - 1));
    scrollCardIntoView(nextIndex);
    setActiveHoleIndex(nextIndex);
  };

  const openSummary = () => {
    summaryOriginHoleIndexRef.current = activeHoleIndex;
    setShowSummarize(true);
  };

  const closeSummary = () => {
    setShowSummarize(false);
  };

  useEffect(() => {
    const shouldRestoreHolePosition =
      previousShowSummarizeRef.current && !showSummarize;

    previousShowSummarizeRef.current = showSummarize;

    if (!shouldRestoreHolePosition) {
      return;
    }

    const holeIndexToRestore = summaryOriginHoleIndexRef.current;
    isRestoringHolePositionRef.current = true;
    setActiveHoleIndex(holeIndexToRestore);

    const frameId = window.requestAnimationFrame(() => {
      scrollCardIntoView(holeIndexToRestore, "auto");
    });

    const timeoutId = window.setTimeout(() => {
      isRestoringHolePositionRef.current = false;
    }, 150);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      isRestoringHolePositionRef.current = false;
    };
  }, [showSummarize, scrollCardIntoView]);

  const handleMobileScroll = () => {
    const container = mobileListRef.current;

    if (!container || isRestoringHolePositionRef.current) {
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

  const relationToPar = holes.reduce((total, hole) => {
    if (hole.score === 0 && hole.penalty === 0) {
      return total;
    }

    return total + hole.score + hole.penalty - hole.par;
  }, 0);

  let relationLabel = relationToPar.toString();

  if (relationToPar === 0) {
    relationLabel = "-";
  }

  if (relationToPar > 0) {
    relationLabel = `+${relationToPar}`;
  }

  return (
    <Page $isSummaryView={showSummarize}>
      {!showSummarize && (
        <TopActionBar>
          <IconActionButton
            type="button"
            aria-label="Öppna score card"
            onClick={openSummary}
          >
            <ClipboardList aria-hidden="true" />
          </IconActionButton>
        </TopActionBar>
      )}
      {showSummarize ? (
        <SummarizedCard holes={holes} onClose={closeSummary} />
      ) : (
        <>
          <CardNavigator
            activeHoleIndex={activeHoleIndex}
            totalHoles={holes.length}
            onScrollToHole={scrollToHole}
          />

          <HoleCards
            holes={holes}
            activeHoleIndex={activeHoleIndex}
            mobileListRef={mobileListRef}
            cardRefs={cardRefs}
            onMobileScroll={handleMobileScroll}
            onScrollToHole={scrollToHole}
            updateCheckBoxValue={updateCheckBoxValue}
            updateNumericField={handleHoleStatChange}
          />

          <ScoreCardSummary
            relationLabel={relationLabel}
            totalScore={totalScore}
            totalScoringZone={totalScoringZone}
            totalDownIn3={totalDownIn3}
            totalPenalty={totalPenalty}
            totalThreePutt={totalThreePutt}
          />
        </>
      )}
    </Page>
  );
};
