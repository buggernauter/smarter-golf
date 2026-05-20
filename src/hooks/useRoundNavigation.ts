import { useCallback, useEffect, useRef, useState } from "react";

import { clampHoleIndex } from "../domain/round-engine";
import { useVisibleSlideObserver } from "./useVisibleSlideObserver";

type Props = {
  holesCount: number;
};

export const useRoundNavigation = ({ holesCount }: Props) => {
  const [activeHoleIndex, setActiveHoleIndex] = useState(0);
  const activeHoleIndexRef = useRef(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Map<number, HTMLElement>>(new Map());

  useVisibleSlideObserver({
    rootRef: carouselRef,

    elementsRef: cardRefs,

    onVisibleIndexChange: (nextIndex) => {
      setActiveHoleIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex,
      );
    },
  });

  useEffect(() => {
    activeHoleIndexRef.current = activeHoleIndex;
  }, [activeHoleIndex]);

  const setHoleCardRef = useCallback(
    (index: number, card: HTMLElement | null) => {
      if (card) {
        card.dataset.index = index.toString();
        cardRefs.current.set(index, card);
        return;
      }

      cardRefs.current.delete(index);
    },
    [],
  );

  const scrollToHole = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const nextIndex = clampHoleIndex(index, holesCount);
      const card = cardRefs.current.get(nextIndex);

      if (!card) {
        return;
      }

      card.scrollIntoView({
        behavior,
        block: "nearest",
        inline: "start",
      });
    },
    [holesCount],
  );

  const nextHole = useCallback(() => {
    scrollToHole(activeHoleIndexRef.current + 1);
  }, [scrollToHole]);

  const previousHole = useCallback(() => {
    scrollToHole(activeHoleIndexRef.current - 1);
  }, [scrollToHole]);

  return {
    activeHoleIndex,
    carouselRef,
    nextHole,
    previousHole,
    setHoleCardRef,
    scrollToHole,
  };
};
