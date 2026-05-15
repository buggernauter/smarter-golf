import { ChevronDown } from "lucide-react";
import styled, { css } from "styled-components";

const cardSurface = css`
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

const fieldCard = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const controlBase = css`
  min-height: 2.75rem;
  box-sizing: border-box;
  border-radius: 0.75rem;
  padding: 0.5rem 0rem;
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

export const Page = styled.div<{ $isSummaryView?: boolean }>`
  box-sizing: border-box;
  padding: ${({ $isSummaryView }) =>
    $isSummaryView ? "1rem 0.375rem 6.5rem" : "0.5rem 0.75rem 2rem"};
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

export const MobileHeader = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const TopActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const IconActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.palette.primaryMain};

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const MobileButton = styled.button`
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

export const MobilePosition = styled.span`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.palette.textSecondary};
`;

export const MobileList = styled.div`
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

export const HoleCard = styled.section`
  ${cardSurface};
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 1rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  border-radius: 1rem;
`;

export const HoleCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const HoleTitle = styled.h2`
  margin: 0 0 0.25rem;
  font-size: 1.05rem;
`;

export const HoleMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.textDisabled};
  font-size: 0.92rem;
`;

export const HoleGoal = styled.p`
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

export const HoleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.875rem;
`;

export const FieldLabel = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.82rem;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.palette.textSecondary
      : theme.palette.textDisabled};
`;

export const HoleToggle = styled.label`
  ${fieldCard};

  input[type="checkbox"] {
    align-self: flex-start;
    width: 1.375rem;
    height: 1.375rem;
    accent-color: ${({ theme }) => theme.palette.primaryMain};
  }
`;

export const HoleField = styled.label`
  ${fieldCard};
`;

export const SelectFieldControl = styled.div`
  position: relative;
  display: inline-flex;
  align-self: flex-start;
`;

const Select = styled.select`
  ${controlBase};
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

export const CompactSelect = styled(Select)`
  width: 4rem;
  max-width: 100%;
  padding-left: 0.875rem;
  font-variant-numeric: tabular-nums;
`;

export const SelectChevron = styled(ChevronDown)`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  width: 0.9rem;
  height: 0.9rem;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.palette.textPrimary};
  pointer-events: none;
`;

export const ScoreField = styled(HoleField)`
  margin-top: 1rem;
`;

export const MobileDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: 1rem 0 1.5rem;
`;

export const MobileDot = styled.button<{ $active: boolean }>`
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

export const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  margin-top: 5rem;
`;

export const SummaryItem = styled.div`
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

export const SummaryLabel = styled.span`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  opacity: ${({ theme }) => (theme.mode === "dark" ? 1 : 0.82)};
  color: ${({ theme }) =>
    theme.mode === "dark" ? theme.palette.primaryMain : "inherit"};
`;

export const OverviewCard = styled.section`
  ${cardSurface};
  box-sizing: border-box;
  width: 100%;
  padding: 0.875rem 0.625rem;
  overflow: hidden;
  border-radius: 1rem;
`;

export const OverviewTableWrap = styled.div`
  overflow: visible;
`;

export const OverviewTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-variant-numeric: tabular-nums;

  th,
  td {
    padding: 0.8rem 0.3rem;
    border-bottom: 0.0625rem solid
      ${({ theme }) => theme.palette.outlineVariant};
    text-align: center;
    vertical-align: middle;
  }

  th {
    font-size: 0.78rem;

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

  th,
  td {
    padding: 0.7rem 0.15rem;
  }

  th {
    font-size: 0.68rem;
    letter-spacing: 0.01em;
  }
`;

export const OverviewCell = styled.td`
  font-size: 0.95rem;

  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const OverviewHoleCell = styled(OverviewCell)`
  border-right: 0.0625rem solid ${({ theme }) => theme.palette.outlineVariant};
`;

export const OverviewFooterLabel = styled.td`
  font-size: 0.95rem;

  text-align: left;
  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const OverviewHoleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.4rem;
  min-height: 1.4rem;
  padding: 0;
  border-radius: 0;
  background: transparent;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-size: 0.95rem;

  box-shadow: none;
`;

export const OverviewScore = styled(OverviewCell)`
  font-size: 0.95rem;
`;

export const OverviewIconCell = styled(OverviewCell)<{
  $tone: "success" | "danger";
}>`
  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ $tone, theme }) =>
      $tone === "success"
        ? theme.mode === "dark"
          ? "#52d273"
          : "#1f9d55"
        : theme.mode === "dark"
          ? "#ff7b72"
          : "#d93025"};
  }
`;

export const OverviewEmpty = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.textSecondary};
`;

export const OverviewCloseButton = styled.button`
  position: fixed;
  left: 50%;
  bottom: max(0.75rem, env(safe-area-inset-bottom));
  transform: translateX(-50%);
  width: calc(100vw - 0.75rem);
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
  z-index: 10;
`;
