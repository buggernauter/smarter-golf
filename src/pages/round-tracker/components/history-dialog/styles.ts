import { spacing, sizes, borderWidths, pixels } from '@/styles/tokens';
import styled from 'styled-components';

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
`;
export const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-bottom: ${spacing[2]};
    border-bottom: ${borderWidths.pixel} solid ${({ theme }) => theme.palette.outlineVariant};
    color: ${({ theme }) => theme.palette.textPrimary};
`;
export const StyledOpenButton = styled.button`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: ${spacing[3]};
    min-width: 0;
    padding: ${spacing[4]} ${spacing[3]};
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;


    &:focus-visible {
        outline: ${borderWidths.doublePixel} solid currentColor;
        outline-offset: -${pixels[2]};
    }

    > svg {
        flex-shrink: 0;
        width: ${sizes[6]};
        height: ${sizes[6]};
    }
`;

export const StyledDeleteButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    width: ${sizes[11]};
    height: ${sizes[11]};
    margin-left: ${spacing[1]};
    padding: 0;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.palette.fail};
    cursor: pointer;


    &:focus-visible {
        outline: ${borderWidths.doublePixel} solid currentColor;
        outline-offset: -${pixels[2]};
    }

    svg {
        width: ${sizes[5]};
        height: ${sizes[5]};
    }
`;

export const StyledRowDetails = styled.span`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1.5]};
    min-width: 0;
`;

export const StyledResult = styled.span`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.palette.fail};
`;
