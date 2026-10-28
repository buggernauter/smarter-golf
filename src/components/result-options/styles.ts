import { breakpoints } from '@/styles/breakpoints';
import { spacing, sizes, radii, borderWidths } from '@/styles/tokens';
import styled from "styled-components";

export const StyledScoreTableFrame = styled.div`
  width: ${sizes.full};
  border-radius: ${radii[5]};
  overflow: hidden;
  background: ${({ theme }) => theme.palette.transparent};
`;

export const StyledScoreTable = styled.table`
  width: ${sizes.full};
  border-spacing: 0;
  border-collapse: separate;
  table-layout: fixed;

  th,
  td {
    height: clamp(${sizes[12.8]}, 7vw, ${sizes[16]});
    padding: ${spacing[1]} ${spacing[3]};
    border-right: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outlineVariant};
    border-bottom: ${borderWidths.hairline} solid
      ${({ theme }) => theme.palette.outlineVariant};
    background: ${({ theme }) => theme.palette.transparent};
    color: ${({ theme }) => theme.palette.textPrimary};
    text-align: center;
    vertical-align: middle;
  }

  th:last-child,
  td:last-child {
    border-right: 0;
  }

  thead th {
    height: clamp(${sizes[14.4]}, 8vw, ${sizes[17.6]});
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif;
    font-size: clamp(0.9rem, 2.5vw, 1.25rem);
    font-variant-numeric: lining-nums tabular-nums;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  thead th:first-child {
    width: 20%;
  }

  thead th:nth-child(2) {
    width: 43%;
  }

  thead th:nth-child(3) {
    width: 37%;
  }

  tbody th,
  tbody td {
    font-family: Arial, sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.25rem);
  }

  tbody td:nth-child(2) {
    font-size: clamp(1.2rem, 3.2vw, 1.5rem);
  }

  tfoot th,
  tfoot td {
    height: clamp(${sizes[13]}, 7vw, ${sizes[16]});
    border-bottom: 0;
    font-size: clamp(1.1rem, 3vw, 1.4rem);

    text-transform: uppercase;
  }

  @media (max-width: ${breakpoints.compact}) {
    th,
    td {
      padding: ${spacing[1]};
    }

    thead th {
      font-size: 0.75rem;
    }

    tbody th,
    tbody td {
      font-size: 0.95rem;
    }
  }
`;

export const StyledScoreButton = styled.button`
  position: relative;
  display: block;
  width: ${sizes.full};
  min-height: ${sizes[11]};
  padding: 0 ${spacing[10]} 0 ${spacing[3]};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outlineVariant};
  border-radius: ${radii[2.5]};
  background: ${({ theme }) => theme.gradients.fieldSurface};
  box-shadow: ${({ theme }) => theme.shadows.fieldSurface};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    right: ${spacing[3]};
    width: ${sizes[5]};
    height: ${sizes[5]};
    transform: translateY(-50%);
  }

  &:active,
  &[aria-expanded="true"] {
    background: ${({ theme }) => theme.palette.surfaceSecondary};
    box-shadow: ${({ theme }) => theme.shadows.stepperButtonPressed};
  }


  &:focus-visible {
    outline: ${borderWidths.regular} solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: -${spacing[0.5]};
  }
`;

export const StyledScoreMenuLayer = styled.div`
  position: fixed;
  z-index: 20;
  inset: 0;
`;

export const StyledScoreMenu = styled.div`
  position: fixed;
  overflow: hidden;
  margin-top: ${spacing[3.4]};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outline};
  border-radius: ${radii[4]};
  background: ${({ theme }) => theme.gradients.fieldSurface};
  box-shadow: ${({ theme }) => theme.shadows.fieldSurface};
`;

export const StyledScoreMenuOption = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${sizes.full};
  box-sizing: border-box;

  min-height: ${sizes[11]};
  padding: ${spacing[5]} ${spacing[3]};
  border: 0;
  background: ${({ theme }) => theme.gradients.scoreMenuOption};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;

  svg {
    position: absolute;
    left: ${spacing[3]};
    width: ${sizes[4.5]};
    height: ${sizes[4.5]};
    opacity: 0;
  }

  &[aria-checked="true"] svg {
    opacity: 1;
  }

  &:active,
  &:focus-visible {
    background: ${({ theme }) => theme.palette.surfaceSecondary};
    outline: 0;
  }
`;

export const StyledTotal = styled.td`
  font-family: Arial, sans-serif;
`;
