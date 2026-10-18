import { MAX_SCORE } from '../../../constants';
import { getStrategyDelta, type PlayStrategy } from '../../../domain/round-tracker/golf-round-strategy';
import type { BooleanHoleValue, Hole, NumericHoleValue } from '../../../types/score-card';

import {
    StyledCardDescription,
    StyledCardDescriptionList,
    StyledCardDescriptionPoint,
    StyledCardDescriptionPointText,
    StyledCardDescriptionText,
    StyledCardHeader,
    StyledCardMeta,
    StyledCardTitle,
    StyledControlStack,
    StyledCardWrapper,
    StyledButtonsWrapper,
    StyledToggleRow,
    StyledToggleButton,
} from '../styles';
import { ScorePicker } from '../../../components/score-picker';

type Props = {
    hole: Hole;
    index: number;
    onToggleCheckbox: (index: number, field: BooleanHoleValue) => void;
    onUpdateValue: (index: number, field: NumericHoleValue, value: number) => void;
    setHoleCardRef: (index: number, card: HTMLElement | null) => void;
    playStrategy: PlayStrategy;
};

export const Card = ({
    hole,
    index,
    onToggleCheckbox,
    onUpdateValue,
    setHoleCardRef,
    playStrategy,
}: Props) => {
    const updateScore = (value: number) => {
        onUpdateValue(index, 'score', value);
    };
    const strategyDelta = getStrategyDelta(hole.score, hole.par);

    return (
        <StyledCardWrapper
            ref={(card) => {
                setHoleCardRef(index, card);
            }}
        >
            <StyledCardHeader>
                <div>
                    <StyledCardTitle>Hål {hole.number}</StyledCardTitle>
                    <StyledCardMeta>
                        Par {hole.par} • {hole.meter} m
                    </StyledCardMeta>
                </div>
            </StyledCardHeader>

            <StyledCardDescription aria-label={`Mål för hål ${hole.number}`}>
                <StyledCardDescriptionText>{playStrategy.heading}</StyledCardDescriptionText>
                <StyledCardDescriptionList aria-label="Spelplan">
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
                    value={hole.score}
                    par={hole.par}
                    maxValue={MAX_SCORE}
                    onSelect={updateScore}
                    strategyDelta={strategyDelta}
                />
            </StyledControlStack>
        </StyledCardWrapper>
    );
};
