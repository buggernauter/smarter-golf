import type { RefObject } from 'react';

import type { PlayStrategy } from '@/domain/round-tracker/golf-round-strategy';
import type { BooleanHoleValue, Hole, NumericHoleValue } from '@/types/score-card';
import { Card } from '@/pages/round-tracker/components/forecast/card/card';
import {
    StyledCarouselItem,
    StyledCarouselList,
    StyledCarouselWrapper,
    StyledNavigationButton,
} from '@/pages/round-tracker/components/cards-carousel.styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    carouselRef: RefObject<HTMLDivElement | null>;
    holes: Hole[];

    onToggleCheckboxValue: (index: number, field: BooleanHoleValue) => void;
    updateStrokes: (index: number, field: NumericHoleValue, value: number) => void;
    setHoleCardRef: (index: number, card: HTMLElement | null) => void;
    playStrategy: (parValue: number) => PlayStrategy;
    onHoleFinish: VoidFunction;
    onNextHole: VoidFunction;
    onPreviousHole: VoidFunction;
    isOnFirstHole: boolean;
    isOnLastHole: boolean;
};

export const CardsCarousel = ({
    carouselRef,
    holes,
    onToggleCheckboxValue,
    updateStrokes,
    setHoleCardRef,
    playStrategy,
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
                            playStrategy={playStrategy(hole.par)}
                            hole={hole}
                            index={index}
                            onToggleCheckbox={onToggleCheckboxValue}
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
