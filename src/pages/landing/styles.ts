import styled, { css } from "styled-components";
import { Link } from "@tanstack/react-router";

export const StyledLandingPage = styled.main`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: "Avenir Next", Inter, ui-sans-serif, system-ui, sans-serif;
`;

export const StyledCardSurface = css`
  border-radius: 1.75rem;
  background: ${({ theme }) => theme.palette.cardSurfaceGradient};
  box-shadow: ${({ theme }) => theme.palette.cardSurfaceShadow};
  border: 0.0625rem solid ${({ theme }) => theme.palette.divider};
`;

export const StyledLinkGrid = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 0.9rem;
  padding: 1rem;
`;

export const StyledRouteLink = styled(Link)`
  ${StyledCardSurface};
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;

  &:active {
    transform: scale(0.985);
  }
`;

export const StyledLinkIcon = styled.div<{ $tone: "primary" | "secondary" }>`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.palette.backgroundPaper};
  background: ${({ $tone, theme }) =>
    $tone === "primary"
      ? `linear-gradient(135deg, ${theme.palette.primaryMain} 0%, ${theme.palette.textSecondary} 100%)`
      : `linear-gradient(135deg, ${theme.palette.textSecondary} 0%, ${theme.palette.textDisabled} 100%)`};
  box-shadow: ${({ theme }) => theme.palette.primaryButtonShadow};

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const StyledLinkContent = styled.div`
  min-width: 0;
`;

export const StyledLinkTitle = styled.h2`
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
`;
