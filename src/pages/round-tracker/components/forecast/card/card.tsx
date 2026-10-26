import { MAX_SCORE } from '@/constants';
import { getStrategyDelta, getPlayStrategy } from '@/domain/round-tracker/round-strategy';
import type { Hole, NumericHoleValue } from '@/types/score-card';

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
} from '@/pages/round-tracker/components/forecast/card/styles';

type Props = {
    hole: Hole;
    index: number;
    onToggleStrategyPoint: (index: number, point: string) => void;
    updateStrokes: (index: number, field: NumericHoleValue, value: number) => void;
    setHoleCardRef: (index: number, card: HTMLElement | null) => void;
    onHoleFinish: VoidFunction;
};

export const Card = ({
    hole,
    index,
    onToggleStrategyPoint,
    updateStrokes,
    setHoleCardRef,
    onHoleFinish,
}: Props) => {
    const playStrategy = getPlayStrategy(hole.par);
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
                            <label>
                                <StyledCardDescriptionPointText>{point}</StyledCardDescriptionPointText>
                                <input
                                    type="checkbox"
                                    checked={hole.completedStrategyPoints?.includes(point) ?? false}
                                    onChange={() => onToggleStrategyPoint(index, point)}
                                />
                            </label>
                        </StyledCardDescriptionPoint>
                    ))}
                </StyledCardDescriptionList>
            </StyledCardDescription>

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
