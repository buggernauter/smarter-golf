import { spacing, sizes, radii, borderWidths } from '@/styles/tokens';
import styled from 'styled-components';
import { typography, shape, focus } from '@/styles/score';

export const SelectedScore = styled.input`
    box-sizing: border-box;
    width: ${sizes[24]};
    aspect-ratio: ${shape.squareRatio};
    display: block;
    margin: ${spacing[4]} auto ${spacing[6]};
    padding: 0;

    border: ${borderWidths.regular} solid ${({ theme }) => theme.palette.textOnAccent};
    border-radius: ${radii[7.5]};
    background: ${({ theme }) => theme.palette.transparent};
    color: ${({ theme }) => theme.palette.textOnAccent};

    font: inherit;
    font-size: 2.5rem;
    font-weight: ${typography.weight};
    text-align: center;

    &::placeholder {
        color: inherit;
    }
`;

export const ScoreGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing[3]};
    width: fit-content;
    margin: ${spacing[6]} auto;
`;
export const KeypadRow = styled.div`
    display: flex;
    gap: ${spacing[3]};
`;
export const NumberButton = styled.button`
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

    &:focus-visible {
        outline: ${focus.width} solid ${({ theme }) => theme.palette.primaryMain};
        outline-offset: ${focus.offset};
    }
`;
export const DeleteButton = styled(NumberButton)`
    margin-left: auto;
    background: ${({ theme }) => theme.palette.transparent};
    svg {
        width: '75%';
        height: '75%';
    }
`;
