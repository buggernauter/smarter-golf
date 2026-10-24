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
export const StyledButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const StyledToggleRow = styled.div`
    display: flex;
    gap: 1rem;
`;

export const StyledToggleButton = styled.button<{
    $active: boolean;
    $tone?: 'success' | 'danger';
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.0625rem;
    padding: 0.4375rem 0.6875rem;
    border-radius: 999rem;
    width: auto;
    max-width: 100%;
    border: 0;
    font: inherit;
    font-size: 0.77rem;
    font-weight: 540;
    letter-spacing: -0.01em;
    text-align: center;
    white-space: nowrap;
    color: ${({ $active, theme }) =>
        $active
            ? theme.mode === 'dark'
                ? theme.palette.textPrimary
                : theme.palette.backgroundPaper
            : theme.palette.textPrimary};
    background: ${({ $active, $tone = 'success', theme }) =>
        $active
            ? $tone === 'danger'
                ? theme.palette.fail
                : theme.palette.primaryMain
            : theme.gradients.fieldSurface};
    box-shadow: ${({ $active, $tone = 'success', theme }) =>
        $active
            ? $tone === 'danger'
                ? theme.shadows.toggleButtonDanger
                : theme.shadows.toggleButtonSuccess
            : theme.shadows.fieldSurface};
    transition:
        transform 160ms ease,
        box-shadow 180ms ease,
        background 180ms ease,
        color 180ms ease;

    &:active {
        transform: scale(0.98);
    }
`;
