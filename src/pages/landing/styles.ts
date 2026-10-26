import styled, { css } from 'styled-components';
import { Link } from '@tanstack/react-router';

export const StyledLandingPage = styled.main`
    box-sizing: border-box;
    min-height: 100dvh;
    color: ${({ theme }) => theme.palette.textPrimary};
    font-family: 'Avenir Next', Inter, ui-sans-serif, system-ui, sans-serif;
`;

export const StyledLandingContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    width: 100%;
    max-width: 38rem;
    margin: 0 auto;
    padding: 0.75rem 1rem max(2rem, env(safe-area-inset-bottom));
    box-sizing: border-box;
`;

export const StyledIntroduction = styled.section`
    h1 {
        margin: 0 0 0.65rem;
        font-size: clamp(1.8rem, 7vw, 2.4rem);
        line-height: 1.15;
        letter-spacing: -0.04em;
    }

    p {
        margin: 0;
        max-width: 34rem;
        color: ${({ theme }) => theme.palette.textSecondary};
        font-size: 1rem;
        line-height: 1.6;
    }
`;

const cardSurface = css`
    border: 1px solid ${({ theme }) => theme.palette.divider};
    border-radius: 1.25rem;
    background: ${({ theme }) => theme.palette.backgroundPaper};
`;

const linkFocus = css`
    &:focus-visible {
        outline: 3px solid ${({ theme }) => theme.palette.primaryMain};
        outline-offset: 4px;
    }
`;

export const StyledRoundCard = styled.section`
    ${cardSurface};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;

    h2 {
        font-size: 1.6rem;
    }
`;

export const StyledLinkIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 0.75rem;
    background: ${({ theme }) => theme.palette.surfaceSecondary};
    color: ${({ theme }) => theme.palette.primaryMain};

    svg {
        width: 1.5rem;
        height: 1.5rem;
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
    gap: 0.75rem;
    align-self: stretch;
    min-height: 3rem;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    border-radius: 0.75rem;
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
    gap: 0.75rem;
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
    gap: 1rem;
    padding: 1rem;
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
    gap: 0.25rem;
    min-width: 0;
`;
