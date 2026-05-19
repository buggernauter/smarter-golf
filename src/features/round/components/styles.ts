import { ChevronDown, Trash2 } from "lucide-react";
import styled, { css } from "styled-components";

const StyledCardSurface = css`
  border-radius: 1.25rem;
  ${({ theme }) =>
    theme.mode === "dark"
      ? css`
          border: 0;
          background: linear-gradient(
            180deg,
            ${theme.palette.surfacePrimary} 0%,
            ${theme.palette.backgroundDefault} 100%
          );
          box-shadow:
            0 1.125rem 2.625rem ${theme.palette.shadowMedium},
            0 0 0 0.0625rem ${theme.palette.outlineVariant},
            inset 0 0.0625rem 0 ${theme.palette.divider};
        `
      : css`
          border: 0.0625rem solid ${theme.palette.divider};
          background: ${theme.palette.backgroundPaper};
          box-shadow: 0 0.875rem 1.875rem ${theme.palette.shadowMedium};
        `}
`;

const StyledFieldSurface = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.875rem;
  ${({ theme }) =>
    theme.mode === "dark"
      ? css`
          border: 0;
          background: linear-gradient(
            180deg,
            ${theme.palette.surfacePrimary} 0%,
            ${theme.palette.backgroundDefault} 100%
          );
          box-shadow:
            inset 0 0 0 0.0625rem ${theme.palette.outlineVariant},
            inset 0 0.0625rem 0 ${theme.palette.divider};
        `
      : css`
          border: 0.0625rem solid ${theme.palette.divider};
          background: ${theme.palette.surfacePrimary};
        `}
`;

const StyledControlBase = css`
  min-height: 2.75rem;
  box-sizing: border-box;
  border-radius: 0.75rem;
  padding: 0.5rem 0;
  font: inherit;
  text-align: left;
  color: ${({ theme }) => theme.palette.textPrimary};
  transition:
    background 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
  ${({ theme }) =>
    theme.mode === "dark"
      ? css`
          border: 0;
          background: ${theme.palette.surfaceSecondary};
          box-shadow:
            inset 0 0 0 0.0625rem ${theme.palette.divider},
            0 0.5rem 1.25rem ${theme.palette.shadowLight};
        `
      : css`
          border: 0.0625rem solid ${theme.palette.outline};
          background: ${theme.palette.backgroundPaper};
        `}
`;

export const StyledPage = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0.5rem 0.75rem 2rem;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
`;

export const StyledHeader = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StyledNavigationButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(180deg, ${theme.palette.surfacePrimary} 0%, ${theme.palette.backgroundDefault} 100%)`
      : theme.palette.backgroundPaper};
  border: ${({ theme }) =>
    theme.mode === "dark" ? "0" : `0.0625rem solid ${theme.palette.outline}`};
  color: ${({ theme }) => theme.palette.textPrimary};
  font: inherit;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `0 1rem 2rem ${theme.palette.shadowDark}, 0 0 0 0.0625rem ${theme.palette.outlineVariant}`
      : `0 0.625rem 1.375rem ${theme.palette.shadowDark}`};
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    opacity 180ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-0.0625rem);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.45;
    box-shadow: none;
  }

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`;

export const StyledHeaderTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.textSecondary};
`;

export const StyledCarouselList = styled.div`
  display: flex;
  gap: 0.875rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCardWrapper = styled.section`
  ${StyledCardSurface};
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 1rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  border-radius: 1rem;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const StyledCardTitle = styled.h2`
  margin: 0 0 0.25rem;
  font-size: 1.05rem;
`;

export const StyledCardMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.textDisabled};
  font-size: 0.92rem;
`;

export const StyledCardDescription = styled.p`
  margin: 0 0 1rem;
  padding: 0.75rem 0.875rem;
  border-radius: 0.875rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(180deg, ${theme.palette.surfaceSecondary} 0%, ${theme.palette.backgroundDefault} 100%)`
      : theme.palette.surfaceSecondary};
  color: ${({ theme }) => theme.palette.textSecondary};
  line-height: 1.45;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `inset 0 0 0 0.0625rem ${theme.palette.outlineVariant}`
      : "none"};
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.875rem;
`;

export const StyledFieldLabel = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.palette.textSecondary
      : theme.palette.textDisabled};
`;

