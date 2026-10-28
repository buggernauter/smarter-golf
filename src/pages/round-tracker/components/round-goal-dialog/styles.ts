import { spacing, sizes, radii, borderWidths, pixels } from '@/styles/tokens';
import styled from 'styled-components';

export const StyledDialog = styled.dialog`
    box-sizing: border-box;
    width: min(${sizes[104]}, calc(${sizes.full} - ${sizes[8]}));
    min-height: min(${sizes[104]}, calc(${sizes.dynamicViewportHeight} - ${sizes[8]}));
    max-height: calc(${sizes.dynamicViewportHeight} - ${sizes[8]});
    overflow-y: auto;
    padding: ${spacing[6]};
    border: ${borderWidths.pixel} solid ${({ theme }) => theme.palette.divider};
    border-radius: ${radii[5]};
    background: ${({ theme }) => theme.palette.backgroundPaper};
    color: ${({ theme }) => theme.palette.textPrimary};
    font-family: inherit;

    &::backdrop {
        background: ${({ theme }) => theme.palette.backdrop};
    }

    form {
        display: flex;
        flex-direction: column;
        gap: ${spacing[4]};
    }

    h1 {
        margin: 0;
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        color: ${({ theme }) => theme.palette.textSecondary};
        line-height: 1.5;
    }

    label {
        font-weight: 600;
    }

    summary,
    button {
        min-height: ${sizes[12]};
        padding: ${spacing[3]} ${spacing[4]};
        border: ${borderWidths.pixel} solid ${({ theme }) => theme.palette.divider};
        border-radius: ${radii[3]};
        background: ${({ theme }) => theme.palette.surfaceSecondary};
        color: inherit;
        font: inherit;
    }

    button {
        cursor: pointer;
    }

    button[type='submit'] {
        border-color: transparent;
        background: ${({ theme }) => theme.palette.success};
        color: ${({ theme }) => theme.palette.textOnAccent};
        font-weight: 700;
    }

    :is(summary, button):focus-visible {
        outline: ${borderWidths.triplePixel} solid ${({ theme }) => theme.palette.primaryMain};
        outline-offset: ${pixels[3]};
    }
`;

export const StyledSelect = styled.details`
    position: relative;

    summary {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        list-style: none;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    ul {
        position: absolute;
        top: calc(100% + ${spacing[2]});
        left: 0;
        right: 0;
        z-index: 1;
        margin: 0;
        padding: ${spacing[1]};
        list-style: none;
        border: ${borderWidths.pixel} solid ${({ theme }) => theme.palette.divider};
        border-radius: ${radii[3]};
        background: ${({ theme }) => theme.palette.backgroundPaper};
        box-shadow: 0 ${pixels[4]} ${pixels[12]} ${({ theme }) => theme.palette.shadowDark};
    }

    li button {
        display: flex;
        align-items: center;
        gap: ${spacing[2]};
        width: ${sizes.full};
        border: 0;
        text-align: left;
        background: transparent;
    }

    button:disabled {
        color: ${({ theme }) => theme.palette.textDisabled};
        cursor: not-allowed;
    }

    button:not(:disabled):hover {
        background: ${({ theme }) => theme.palette.surfaceSecondary};
    }
`;
