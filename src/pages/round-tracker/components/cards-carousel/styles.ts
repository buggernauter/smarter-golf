import { spacing, sizes, radii, borderWidths } from '@/styles/tokens';
import styled from 'styled-components';

export const StyledNavigationButton = styled.button`
    flex-shrink: 0;
    width: ${sizes[11]};
    height: ${sizes[11]};
    border-radius: ${radii.pill};
    background: ${({ theme }) =>
        theme.mode === 'dark' ? theme.gradients.navigationButton : theme.palette.backgroundPaper};
    border: ${({ theme }) => (theme.mode === 'dark' ? '0' : `${borderWidths.hairline} solid ${theme.palette.outline}`)};
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
        width: ${sizes[5.5]};
        height: ${sizes[5.5]};
    }
`;
export const StyledCarouselWrapper = styled.div`
    display: flex;
    width: ${sizes.full};
    min-width: 0;
    align-items: center;
    gap: ${spacing[2.5]};
`;
export const StyledCarouselList = styled.div`
    display: flex;
    flex: 1;
    min-width: 0;
    flex-direction: row;
    gap: ${spacing[2.5]};
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    margin: 0 -${spacing[0.5]};
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
