import { MAX_SCORE } from '@/constants';
import { getStrategyDelta } from '@/domain/round-tracker/round-strategy';
import type { PlayStrategy } from '@/types/score-card';
import type { BooleanHoleValue, Hole, NumericHoleValue } from '@/types/score-card';

import { ScorePicker } from '@/components/score-picker';
import {
    StyledCardHeader,
    StyledCardWrapper,
    StyledCardDescriptionList,
    StyledCardDescription,
    StyledCardDescriptionPoint,
    StyledCardDescriptionPointText,
    StyledCardDescriptionText,
    StyledCardMeta,
    StyledCardTitle,
    StyledControlStack,
    StyledButtonsWrapper,
    StyledToggleRow,
    StyledToggleButton,
} from '@/pages/round-tracker/components/forecast/card/styles';

type Props = {
    hole: Hole;
    index: number;
    onToggleCheckbox: (index: number, field: BooleanHoleValue) => void;
    updateStrokes: (index: number, field: NumericHoleValue, value: number) => void;
    setHoleCardRef: (index: number, card: HTMLElement | null) => void;
    playStrategy: PlayStrategy;
    onHoleFinish: VoidFunction;
};

export const Card = ({
    hole,
    index,
    onToggleCheckbox,
    updateStrokes,
    setHoleCardRef,
    playStrategy,
    onHoleFinish,
}: Props) => {
    const strategyDelta = getStrategyDelta(hole.stroke, hole.par);

    return (
        <StyledCardWrapper
            ref={(card) => {
                setHoleCardRef(index, card);
            }}
        >
            <StyledCardHeader>
                <div>
                    <StyledCardTitle>Hole {hole.number}</StyledCardTitle>
                    <StyledCardMeta>
                        Par {hole.par} • {hole.meter} m
                    </StyledCardMeta>
                </div>
            </StyledCardHeader>

            <StyledCardDescription aria-label={`Target for hole ${hole.number}`}>
                <StyledCardDescriptionText>{playStrategy.heading}</StyledCardDescriptionText>
                <StyledCardDescriptionList aria-label="Game plan">
                    {playStrategy.points.map((point) => (
                        <StyledCardDescriptionPoint key={point}>
                            <StyledCardDescriptionPointText>{point}</StyledCardDescriptionPointText>
                        </StyledCardDescriptionPoint>
                    ))}
                </StyledCardDescriptionList>
            </StyledCardDescription>

            <StyledButtonsWrapper>
                <StyledToggleRow>
                    <StyledToggleButton
                        type="button"
                        $active={hole.scoringZone}
                        aria-pressed={hole.scoringZone}
                        onClick={() => onToggleCheckbox(index, 'scoringZone')}
                    >
                        Scoring zone
                    </StyledToggleButton>

                    <StyledToggleButton
                        type="button"
                        $active={hole.downIn3}
                        aria-pressed={hole.downIn3}
                        onClick={() => onToggleCheckbox(index, 'downIn3')}
                    >
                        Down in 3
                    </StyledToggleButton>
                    <StyledToggleButton
                        type="button"
                        $active={hole.threePutt}
                        $tone="danger"
                        aria-pressed={hole.threePutt}
                        onClick={() => onToggleCheckbox(index, 'threePutt')}
                    >
                        3-putt
                    </StyledToggleButton>
                </StyledToggleRow>
            </StyledButtonsWrapper>

            <StyledControlStack>
                <ScorePicker
                    value={hole.stroke}
                    par={hole.par}
                    maxValue={MAX_SCORE}
                    updateStrokes={(value) => updateStrokes(index, 'stroke', value)}
                    strategyDelta={strategyDelta}
                    onHoleFinish={onHoleFinish}
                />
            </StyledControlStack>
        </StyledCardWrapper>
    );
};
