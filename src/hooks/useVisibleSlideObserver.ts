import { useEffect, type RefObject } from "react";

type Props = {
  rootRef: RefObject<HTMLElement | null>;
  elementsRef: RefObject<Map<number, HTMLElement>>;
  threshold?: number;
  onVisibleIndexChange: (index: number) => void;
};

export const useVisibleSlideObserver = ({
  rootRef,
  elementsRef,
  threshold = 0.6,
  onVisibleIndexChange,
}: Props) => {
  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const nextIndex = Number(
          (visibleEntry.target as HTMLElement).dataset.index,
        );

        if (Number.isNaN(nextIndex)) {
          return;
        }

        onVisibleIndexChange(nextIndex);
      },
      {
        root,
        threshold,
      },
    );

    elementsRef.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [elementsRef, onVisibleIndexChange, rootRef, threshold]);
};
