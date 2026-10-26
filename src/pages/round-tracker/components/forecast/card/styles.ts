import styled, { css } from 'styled-components';

export const StyledCardSurface = css`
    border-radius: 1.25rem;
    ${({ theme }) =>
        theme.mode === 'dark'
            ? css`
                  border: 0;
                  background: ${theme.gradients.cardSurface};
                  box-shadow: ${theme.shadows.cardSurface};
              `
            : css`
                  border: 0;
                  background: ${theme.gradients.cardSurface};
                  box-shadow: ${theme.shadows.cardSurface};
              `}
`;

export const StyledCardWrapper = styled.section`
    ${StyledCardSurface};
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: 1rem 0.875rem 0.5rem;
    border-radius: 1.5rem;
`;

export const StyledCardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.875rem;
`;
export const StyledCardDescription = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4375rem;
    padding: 1rem 0.625rem 3.875rem 1rem;

    background: ${({ theme }) => theme.gradients.descriptionSurface};
    box-shadow: ${({ theme }) => theme.shadows.descriptionSurface};
`;
export const StyledCardDescriptionList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.32rem;
    margin: 0;
    margin-top: 0.7rem;
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
        gap: 0.75rem;
        min-height: 3rem;
        touch-action: manipulation;
        cursor: pointer;
    }

    input {
        flex-shrink: 0;
        width: 1.75rem;
        height: 1.75rem;
        margin: 0;
        accent-color: ${({ theme }) => theme.palette.primaryMain};
        cursor: pointer;
    }

    input:focus-visible {
        outline: 2px solid ${({ theme }) => theme.palette.primaryMain};
        outline-offset: 3px;
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
    margin: 0 0 0.1875rem;
    font-size: large;
    font-weight: 600;
`;

export const StyledCardMeta = styled.p`
    margin: 0;
    font-size: large;
    letter-spacing: 0.015em;
`;
export const StyledControlStack = styled.div`
    margin-top: auto;
`;