export const StyledField = styled.label`
  ${StyledFieldSurface};
`;

export const StyledToggleButton = styled.button<{
  $active: boolean;
  $tone?: "success" | "danger";
}>`
  ${StyledFieldSurface};
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 0.0625rem solid
    ${({ $active, $tone = "success", theme }) =>
      $active
        ? $tone === "danger"
          ? theme.palette.fail
          : theme.palette.primaryMain
        : theme.palette.outlineVariant};
  font: inherit;
  font-size: 1rem;
  text-align: center;
  color: ${({ $active, theme }) =>
    $active ? theme.palette.backgroundPaper : theme.palette.textPrimary};
  background: ${({ $active, $tone = "success", theme }) =>
    $active
      ? $tone === "danger"
        ? theme.palette.fail
        : theme.palette.primaryMain
      : theme.palette.surfaceSecondary};
  box-shadow: ${({ $active, $tone = "success", theme }) =>
    $active
      ? `0 0.75rem 1.5rem ${
          $tone === "danger"
            ? theme.palette.shadowDark
            : theme.palette.shadowPrimary
        }`
      : "none"};
`;

export const StyledSelectControl = styled.div`
  position: relative;
  display: inline-flex;
  align-self: flex-start;
`;

const StyledSelect = styled.select`
  ${StyledControlBase};
  appearance: none;
  padding-right: 2.25rem;

  &:focus,
  &:focus-visible {
    outline: none;
    ${({ theme }) =>
      theme.mode === "dark"
        ? css`
            box-shadow: inset 0 0 0 0.0625rem ${theme.palette.primaryLight};
          `
        : css`
            border-color: ${theme.palette.primaryMain};
            box-shadow: inset 0 0 0 0.0625rem ${theme.palette.primaryLight};
          `}
  }
`;

export const StyledCompactSelect = styled(StyledSelect)`
  width: 5.25rem;
  max-width: 100%;
  padding-left: 0.875rem;
  font-size: 1.125rem;
  font-variant-numeric: tabular-nums;
`;

export const StyledSelectIcon = styled(ChevronDown)`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  width: 0.9rem;
  height: 0.9rem;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.palette.textPrimary};
  pointer-events: none;
`;

export const StyledSpacedField = styled(StyledField)`
  margin-top: 1rem;
`;

export const StyledPagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: 1rem 0 1.25rem;
`;

export const StyledPaginationDot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "1.625rem" : "0.625rem")};
  height: 0.625rem;
  padding: 0;
  border: 0;
  border-radius: 999rem;
  background: ${({ $active, theme }) =>
    $active ? theme.palette.primaryMain : theme.palette.primaryLight};
  box-shadow: ${({ $active, theme }) =>
    $active ? `0 0.5rem 1rem ${theme.palette.shadowPrimary}` : "none"};
`;

export const StyledActionBar = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 0.75rem;
`;

export const StyledIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 0;
  border-radius: 999rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(180deg, ${theme.palette.surfacePrimary} 0%, ${theme.palette.backgroundDefault} 100%)`
      : theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.primaryMain};
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `0 1rem 2rem ${theme.palette.shadowDark}, 0 0 0 0.0625rem ${theme.palette.outlineVariant}`
      : `0 0.625rem 1.375rem ${theme.palette.shadowDark}`};

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`;

export const StyledSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
`;

export const StyledSummaryCard = styled.div`
  padding: 0.75rem 0.875rem;
  border-radius: 1rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(180deg, ${theme.palette.surfacePrimary} 0%, ${theme.palette.backgroundDefault} 100%)`
      : theme.palette.primaryMain};
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.palette.textPrimary
      : theme.palette.backgroundPaper};
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `0 1rem 2rem ${theme.palette.shadowMedium}, 0 0 0 0.0625rem ${theme.palette.outlineVariant}`
      : `0 0.75rem 1.25rem ${theme.palette.shadowPrimary}`};

  strong {
    font-size: 1.2rem;
  }
