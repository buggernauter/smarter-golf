import type { RefObject } from 'react';

import type { PlayStrategy } from '../../../domain/round-tracker/golf-round-strategy';
import type { BooleanHoleValue, Hole, NumericHoleValue } from '../../../types/score-card';
import { Card } from './card';
import {
    StyledCarouselList,
    StyledCarouselWrapper,
    StyledNavigationButton,
} from '../../../pages/round-tracker/styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    carouselRef: RefObject<HTMLDivElement | null>;
    holes: Hole[];

    onToggleCheckboxValue: (index: number, field: BooleanHoleValue) => void;
    onUpdateValue: (index: number, field: NumericHoleValue, value: number) => void;
    setHoleCardRef: (index: number, card: HTMLElement | null) => void;
    playStrategy: (parValue: number) => PlayStrategy;
    onNextHole: VoidFunction;
    onPreviousHole: VoidFunction;
    isOnFirstHole: boolean;
    isOnLastHole: boolean;
};

export const CardsCarousel = ({
    carouselRef,
    holes,
    onToggleCheckboxValue,
    onUpdateValue,
    setHoleCardRef,
    playStrategy,
    onNextHole,
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
                aria-label="Föregående hål"
            >
                <ChevronLeft aria-hidden="true" />
            </StyledNavigationButton>
            <StyledCarouselList ref={carouselRef}>
                {holes.map((hole, index) => (
                    <Card
                        key={hole.number}
                        playStrategy={playStrategy(hole.par)}
                        hole={hole}
                        index={index}
                        onToggleCheckbox={onToggleCheckboxValue}
                        onUpdateValue={onUpdateValue}
                        setHoleCardRef={setHoleCardRef}
                    />
                ))}
            </StyledCarouselList>
            <StyledNavigationButton
                type="button"
                onClick={onNextHole}
                disabled={isOnLastHole}
                aria-label="Nästa hål"
            >
                <ChevronRight aria-hidden="true" />
            </StyledNavigationButton>
        </StyledCarouselWrapper>
    </>
);
