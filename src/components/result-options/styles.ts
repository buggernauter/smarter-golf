import styled from "styled-components";

export const StyledScoreTableFrame = styled.div`
  width: 100%;
  border-radius: 1.25rem;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.transparent};
`;

export const StyledScoreTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  table-layout: fixed;

  th,
  td {
    height: clamp(3.2rem, 7vw, 4rem);
    padding: 0.25rem 0.75rem;
    border-right: 0.0625rem solid ${({ theme }) => theme.palette.outlineVariant};
    border-bottom: 0.0625rem solid
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
    height: clamp(3.6rem, 8vw, 4.4rem);
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
    height: clamp(3.25rem, 7vw, 4rem);
    border-bottom: 0;
    font-size: clamp(1.1rem, 3vw, 1.4rem);

    text-transform: uppercase;
  }

  @media (max-width: 27rem) {
    th,
    td {
      padding: 0.25rem;
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
  width: 100%;
  min-height: 2.75rem;
  padding: 0 2.5rem 0 0.75rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.outlineVariant};
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.palette.fieldSurfaceGradient};
  box-shadow: ${({ theme }) => theme.palette.fieldSurfaceShadow};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
    transform: translateY(-50%);
  }

  &:active,
  &[aria-expanded="true"] {
    background: ${({ theme }) => theme.palette.surfaceSecondary};
    box-shadow: ${({ theme }) => theme.palette.stepperButtonPressedShadow};
  }

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.palette.surfaceSecondary};
      box-shadow: ${({ theme }) => theme.palette.stepperButtonPressedShadow};
    }
  }

  &:focus-visible {
    outline: 0.125rem solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: -0.125rem;
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
  margin-top: 0.85rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.outline};
  border-radius: 1rem;
  background: ${({ theme }) => theme.palette.fieldSurfaceGradient};
  box-shadow: ${({ theme }) => theme.palette.fieldSurfaceShadow};
`;

export const StyledScoreMenuOption = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;

  min-height: 2.75rem;
  padding: 1.25rem 0.75rem;
  border: 0;
  background: ${({ theme }) => theme.palette.scoreMenuOptionGradient};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;

  svg {
    position: absolute;
    left: 0.75rem;
    width: 1.125rem;
    height: 1.125rem;
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
