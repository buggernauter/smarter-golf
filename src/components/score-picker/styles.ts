import { spacing, sizes, radii } from '@/styles/tokens';
import styled from 'styled-components';
import { typography, shape, focus } from '@/styles/score';

export const ScoreTrigger = styled.button`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${spacing[1]};
    box-sizing: border-box;
    width: ${sizes[22]};
    height: ${sizes[22]};
    flex-shrink: 0;
    align-self: center;
    margin-inline: auto;
    padding: 0;
    border: ${shape.borderWidth} solid ${({ theme }) => theme.palette.outlineVariant};
    border-radius: ${radii[4]};
    background: ${({ theme }) => theme.palette.primaryMain};

    color: ${({ theme }) => theme.palette.textOnAccent};
    font: inherit;
    cursor: pointer;

    strong {
        font-size: 2rem;
        line-height: ${typography.lineHeight};
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
    font-size: 2rem;
    line-height: ${typography.lineHeight};
`;
export const StrategyBadge = styled.span<{ $onStrategy: boolean }>`
    position: absolute;
    right: -${spacing[2]};
    bottom: -${spacing[2]};
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${sizes[8]};
    height: ${sizes[8]};
    padding-inline: ${spacing[1]};
    box-sizing: border-box;
    border-radius: ${shape.circleRadius};
    background: ${({ $onStrategy, theme }) => ($onStrategy ? theme.palette.success : theme.palette.fail)};
    color: ${({ theme }) => theme.palette.textOnAccent};
    font-size: 0.875rem;
    font-weight: ${typography.weight};
    line-height: ${typography.lineHeight};
`;
export const ScoreModal = styled.dialog`
    --score-size: ${sizes[20]};
    box-sizing: border-box;
    width: ${sizes[105]};
    height: ${sizes[170]};
    max-width: calc(${sizes.viewportWidth} - ${sizes[8]});
    max-height: calc(${sizes.dynamicViewportHeight} - ${sizes[8]});
    padding: ${spacing[6]};
    overflow-y: auto;
    border: ${shape.borderWidth} solid ${({ theme }) => theme.palette.outlineVariant};
    border-radius: ${radii[5]};
    background: ${({ theme }) => theme.palette.backgroundPaper};
    overflow: hidden;

    &::backdrop {
        background: ${({ theme }) => theme.palette.backdrop};
    }
`;
