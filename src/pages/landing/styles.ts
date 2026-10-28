import { spacing, sizes, radii, borderWidths, pixels } from '@/styles/tokens';
import styled, { css } from 'styled-components';
import { Link } from '@tanstack/react-router';

export const StyledLandingPage = styled.main`
    box-sizing: border-box;
    min-height: ${sizes.dynamicViewportHeight};
    color: ${({ theme }) => theme.palette.textPrimary};
    font-family: 'Avenir Next', Inter, ui-sans-serif, system-ui, sans-serif;
`;

export const StyledLandingContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing[7]};
    width: ${sizes.full};
    max-width: ${sizes[152]};
    margin: 0 auto;
    padding: ${spacing[3]} ${spacing[4]} max(${spacing[8]}, env(safe-area-inset-bottom));
    box-sizing: border-box;
`;

export const StyledIntroduction = styled.section`
    h1 {
        margin: 0 0 ${spacing[2.6]};
        font-size: clamp(1.8rem, 7vw, 2.4rem);
        line-height: 1.15;
        letter-spacing: -0.04em;
    }

    p {
        margin: 0;
        max-width: ${sizes[136]};
        color: ${({ theme }) => theme.palette.textSecondary};
        font-size: 1rem;
        line-height: 1.6;
    }
`;

const cardSurface = css`
    border: ${borderWidths.pixel} solid ${({ theme }) => theme.palette.divider};
    border-radius: ${radii[5]};
    background: ${({ theme }) => theme.palette.backgroundPaper};
`;

const linkFocus = css`
    &:focus-visible {
        outline: ${borderWidths.triplePixel} solid ${({ theme }) => theme.palette.primaryMain};
        outline-offset: ${pixels[4]};
    }
`;

export const StyledRoundCard = styled.section`
    ${cardSurface};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing[4]};
    padding: ${spacing[6]};

    h2 {
        font-size: 1.6rem;
    }
`;

export const StyledLinkIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    width: ${sizes[11]};
    height: ${sizes[11]};
    border-radius: ${radii[3]};
    background: ${({ theme }) => theme.palette.surfaceSecondary};
    color: ${({ theme }) => theme.palette.primaryMain};

    svg {
        width: ${sizes[6]};
        height: ${sizes[6]};
    }
`;

export const StyledLinkTitle = styled.h2`
    margin: 0;
    font-size: 1.05rem;
    letter-spacing: -0.02em;
`;

export const StyledDescription = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.palette.textSecondary};
    font-size: 0.95rem;
    line-height: 1.6;
`;

export const StyledStartLink = styled(Link)`
    ${linkFocus};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${spacing[3]};
    align-self: stretch;
    min-height: ${sizes[12]};
    margin-top: ${spacing[2]};
    padding: ${spacing[2]} ${spacing[4]};
    box-sizing: border-box;
    border-radius: ${radii[3]};
    background: ${({ theme }) => theme.palette.success};
    color: ${({ theme }) => theme.palette.textOnAccent};
    font-weight: 700;
    text-decoration: none;

    &:hover {
        filter: brightness(1.08);
    }
`;

export const StyledPractice = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${spacing[3]};
`;

export const StyledPracticeTitle = styled.h2`
    margin: 0;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.textSecondary};
`;

export const StyledPracticeLink = styled(Link)`
    ${cardSurface};
    ${linkFocus};
    display: flex;
    align-items: center;
    gap: ${spacing[4]};
    padding: ${spacing[4]};
    color: inherit;
    text-decoration: none;

    > svg {
        flex-shrink: 0;
        color: ${({ theme }) => theme.palette.textDisabled};
    }

    &:hover {
        border-color: ${({ theme }) => theme.palette.primaryMain};
    }
`;

export const StyledLinkContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: ${spacing[1]};
    min-width: 0;
`;
