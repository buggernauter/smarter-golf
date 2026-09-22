import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const StyledSavedRoundsPage = styled.main`
  min-height: 100dvh;
  background: ${({ theme }) => theme.palette.pageBackgroundGradient};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
`;

export const StyledBackLink = styled(Link)`
  display: flex;
  width: 2.75rem;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.textPrimary};
  text-decoration: none;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:focus-visible {
    outline: 0.1875rem solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: 0.1875rem;
  }
`;

export const StyledRoundList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
  padding: 0 1rem 1rem;
  list-style: none;
`;

export const StyledRoundItem = styled.li`
  position: relative;
`;

export const StyledRoundButton = styled.button`
  position: relative;
  display: flex;
  min-height: 5.5rem;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 0.375rem;
  padding: 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.outline};
  border-radius: 1rem;
  background: ${({ theme }) => theme.palette.cardSurfaceGradient};
  color: ${({ theme }) => theme.palette.textPrimary};
  box-shadow: ${({ theme }) => theme.palette.cardSurfaceShadow};
  font: inherit;
  text-align: left;
  cursor: pointer;

  strong {
    position: absolute;
    top: 50%;
    right: 4rem;
    color: ${({ theme }) => theme.palette.primaryMain};
    font-size: 1.5rem;
    transform: translateY(-50%);
  }

  span:last-child {
    color: ${({ theme }) => theme.palette.textDisabled};
    font-size: 0.875rem;
  }

  &:active {
    background: ${({ theme }) => theme.palette.surfaceSecondary};
  }

  &:focus-visible {
    outline: 0.1875rem solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: 0.1875rem;
  }
`;

export const StyledDeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.625rem;
  display: flex;
  width: 2.75rem;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ theme }) => theme.palette.textDisabled};
  cursor: pointer;
  transform: translateY(-50%);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:active {
    background: ${({ theme }) => theme.palette.surfaceSecondary};
    color: ${({ theme }) => theme.palette.fail};
  }

  &:focus-visible {
    outline: 0.1875rem solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: 0.125rem;
  }
`;

export const StyledEmptyState = styled.p`
  margin: 2rem 1rem;
  color: ${({ theme }) => theme.palette.textDisabled};
  text-align: center;
`;
