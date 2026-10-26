import styled from 'styled-components';

export const StyledNavigationButton = styled.button`
    flex-shrink: 0;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 999rem;
    background: ${({ theme }) =>
        theme.mode === 'dark' ? theme.gradients.navigationButton : theme.palette.backgroundPaper};
    border: ${({ theme }) => (theme.mode === 'dark' ? '0' : `0.0625rem solid ${theme.palette.outline}`)};
    color: ${({ theme }) => theme.palette.textPrimary};
    font: inherit;
    box-shadow: ${({ theme }) => theme.shadows.navigationButton};
    transition:
        transform 180ms ease,
        box-shadow 180ms ease,
        opacity 180ms ease;

    &:active:not(:disabled) {
        transform: scale(0.97);
    }

    &:disabled {
        opacity: 0.45;
        box-shadow: none;
    }
    svg {
        width: 1.375rem;
        height: 1.375rem;
    }
`;
export const StyledCarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    gap: 0.625rem;
`;
export const StyledCarouselList = styled.div`
    display: flex;
    flex: 1;
    min-width: 0;
    flex-direction: row;
    gap: 0.625rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    margin: 0 -0.125rem;
    align-items: stretch;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledCarouselItem = styled.div`
    display: flex;
    flex: 0 0 100%;
    min-width: 0;
    scroll-snap-align: start;
    scroll-snap-stop: always;
`;
