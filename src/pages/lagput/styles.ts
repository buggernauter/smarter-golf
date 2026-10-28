import { breakpoints } from '@/styles/breakpoints';
import { spacing, sizes, radii, borderWidths } from '@/styles/tokens';
import { Link } from "@tanstack/react-router";
import styled from "styled-components";

import type { Round } from "@/types/lag-put";

export const StyledPage = styled.main`
  box-sizing: border-box;
  min-height: ${sizes.dynamicViewportHeight};
  overflow-x: hidden;
  background: ${({ theme }) => theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Georgia, "Times New Roman", serif;
`;

export const StyledBackLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: ${spacing[1.4]};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 0.875rem;
  text-decoration: none;

  svg {
    width: ${sizes[4]};
    height: ${sizes[4]};
  }

`;

export const StyledResetButton = styled.button`
  display: flex;
  width: calc(${sizes.full} - ${sizes[8]});
  min-height: ${sizes[12]};
  align-items: center;
  justify-content: center;
  gap: ${spacing[1.4]};
  margin: ${spacing[4]} ${spacing[4]} 0;
  padding: ${spacing[3]} ${spacing[4]};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outlineVariant};
  border-radius: ${radii[3.5]};
  background: ${({ theme }) => theme.gradients.fieldSurface};
  box-shadow: ${({ theme }) => theme.shadows.fieldSurface};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  cursor: pointer;

  svg {
    width: ${sizes[4]};
    height: ${sizes[4]};
  }
`;

export const StyledForm = styled.form<{ $round: Round }>`
  display: flex;
  box-sizing: border-box;
  margin: 0 ${spacing[4]};
  padding: ${spacing[2.5]};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outline};
  border-radius: ${radii[6]};
  background: ${({ theme, $round }) =>
    $round === "frontNine"
      ? theme.gradients.pageBackground
      : theme.gradients.pageBackground};
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: ${({ theme }) => theme.shadows.cardSurface};

  & + & {
    margin-top: clamp(${spacing[6]}, 4vw, ${spacing[11]});
  }
`;

export const StyledScoringSystem = styled.section`
  margin: ${spacing[4]};
  padding: ${spacing[5]};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.divider};
  border-radius: ${radii[4]};
  background: ${({ theme }) => theme.gradients.fieldSurface};
  box-shadow: ${({ theme }) => theme.shadows.fieldSurface};
  color: ${({ theme }) => theme.palette.textPrimary};

  p {
    margin: ${spacing[4]} 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const StyledReferenceCard = styled.aside`
  box-sizing: border-box;
  margin: ${spacing[4]};
  padding: ${spacing[5]};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.divider};
  border-radius: ${radii[4]};
  background: ${({ theme }) => theme.gradients.fieldSurface};
  box-shadow: ${({ theme }) => theme.shadows.fieldSurface};
  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const StyledReferenceTitle = styled.h2`
  margin: 0 0 ${spacing[0.8]};
  font-family: Arial, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
`;

export const StyledReferenceTable = styled.table`
  width: ${sizes.full};
  border-collapse: collapse;
  font-size: 1.4rem;
  letter-spacing: 0.025em;

  th,
  td {
    padding: ${spacing[0.48]} 0;

    font-weight: 400;
    line-height: 1.15;
  }

  th {
    text-align: left;
  }

  td {
    text-align: right;
  }

  @media (max-width: ${breakpoints.compact}) {
    font-size: 1.15rem;
  }
`;
export const StyledFinishButton = styled.button`
  display: flex;
  width: calc(${sizes.full} - ${sizes[8]});
  min-height: ${sizes[13]};
  align-items: center;
  justify-content: center;
  margin: ${spacing[4]};
  padding: ${spacing[3]} ${spacing[4]};
  border: 0;
  border-radius: ${radii[3.5]};
  background: ${({ theme }) => theme.palette.primaryMain};
  color: ${({ theme }) => theme.palette.backgroundPaper};
  box-shadow: ${({ theme }) => theme.shadows.primaryButton};
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


  &:active {
    box-shadow: ${({ theme }) => theme.shadows.primaryButton};
    transform: translateY(${sizes[0.25]});
  }

  &:focus-visible {
    outline: ${borderWidths.focus} solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: ${spacing[0.75]};
  }
`;

export const StyledSavedRoundsLink = styled(Link)`
  display: flex;
  width: calc(${sizes.full} - ${sizes[8]});
  min-height: ${sizes[12]};
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: 0 ${spacing[4]} ${spacing[4]};
  padding: ${spacing[3]} ${spacing[4]};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outlineVariant};
  border-radius: ${radii[3.5]};
  background: ${({ theme }) => theme.gradients.fieldSurface};
  box-shadow: ${({ theme }) => theme.shadows.fieldSurface};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;

  &:active {
    background: ${({ theme }) => theme.palette.surfaceSecondary};
  }


  &:focus-visible {
    outline: ${borderWidths.focus} solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: ${spacing[0.75]};
  }
`;