`;

export const StyledSummaryLabel = styled.span`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  opacity: ${({ theme }) => (theme.mode === "dark" ? 1 : 0.82)};
  color: ${({ theme }) =>
    theme.mode === "dark" ? theme.palette.primaryMain : "inherit"};
`;

export const StyledSummarySheetBackdrop = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0.75rem;
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(8, 8, 8, 0.56)" : "rgba(21, 32, 43, 0.18)"};
  backdrop-filter: blur(12px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 220ms ease;
  z-index: 30;
`;

export const StyledSummarySheet = styled.section<{ $open: boolean }>`
  ${StyledCardSurface};
  width: min(100%, 42rem);
  max-height: min(82vh, 52rem);
  padding: 0.875rem 0.625rem 1rem;
  border-radius: 1.5rem 1.5rem 1rem 1rem;
  overflow: hidden;
  transform: translateY(${({ $open }) => ($open ? "0" : "2rem")});
  transition: transform 220ms ease;
`;

export const StyledSummarySheetHandle = styled.span`
  display: block;
  width: 3rem;
  height: 0.3125rem;
  margin: 0 auto 0.875rem;
  border-radius: 999rem;
  background: ${({ theme }) => theme.palette.outlineVariant};
`;

export const StyledSummarySheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 0.5rem 0.875rem;
`;

export const StyledSummarySheetTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
`;

export const StyledSummarySheetBody = styled.div`
  overflow-y: auto;
  max-height: calc(82vh - 8rem);
  padding: 0 0.125rem;
`;

export const StyledTableCard = styled.section`
  box-sizing: border-box;
  width: 100%;
  border-radius: 1rem;
`;

export const StyledTableWrapper = styled.div`
  overflow: visible;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-variant-numeric: tabular-nums;

  th,
  td {
    padding: 0.7rem 0.15rem;
    border-bottom: 0.0625rem solid
      ${({ theme }) => theme.palette.outlineVariant};
    text-align: center;
    vertical-align: middle;
  }

  th {
    font-size: 0.68rem;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.palette.textDisabled};
    white-space: nowrap;
  }

  tbody tr:last-child td {
    border-bottom-color: ${({ theme }) => theme.palette.divider};
  }

  tfoot td {
    padding-top: 0.9rem;
    border-bottom: 0;
  }
`;

export const StyledTableCell = styled.td`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const StyledTableCellPrimary = styled(StyledTableCell)`
  border-right: 0.0625rem solid ${({ theme }) => theme.palette.outlineVariant};
`;

export const StyledTableFooterCell = styled.td`
  font-size: 0.95rem;
  text-align: left;
  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.4rem;
  min-height: 1.4rem;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-size: 0.95rem;
`;

export const StyledTableValue = styled(StyledTableCell)`
  font-size: 0.95rem;
`;

export const StyledTableStatusCell = styled(StyledTableCell)<{
  $tone: "success" | "danger";
}>`
  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ $tone, theme }) =>
      $tone === "success" ? theme.palette.primaryMain : theme.palette.fail};
  }
`;

export const StyledEmptyText = styled.p`
  margin: 0;
  padding: 0.75rem 0.5rem;
  color: ${({ theme }) => theme.palette.textSecondary};
`;

export const StyledSummarySheetFooter = styled.div`
  padding: 1rem 0.5rem 0;
`;

export const StyledPrimaryButton = styled.button`
  width: 100%;
  min-height: 3rem;
  padding: 0.875rem 1rem;
  border: 0;
  border-radius: 999rem;
  background: ${({ theme }) => theme.palette.primaryMain};
  color: ${({ theme }) => theme.palette.backgroundPaper};
  font: inherit;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: ${({ theme }) => `0 1rem 2rem ${theme.palette.shadowPrimary}`};
`;

export const StyledResetIcon = styled(Trash2)`
  color: ${({ theme }) => theme.palette.fail};
`;

export const StyledResetButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-left: auto;
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: 0;
  background: transparent;
`;
