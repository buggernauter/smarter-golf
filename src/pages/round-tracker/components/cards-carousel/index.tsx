import type { RefObject } from 'react';

import type { Hole, NumericHoleValue } from '@/types/score-card';
import { Card } from '@/pages/round-tracker/components/forecast/card/card';
import {
    StyledCarouselItem,
    StyledCarouselList,
    StyledCarouselWrapper,
    StyledNavigationButton,
} from '@/pages/round-tracker/components/cards-carousel/styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    carouselRef: RefObject<HTMLDivElement | null>;
    holes: Hole[];

    onToggleStrategyPoint: (index: number, point: string) => void;
    updateStrokes: (index: number, field: NumericHoleValue, value: number) => void;
    setHoleCardRef: (index: number, card: HTMLElement | null) => void;
    onHoleFinish: VoidFunction;
    onNextHole: VoidFunction;
    onPreviousHole: VoidFunction;
    isOnFirstHole: boolean;
    isOnLastHole: boolean;
};

export const CardsCarousel = ({
    carouselRef,
    holes,
    onToggleStrategyPoint,
    updateStrokes,
    setHoleCardRef,
    onNextHole,
    onHoleFinish,
    onPreviousHole,
    isOnFirstHole,
    isOnLastHole,
}: Props) => (
    <>
        <StyledCarouselWrapper>
            <StyledNavigationButton
                type="button"
                onClick={onPreviousHole}
                disabled={isOnFirstHole}
                aria-label="Previous hole"
            >
                <ChevronLeft aria-hidden="true" />
            </StyledNavigationButton>
            <StyledCarouselList ref={carouselRef}>
                {holes.map((hole, index) => (
                    <StyledCarouselItem key={hole.number}>
                        <Card
                            hole={hole}
                            index={index}
                            onToggleStrategyPoint={onToggleStrategyPoint}
                            updateStrokes={updateStrokes}
                            setHoleCardRef={setHoleCardRef}
                            onHoleFinish={onHoleFinish}
                        />
                    </StyledCarouselItem>
                ))}
            </StyledCarouselList>
            <StyledNavigationButton
                type="button"
                onClick={onNextHole}
                disabled={isOnLastHole}
                aria-label="Next hole"
            >
                <ChevronRight aria-hidden="true" />
            </StyledNavigationButton>
        </StyledCarouselWrapper>
    </>
);
