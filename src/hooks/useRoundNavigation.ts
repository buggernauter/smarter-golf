import { useCallback, useEffect, useRef, useState } from "react";

import { clampHoleIndex } from "../domain/round-engine";

type Props = {
  holeCount: number;
};

export const useRoundNavigation = ({ holeCount }: Props) => {
  const [activeHoleIndex, setActiveHoleIndex] = useState(0);
  const activeHoleIndexRef = useRef(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Map<number, HTMLElement>>(new Map());

  useEffect(() => {
    activeHoleIndexRef.current = activeHoleIndex;
  }, [activeHoleIndex]);

  const registerHoleCard = useCallback(
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
      const nextIndex = clampHoleIndex(index, holeCount);
      const card = cardRefs.current.get(nextIndex);

      if (!card) {
        return;
      }

      card.scrollIntoView({
        behavior,
        block: "nearest",
        inline: "start",
      });
      setActiveHoleIndex(nextIndex);
    },
    [holeCount],
  );

  const nextHole = useCallback(() => {
    scrollToHole(activeHoleIndexRef.current + 1);
  }, [scrollToHole]);

  const previousHole = useCallback(() => {
    scrollToHole(activeHoleIndexRef.current - 1);
  }, [scrollToHole]);

  useEffect(() => {
    const root = carouselRef.current;

    if (!root || typeof IntersectionObserver === "undefined") {
      return;
    }

    const visibilityMap = new Map<number, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);

          if (Number.isNaN(index)) {
            return;
          }

          visibilityMap.set(
            index,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        let nextActiveIndex = activeHoleIndexRef.current;
        let highestRatio = 0;

        visibilityMap.forEach((ratio, index) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            nextActiveIndex = index;
          }
        });

        if (highestRatio > 0) {
          setActiveHoleIndex((currentIndex) =>
            currentIndex === nextActiveIndex ? currentIndex : nextActiveIndex,
          );
        }
      },
      {
        root,
        threshold: [0.25, 0.5, 0.75, 0.95],
      },
    );

    cardRefs.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, [holeCount]);

  return {
    activeHoleIndex,
    carouselRef,
    nextHole,
    previousHole,
    registerHoleCard,
    scrollToHole,
  };
};
