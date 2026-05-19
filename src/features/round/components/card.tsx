import {
  EMPTY_SCORE_VALUE,
  PENALTY_OPTIONS,
  SCORE_OPTIONS,
} from "../../../constants";
import type {
  BooleanHoleValue,
  Hole,
  NumericHoleValue,
} from "../../../types/score-card";
import {
  StyledCardDescription,
  StyledCardHeader,
  StyledCardMeta,
  StyledCardTitle,
  StyledCardWrapper,
  StyledCompactSelect,
  StyledField,
  StyledFieldLabel,
  StyledGrid,
  StyledSelectControl,
  StyledSelectIcon,
  StyledSpacedField,
  StyledToggleButton,
} from "./styles";

type Props = {
  hole: Hole;
  index: number;
  onToggleCheckbox: (index: number, field: BooleanHoleValue) => void;
  onUpdateNumericValue: (
    index: number,
    field: NumericHoleValue,
    value: number,
  ) => void;
  registerCard: (index: number, card: HTMLElement | null) => void;
};

export const Card = ({
  hole,
  index,
  onToggleCheckbox,
  onUpdateNumericValue,
  registerCard,
}: Props) => (
  <StyledCardWrapper
    ref={(card) => {
      registerCard(index, card);
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

    <StyledCardDescription>{hole.scoringGoal}</StyledCardDescription>

    <StyledGrid>
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
      <StyledField>
        <StyledFieldLabel>Straff</StyledFieldLabel>
        <StyledSelectControl>
          <StyledCompactSelect
            value={hole.penalty}
            onChange={(event) =>
              onUpdateNumericValue(
                index,
                "penalty",
                Number.parseInt(event.target.value, 10) || 0,
              )
            }
          >
            {PENALTY_OPTIONS.map((penalty) => (
              <option key={penalty} value={penalty}>
                {penalty}
              </option>
            ))}
          </StyledCompactSelect>
          <StyledSelectIcon aria-hidden="true" />
        </StyledSelectControl>
      </StyledField>
    </StyledGrid>

    <StyledSpacedField>
      <StyledFieldLabel>Score</StyledFieldLabel>
      <StyledSelectControl>
        <StyledCompactSelect
          value={hole.score}
          onChange={(event) =>
            onUpdateNumericValue(
              index,
              "score",
              Number.parseInt(event.target.value, 10) || 0,
            )
          }
        >
          <option value={EMPTY_SCORE_VALUE}>-</option>
          {SCORE_OPTIONS.map((score) => (
            <option key={score} value={score}>
              {score}
            </option>
          ))}
        </StyledCompactSelect>
        <StyledSelectIcon aria-hidden="true" />
      </StyledSelectControl>
    </StyledSpacedField>
  </StyledCardWrapper>
);
