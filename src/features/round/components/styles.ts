import { Trash2 } from "lucide-react";
import styled, { css } from "styled-components";

const StyledCardSurface = css`
  border-radius: 1.25rem;
  ${({ theme }) =>
    theme.mode === "dark"
      ? css`
          border: 0;
          background: ${theme.palette.cardSurfaceGradient};
          box-shadow: ${theme.palette.cardSurfaceShadow};
        `
      : css`
          border: 0;
          background: ${theme.palette.cardSurfaceGradient};
          box-shadow: ${theme.palette.cardSurfaceShadow};
        `}
`;

const StyledFieldSurface = css`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
  padding: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
`;

export const StyledPage = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0.875rem 0.75rem 3rem;
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
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-bottom: 1.5rem;
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
      ? theme.palette.navigationButtonGradient
      : theme.palette.backgroundPaper};
  border: ${({ theme }) =>
    theme.mode === "dark" ? "0" : `0.0625rem solid ${theme.palette.outline}`};
  color: ${({ theme }) => theme.palette.textPrimary};
  font: inherit;
  box-shadow: ${({ theme }) => theme.palette.navigationButtonShadow};
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    opacity 180ms ease;

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
  gap: 0.625rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  margin: 0 -0.125rem;
  padding: 0 0.125rem 0.875rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCardWrapper = styled.section`
  ${StyledCardSurface};
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 1rem 0.875rem 1.5rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  border-radius: 1.5rem;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.875rem;
`;

export const StyledCardTitle = styled.h2`
  margin: 0 0 0.1875rem;
  font-size: 1.02rem;
  font-weight: 620;
  letter-spacing: -0.015em;
`;

export const StyledCardMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.textDisabled};
  font-size: 0.8rem;
  letter-spacing: 0.015em;
`;

export const StyledCardDescription = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4375rem;
  padding: 1rem 0.625rem 3.875rem 1rem;

  background: ${({ theme }) => theme.palette.descriptionSurfaceGradient};
  box-shadow: ${({ theme }) => theme.palette.descriptionSurfaceShadow};
`;

export const StyledCardDescriptionText = styled.p`
  margin: 0;
  max-width: 14ch;
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 1.02;

  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const StyledCardDescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
  margin: 0;
  margin-top: 0.7rem;
  padding: 0;
  list-style: none;
`;

export const StyledCardDescriptionPoint = styled.li`
  position: relative;
  padding: 0;
`;

export const StyledCardDescriptionPointText = styled.span`
  font-size: 0.92rem;
  font-weight: 520;
  line-height: 1.8;
  letter-spacing: 0.015em;
  color: ${({ theme }) => theme.palette.textDisabled};
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const StyledToggleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const StyledFieldLabel = styled.span`
  display: block;
  margin-bottom: 0.4375rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.palette.textSecondary
      : theme.palette.textDisabled};
`;

export const StyledField = styled.div`
  ${StyledFieldSurface};
  align-items: center;
`;

export const StyledStepperControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  max-width: 14rem;
  padding: 0.3125rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.palette.stepperControlGradient};
  box-shadow: ${({ theme }) => theme.palette.stepperControlShadow};
`;

export const StyledStepperButton = styled.button`
  flex: 0 0 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0rem;
  height: 3rem;
  padding: 0;
  border: 0;
  border-radius: 999rem;
  color: ${({ theme }) => theme.palette.textPrimary};
  background: ${({ theme }) => theme.palette.stepperButtonGradient};
  box-shadow: ${({ theme }) => theme.palette.stepperButtonShadow};
  transition:
    transform 160ms ease,
    background 180ms ease,
    box-shadow 180ms ease,
    opacity 180ms ease;

  &:active:not(:disabled) {
    transform: scale(0.96);
    background: ${({ theme }) => theme.palette.primaryMain};
    color: ${({ theme }) => theme.palette.backgroundPaper};
    box-shadow: ${({ theme }) => theme.palette.stepperButtonPressedShadow};
  }

  &:disabled {
    opacity: 0.35;
    box-shadow: none;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const StyledStepperValue = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  min-width: 0;
  text-align: center;

  strong {
    font-size: 1.5rem;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.palette.textPrimary};
  }
`;

export const StyledToggleButton = styled.button<{
  $active: boolean;
  $tone?: "success" | "danger";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.0625rem;
  padding: 0.4375rem 0.6875rem;
  border-radius: 999rem;
  width: auto;
  max-width: 100%;
  border: 0;
  font: inherit;
  font-size: 0.77rem;
  font-weight: 540;
  letter-spacing: -0.01em;
  text-align: center;
  white-space: nowrap;
  color: ${({ $active, theme }) =>
    $active
      ? theme.mode === "dark"
        ? theme.palette.textPrimary
        : theme.palette.backgroundPaper
      : theme.palette.textPrimary};
  background: ${({ $active, $tone = "success", theme }) =>
    $active
      ? $tone === "danger"
        ? theme.palette.fail
        : theme.palette.primaryMain
      : theme.palette.fieldSurfaceGradient};
  box-shadow: ${({ $active, $tone = "success", theme }) =>
    $active
      ? $tone === "danger"
        ? theme.palette.toggleButtonDangerShadow
        : theme.palette.toggleButtonSuccessShadow
      : theme.palette.fieldSurfaceShadow};
  transition:
    transform 160ms ease,
    box-shadow 180ms ease,
    background 180ms ease,
    color 180ms ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const StyledControlStack = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 1.125rem;
`;

export const StyledPagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  padding: 1.75rem 0 2.25rem;
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
    $active ? theme.palette.paginationDotShadow : "none"};
`;

export const StyledActionBar = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1.75rem;
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
      ? theme.palette.iconButtonGradient
      : theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.primaryMain};
  box-shadow: ${({ theme }) => theme.palette.iconButtonShadow};

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`;

export const StyledSummaryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const StyledSummaryCard = styled.div`
  flex: 1 1 calc(50% - 0.375rem);
  min-width: 0;
  padding: 0.75rem 0.875rem;
  border-radius: 1rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.palette.summaryCardGradient
      : theme.palette.summaryCardGradient};
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.palette.textPrimary
      : theme.palette.backgroundPaper};
  box-shadow: ${({ theme }) => theme.palette.summaryCardShadow};

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
    theme.mode === "dark"
      ? theme.palette.shadowDark
      : theme.palette.shadowMedium};
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
  padding: 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  box-shadow: ${({ theme }) => theme.palette.primaryButtonShadow};
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
  margin-top: 0.75rem;
  padding: 0.75rem;
  border: 0;
  background: transparent;
`;
