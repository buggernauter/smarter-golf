import { Minus, Plus } from "lucide-react";

import { MAX_PENALTY, MAX_SCORE, MIN_ROUND_VALUE } from "../../../constants";
import type { PlayStrategy } from "../../../domain/round-strategy";
import type {
  BooleanHoleValue,
  Hole,
  NumericHoleValue,
} from "../../../types/score-card";
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
  StyledField,
  StyledFieldLabel,
  StyledButtonsWrapper,
  StyledStepperButton,
  StyledStepperControl,
  StyledStepperValue,
  StyledToggleRow,
  StyledToggleButton,
} from "./styles";
import { clampValue } from "../../../lib/helper";

type Props = {
  hole: Hole;
  index: number;
  onToggleCheckbox: (index: number, field: BooleanHoleValue) => void;
  onUpdateNumericValue: (
    index: number,
    field: NumericHoleValue,
    value: number,
  ) => void;
  setHoleCardRef: (index: number, card: HTMLElement | null) => void;
  playStrategy: PlayStrategy;
};

export const Card = ({
  hole,
  index,
  onToggleCheckbox,
  onUpdateNumericValue,
  setHoleCardRef,
  playStrategy,
}: Props) => {
  const updatePenalty = (nextValue: number) => {
    onUpdateNumericValue(index, "penalty", clampValue(nextValue, MAX_PENALTY));
  };

  const updateScore = (nextValue: number) => {
    onUpdateNumericValue(index, "score", clampValue(nextValue, MAX_SCORE));
  };

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
        <StyledCardDescriptionText>
          {playStrategy.heading}
        </StyledCardDescriptionText>
        <StyledCardDescriptionList aria-label="Spelplan">
          {playStrategy.points.map((point) => (
            <StyledCardDescriptionPoint key={point}>
              <StyledCardDescriptionPointText>
                {point}
              </StyledCardDescriptionPointText>
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
            onClick={() => onToggleCheckbox(index, "scoringZone")}
          >
            Scoring zone
          </StyledToggleButton>

          <StyledToggleButton
            type="button"
            $active={hole.downIn3}
            aria-pressed={hole.downIn3}
            onClick={() => onToggleCheckbox(index, "downIn3")}
          >
            Down in 3
          </StyledToggleButton>
          <StyledToggleButton
            type="button"
            $active={hole.threePutt}
            $tone="danger"
            aria-pressed={hole.threePutt}
            onClick={() => onToggleCheckbox(index, "threePutt")}
          >
            3-putt
          </StyledToggleButton>
        </StyledToggleRow>
      </StyledButtonsWrapper>

      <StyledControlStack>
        <StyledField>
          <StyledFieldLabel>Score</StyledFieldLabel>
          <StyledStepperControl aria-label={`Score för hål ${hole.number}`}>
            <StyledStepperButton
              type="button"
              aria-label="Minska score"
              disabled={hole.score === MIN_ROUND_VALUE}
              onClick={() => updateScore(hole.score - 1)}
            >
              <Minus aria-hidden="true" />
            </StyledStepperButton>
            <StyledStepperValue>
              <strong>{hole.score || "-"}</strong>
            </StyledStepperValue>
            <StyledStepperButton
              type="button"
              aria-label="Öka score"
              disabled={hole.score === MAX_SCORE}
              onClick={() => updateScore(hole.score + 1)}
            >
              <Plus aria-hidden="true" />
            </StyledStepperButton>
          </StyledStepperControl>
        </StyledField>

        <StyledField>
          <StyledFieldLabel>Straff</StyledFieldLabel>
          <StyledStepperControl aria-label={`Straff för hål ${hole.number}`}>
            <StyledStepperButton
              type="button"
              aria-label="Minska straff"
              disabled={hole.penalty === MIN_ROUND_VALUE}
              onClick={() => updatePenalty(hole.penalty - 1)}
            >
              <Minus aria-hidden="true" />
            </StyledStepperButton>
            <StyledStepperValue>
              <strong>{hole.penalty}</strong>
            </StyledStepperValue>
            <StyledStepperButton
              type="button"
              aria-label="Öka straff"
              disabled={hole.penalty === MAX_PENALTY}
              onClick={() => updatePenalty(hole.penalty + 1)}
            >
              <Plus aria-hidden="true" />
            </StyledStepperButton>
          </StyledStepperControl>
        </StyledField>
      </StyledControlStack>
    </StyledCardWrapper>
  );
};
