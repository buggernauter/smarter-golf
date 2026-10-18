import styled from 'styled-components';
export const SCORE_BUTTON_SIZE = '5rem';
export const SCORE_GRID_GAP = '0.75rem';

const trigger = {
    size: '5.5rem',
    gap: '0.25rem',
    radius: '1rem',
    valueFontSize: '2rem',
} as const;

const badge = {
    offset: '-0.5rem',
    size: '2rem',
    padding: '0.25rem',
    fontSize: '0.875rem',
} as const;

const modal = {
    width: '26.25rem',
    height: '42.5rem',
    viewportGutter: '2rem',
    padding: '1.5rem',
    radius: '1.25rem',
} as const;

const selectedScore = {
    size: '6rem',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    borderWidth: '0.125rem',
    radius: '1.875rem',
    fontSize: '2.5rem',
} as const;
//TODO: should be moved to global styles or to a dynamic Typography component
const typography = {
    weight: 600,
    lineHeight: 1,
    labelLineHeight: 1.2,
    numberScale: 0.45,
    labelScale: 0.16,
} as const;

const shape = {
    circleRadius: '50%',
    squareRatio: 1,
    borderWidth: '0.0625rem',
} as const;

const focus = {
    width: '0.1875rem',
    offset: '0.25rem',
} as const;

const GRID_MARGIN = '1.5rem';
const DELETE_ICON_SIZE = '75%';

export const ScoreTrigger = styled.button`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${trigger.gap};
    box-sizing: border-box;
    width: ${trigger.size};
    height: ${trigger.size};
    flex-shrink: 0;
    align-self: center;
    margin-inline: auto;
    padding: 0;
    border: ${shape.borderWidth} solid ${({ theme }) => theme.palette.outlineVariant};
    border-radius: ${trigger.radius};
    background: ${({ theme }) => theme.palette.primaryMain};

    color: ${({ theme }) => theme.palette.textOnAccent};
    font: inherit;
    cursor: pointer;

    strong {
        font-size: ${trigger.valueFontSize};
        line-height: ${typography.lineHeight};
    }

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.palette.surfaceSecondary};
            border-color: ${({ theme }) => theme.palette.borderDefault};
        }
    }

    &:focus-visible {
        outline: ${focus.width} solid ${({ theme }) => theme.palette.primaryMain};
        outline-offset: ${focus.offset};
    }
`;
export const StyledPlaceHolder = styled.p`
    color: ${({ theme }) => theme.palette.textPrimary};
    font-size: medium;
    text-align: center;
`;

export const StyledValue = styled.strong`
    font-size: ${trigger.valueFontSize};
    line-height: ${typography.lineHeight};
`;
export const StrategyBadge = styled.span<{ $onStrategy: boolean }>`
    position: absolute;
    right: ${badge.offset};
    bottom: ${badge.offset};
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${badge.size};
    height: ${badge.size};
    padding-inline: ${badge.padding};
    box-sizing: border-box;
    border-radius: ${shape.circleRadius};
    background: ${({ $onStrategy, theme }) => ($onStrategy ? theme.palette.success : theme.palette.fail)};
    color: ${({ theme }) => theme.palette.textOnAccent};
    font-size: ${badge.fontSize};
    font-weight: ${typography.weight};
    line-height: ${typography.lineHeight};
`;
export const ScoreModal = styled.dialog`
    --score-size: ${SCORE_BUTTON_SIZE};
    box-sizing: border-box;
    width: ${modal.width};
    height: ${modal.height};
    max-width: calc(100vw - ${modal.viewportGutter});
    max-height: calc(100dvh - ${modal.viewportGutter});
    padding: ${modal.padding};
    overflow-y: auto;
    border: ${shape.borderWidth} solid ${({ theme }) => theme.palette.outlineVariant};
    border-radius: ${modal.radius};
    background: ${({ theme }) => theme.palette.backgroundPaper};
    overflow: hidden;

    &::backdrop {
        background: ${({ theme }) => theme.palette.backdrop};
    }
`;
export const ScoreGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SCORE_GRID_GAP};
    width: fit-content;
    margin: ${GRID_MARGIN} auto;
`;
export const ScoreRow = styled.div`
    display: flex;
    gap: ${SCORE_GRID_GAP};
`;
export const ScoreButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 var(--score-size);
    width: var(--score-size);
    height: var(--score-size);
    box-sizing: border-box;
    padding: 0;
    aspect-ratio: ${shape.squareRatio};
    border: 0;
    border-radius: ${shape.circleRadius};
    background: ${({ theme }) => theme.palette.scoreOptionBackground};
    color: ${({ theme }) => theme.palette.textOnAccent};
    font: inherit;
    cursor: pointer;

    span {
        font-size: calc(var(--score-size) * ${typography.numberScale});
        line-height: ${typography.lineHeight};
    }

    small {
        font-size: calc(var(--score-size) * ${typography.labelScale});
        line-height: ${typography.labelLineHeight};
    }

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.palette.surfaceSecondary};
        }
    }

    &:focus-visible {
        outline: ${focus.width} solid ${({ theme }) => theme.palette.primaryMain};
        outline-offset: ${focus.offset};
    }
`;
export const SelectedScore = styled.input`
    box-sizing: border-box;
    width: ${selectedScore.size};
    aspect-ratio: ${shape.squareRatio};
    display: block;
    margin: ${selectedScore.marginTop} auto ${selectedScore.marginBottom};
    padding: 0;

    border: ${selectedScore.borderWidth} solid ${({ theme }) => theme.palette.textOnAccent};
    border-radius: ${selectedScore.radius};
    background: ${({ theme }) => theme.palette.transparent};
    color: ${({ theme }) => theme.palette.textOnAccent};

    font: inherit;
    font-size: ${selectedScore.fontSize};
    font-weight: ${typography.weight};
    text-align: center;

    &::placeholder {
        color: inherit;
    }
`;
export const DeleteButton = styled(ScoreButton)`
    margin-left: auto;
    background: ${({ theme }) => theme.palette.transparent};
    svg {
        width: ${DELETE_ICON_SIZE};
        height: ${DELETE_ICON_SIZE};
    }
    &:hover {
        background: ${({ theme }) => theme.palette.transparent};
    }
`;
