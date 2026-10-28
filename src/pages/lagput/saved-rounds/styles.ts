import { spacing, sizes, radii, borderWidths } from '@/styles/tokens';
import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const StyledSavedRoundsPage = styled.main`
  min-height: ${sizes.dynamicViewportHeight};
  background: ${({ theme }) => theme.gradients.pageBackground};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
`;

export const StyledBackLink = styled(Link)`
  display: flex;
  width: ${sizes[11]};
  height: ${sizes[11]};
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.textPrimary};
  text-decoration: none;

  svg {
    width: ${sizes[6]};
    height: ${sizes[6]};
  }

  &:focus-visible {
    outline: ${borderWidths.focus} solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: ${spacing[0.75]};
  }
`;

export const StyledRoundList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
  margin: 0;
  padding: 0 ${spacing[4]} ${spacing[4]};
  list-style: none;
`;

export const StyledRoundItem = styled.li`
  position: relative;
`;

export const StyledRoundButton = styled.button`
  position: relative;
  display: flex;
  min-height: ${sizes[22]};
  flex-direction: column;
  justify-content: center;
  width: ${sizes.full};
  gap: ${spacing[1.5]};
  padding: ${spacing[4]};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outline};
  border-radius: ${radii[4]};
  background: ${({ theme }) => theme.gradients.cardSurface};
  color: ${({ theme }) => theme.palette.textPrimary};
  box-shadow: ${({ theme }) => theme.shadows.cardSurface};
  font: inherit;
  text-align: left;
  cursor: pointer;

  strong {
    position: absolute;
    top: 50%;
    right: ${spacing[16]};
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
    outline: ${borderWidths.focus} solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: ${spacing[0.75]};
  }
`;

export const StyledDeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${spacing[2.5]};
  display: flex;
  width: ${sizes[11]};
  height: ${sizes[11]};
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: ${radii.circle};
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ theme }) => theme.palette.textDisabled};
  cursor: pointer;
  transform: translateY(-50%);

  svg {
    width: ${sizes[5]};
    height: ${sizes[5]};
  }

  &:active {
    background: ${({ theme }) => theme.palette.surfaceSecondary};
    color: ${({ theme }) => theme.palette.fail};
  }

  &:focus-visible {
    outline: ${borderWidths.focus} solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: ${spacing[0.5]};
  }
`;

export const StyledEmptyState = styled.p`
  margin: ${spacing[8]} ${spacing[4]};
  color: ${({ theme }) => theme.palette.textDisabled};
  text-align: center;
`;
