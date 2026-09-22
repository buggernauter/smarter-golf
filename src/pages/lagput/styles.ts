import { Link } from "@tanstack/react-router";
import styled from "styled-components";

import type { Round } from "../../types/lag-put";

export const StyledPage = styled.main`
  box-sizing: border-box;
  min-height: 100dvh;
  overflow-x: hidden;
  background: ${({ theme }) => theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Georgia, "Times New Roman", serif;
`;

export const StyledBackLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 0.35rem;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 0.875rem;
  text-decoration: none;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledResetButton = styled.button`
  display: flex;
  width: calc(100% - 2rem);
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin: 1rem 1rem 0;
  padding: 0.75rem 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.outlineVariant};
  border-radius: 0.875rem;
  background: ${({ theme }) => theme.palette.fieldSurfaceGradient};
  box-shadow: ${({ theme }) => theme.palette.fieldSurfaceShadow};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const StyledForm = styled.form<{ $round: Round }>`
  display: grid;
  background: ${({ theme, $round }) =>
    $round === "frontNine"
      ? theme.palette.pageBackgroundGradient
      : theme.palette.pageBackgroundGradient};
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  & + & {
    margin-top: clamp(1.5rem, 4vw, 2.75rem);
  }
`;

export const StyledScoringSystem = styled.section`
  margin: 1rem;
  padding: 1.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.divider};
  border-radius: 1rem;
  background: ${({ theme }) => theme.palette.fieldSurfaceGradient};
  box-shadow: ${({ theme }) => theme.palette.fieldSurfaceShadow};
  color: ${({ theme }) => theme.palette.textPrimary};

  p {
    margin: 1rem 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const StyledReferenceCard = styled.aside`
  box-sizing: border-box;
  margin: 1rem;
  padding: 1.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.divider};
  border-radius: 1rem;
  background: ${({ theme }) => theme.palette.fieldSurfaceGradient};
  box-shadow: ${({ theme }) => theme.palette.fieldSurfaceShadow};
  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const StyledReferenceTitle = styled.h2`
  margin: 0 0 0.2rem;
  font-family: Arial, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
`;

export const StyledReferenceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
  letter-spacing: 0.025em;

  th,
  td {
    padding: 0.12rem 0;

    font-weight: 400;
    line-height: 1.15;
  }

  th {
    text-align: left;
  }

  td {
    text-align: right;
  }

  @media (max-width: 27rem) {
    font-size: 1.15rem;
  }
`;
export const StyledFinishButton = styled.button`
  display: flex;
  width: calc(100% - 2rem);
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: 0.875rem;
  background: ${({ theme }) => theme.palette.primaryMain};
  color: ${({ theme }) => theme.palette.backgroundPaper};
  box-shadow: ${({ theme }) => theme.palette.primaryButtonShadow};
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  cursor: pointer;
  touch-action: manipulation;
  transition:
    transform 150ms ease,
    box-shadow 150ms ease,
    background 150ms ease;

  @media (hover: hover) {
    &:hover {
      box-shadow: ${({ theme }) => theme.palette.primaryButtonShadow};
      transform: translateY(-0.0625rem);
    }
  }

  &:active {
    box-shadow: ${({ theme }) => theme.palette.primaryButtonShadow};
    transform: translateY(0.0625rem);
  }

  &:focus-visible {
    outline: 0.1875rem solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: 0.1875rem;
  }
`;

export const StyledSavedRoundsLink = styled(Link)`
  display: flex;
  width: calc(100% - 2rem);
  min-height: 3rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: 0 1rem 1rem;
  padding: 0.75rem 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.outlineVariant};
  border-radius: 0.875rem;
  background: ${({ theme }) => theme.palette.fieldSurfaceGradient};
  box-shadow: ${({ theme }) => theme.palette.fieldSurfaceShadow};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;

  &:active {
    background: ${({ theme }) => theme.palette.surfaceSecondary};
  }

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.palette.surfaceSecondary};
      box-shadow: ${({ theme }) => theme.palette.iconButtonShadow};
    }
  }

  &:focus-visible {
    outline: 0.1875rem solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: 0.1875rem;
  }
`;
