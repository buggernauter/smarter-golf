import { spacing, sizes, radii, borderWidths, pixels } from '@/styles/tokens';
import styled from 'styled-components';

export const StyledCardWrapper = styled.section`
    border: 0;
    background: ${({ theme }) => theme.gradients.cardSurface};
    display: flex;
    flex-direction: column;
    width: ${sizes.full};
    min-width: 0;
    box-sizing: border-box;
    padding: ${spacing[4]} ${spacing[3.5]} ${spacing[2]};
    border-radius: ${radii[6]};
`;

export const StyledCardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${spacing[3]};
    margin-bottom: ${spacing[3.5]};
`;
export const StyledCardDescription = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing[1.75]};
    padding: ${spacing[4]} ${spacing[2.5]} ${spacing[15.5]} ${spacing[4]};

    background: ${({ theme }) => theme.gradients.descriptionSurface};
    /* box-shadow: ${({ theme }) => theme.shadows.descriptionSurface}; */
`;
export const StyledCardDescriptionList = styled.ul`
    width: ${sizes.full};
    display: flex;
    flex-direction: column;
    gap: ${spacing[1.28]};
    margin: 0;
    margin-top: ${spacing[2.8]};
    padding: 0;
    list-style: none;
`;
export const StyledCardDescriptionPoint = styled.li`
    position: relative;
    padding: 0;

    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${spacing[3]};
        min-height: ${sizes[12]};
        touch-action: manipulation;
        cursor: pointer;
    }

    input {
        flex-shrink: 0;
        width: ${sizes[7]};
        height: ${sizes[7]};
        margin: 0;
        accent-color: ${({ theme }) => theme.palette.primaryMain};
        cursor: pointer;
    }

    input:focus-visible {
        outline: ${borderWidths.doublePixel} solid ${({ theme }) => theme.palette.primaryMain};
        outline-offset: ${pixels[3]};
    }

    label:has(input:checked) span {
        color: ${({ theme }) => theme.palette.primaryMain};
        /* text-decoration: line-through; */
    }
`;

export const StyledCardDescriptionPointText = styled.span`
    font-size: large;
    font-weight: 600;
    line-height: 1.8;

    color: ${({ theme }) => theme.palette.textDisabled};
`;
export const StyledCardDescriptionText = styled.p`
    margin: 0;
    font-size: large;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.warn};
`;
export const StyledCardTitle = styled.h2`
    margin: 0 0 ${spacing[0.75]};
    font-size: large;
    font-weight: 600;
`;

export const StyledCardMeta = styled.p`
    margin: 0;
    font-size: large;
    letter-spacing: 0.015em;
`;
