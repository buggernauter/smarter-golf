import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const cardSurface = css`
  border-radius: 1.25rem;
  ${({ theme }) =>
    theme.mode === "dark"
      ? css`
          border: 0;
          background: linear-gradient(
            180deg,
            ${theme.palette.surfaceSubtle} 0%,
            ${theme.palette.surfaceSoft} 100%
          );
          box-shadow:
            0 1.125rem 2.625rem ${theme.palette.shadowBase},
            0 0 0 0.0625rem ${theme.palette.borderSoft},
            inset 0 0.0625rem 0 ${theme.palette.borderBase};
        `
      : css`
          border: 0.0625rem solid ${theme.palette.borderBase};
          background: ${theme.palette.surfaceBase};
          box-shadow: 0 0.875rem 1.875rem ${theme.palette.shadowBase};
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
            ${theme.palette.surfaceSubtle} 0%,
            ${theme.palette.surfaceSoft} 100%
          );
          box-shadow:
            inset 0 0 0 0.0625rem ${theme.palette.borderSoft},
            inset 0 0.0625rem 0 ${theme.palette.borderBase};
        `
      : css`
          border: 0.0625rem solid ${theme.palette.borderBase};
          background: ${theme.palette.surfaceSubtle};
        `}
`;

const controlBase = css`
  width: 100%;
  min-height: 2.75rem;
  box-sizing: border-box;
  border-radius: 0.75rem;
  padding: 0.5rem 0.625rem;
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
          background: ${theme.palette.surfaceMuted};
          box-shadow:
            inset 0 0 0 0.0625rem ${theme.palette.borderBase},
            0 0.5rem 1.25rem ${theme.palette.shadowSoft};
        `
      : css`
          border: 0.0625rem solid ${theme.palette.borderStrong};
          background: ${theme.palette.surfaceBase};
        `}
`;

export const Page = styled.div`
  box-sizing: border-box;
  max-width: 70rem;
  margin: 0 auto;
  padding: 1.75rem 1rem 2.75rem;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.25rem 0.75rem 2rem;
  }
`;

export const MobileHeader = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.scorecardDesktop}) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.5rem;
  }
`;

export const MobileButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(180deg, ${theme.palette.surfaceSubtle} 0%, ${theme.palette.surfaceSoft} 100%)`
      : theme.palette.surfaceBase};
  border: ${({ theme }) =>
    theme.mode === "dark" ? "0" : `0.0625rem solid ${theme.palette.borderStrong}`};
  color: ${({ theme }) => theme.palette.textPrimary};
  font: inherit;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `0 1rem 2rem ${theme.palette.shadowStrong}, 0 0 0 0.0625rem ${theme.palette.borderSoft}`
      : `0 0.625rem 1.375rem ${theme.palette.shadowStrong}`};
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
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.textSecondary};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.88rem;
  }
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

  @media (min-width: ${breakpoints.scorecardDesktop}) {
    display: none;
  }
`;

export const HoleCard = styled.section`
  ${cardSurface};
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 1.125rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    border-radius: 1rem;
  }
`;

export const HoleCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const HoleTitle = styled.h2`
  margin: 0 0 0.25rem;
  font-size: 1.05rem;
`;

export const HoleMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.textMuted};
  font-size: 0.92rem;
`;

export const HoleGoal = styled.p`
  margin: 0 0 1rem;
  padding: 0.75rem 0.875rem;
  border-radius: 0.875rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(180deg, ${theme.palette.surfaceMuted} 0%, ${theme.palette.surfaceSoft} 100%)`
      : theme.palette.surfaceMuted};
  color: ${({ theme }) => theme.palette.textSecondary};
  line-height: 1.45;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `inset 0 0 0 0.0625rem ${theme.palette.borderSoft}`
      : "none"};
`;

export const HoleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.875rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FieldLabel = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.82rem;
  color: ${({ theme }) =>
    theme.mode === "dark" ? theme.palette.textSecondary : theme.palette.textMuted};
`;

export const HoleToggle = styled.label`
  ${fieldCard};

  input[type="checkbox"] {
    align-self: flex-start;
    width: 1.375rem;
    height: 1.375rem;
    accent-color: ${({ theme }) => theme.palette.accentBase};
  }
`;

export const HoleField = styled.label`
  ${fieldCard};
`;

const Select = styled.select`
  ${controlBase};
`;

export const CompactSelect = styled(Select)`
  width: 6.25rem;
  max-width: 100%;
  align-self: flex-start;
  padding-left: 0.875rem;
  font-variant-numeric: tabular-nums;
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

  @media (min-width: ${breakpoints.scorecardDesktop}) {
    display: none;
  }
`;

export const MobileDot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "1.625rem" : "0.625rem")};
  height: 0.625rem;
  padding: 0;
  border: 0;
  border-radius: 999rem;
  background: ${({ $active, theme }) =>
    $active ? theme.palette.accentBase : theme.palette.accentMuted};
  box-shadow: ${({ $active, theme }) =>
    $active ? `0 0.5rem 1rem ${theme.palette.shadowAccent}` : "none"};
`;

export const TableWrapper = styled.div`
  display: none;
  overflow-x: auto;
  margin-top: 0.75rem;
  ${cardSurface};

  @media (min-width: ${breakpoints.scorecardDesktop}) {
    display: block;
  }
`;

export const ScoreTable = styled.table`
  width: 100%;
  min-width: 57.5rem;
  border-collapse: collapse;
  font-size: 0.92rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(180deg, ${theme.palette.surfaceSubtle} 0%, ${theme.palette.surfaceSoft} 100%)`
      : theme.palette.surfaceBase};

  th,
  td {
    border-bottom: 0.0625rem solid ${({ theme }) => theme.palette.borderSoft};
    padding: 0.75rem 0.625rem;
    text-align: center;
    vertical-align: middle;
  }

  th {
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.palette.surfaceSoft : theme.palette.surfaceMuted};
    font-weight: 700;
    white-space: nowrap;
  }

  tfoot td {
    font-weight: 700;
  }

  input[type="number"] {
    ${controlBase};
  }

  input[type="checkbox"] {
    width: 1.375rem;
    height: 1.375rem;
    accent-color: ${({ theme }) => theme.palette.accentBase};
  }
`;

export const GoalCell = styled.td`
  min-width: 11.875rem;
  text-align: left;
`;

export const RelationLabel = styled.td`
  text-align: right;
`;

export const Intro = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.125rem;
  border-radius: 1.125rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.surfaceSubtle} 0%,
    ${({ theme }) => theme.palette.surfaceSoft} 100%
  );
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `0 1rem 2.25rem ${theme.palette.shadowBase}, 0 0 0 0.0625rem ${theme.palette.borderSoft}`
      : `0 0.75rem 1.875rem ${theme.palette.shadowSoft}`};
  border: ${({ theme }) =>
    theme.mode === "dark" ? "0" : `0.0625rem solid ${theme.palette.borderBase}`};

  p {
    margin: 0 0 0.625rem;
    line-height: 1.55;
  }

  ul {
    margin: 0 0 0.625rem;
    padding-left: 1.25rem;
    line-height: 1.55;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    border-radius: 1rem;
  }
`;

export const IntroTitle = styled.strong`
  display: block;
  margin-bottom: 0.625rem;
  font-size: 1rem;
`;

export const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const SummaryItem = styled.div`
  padding: 0.75rem 0.875rem;
  border-radius: 1rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(180deg, ${theme.palette.surfaceSubtle} 0%, ${theme.palette.surfaceSoft} 100%)`
      : theme.palette.accentBase};
  color: ${({ theme }) =>
    theme.mode === "dark" ? theme.palette.textPrimary : theme.palette.surfaceBase};
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `0 1rem 2rem ${theme.palette.shadowBase}, 0 0 0 0.0625rem ${theme.palette.borderSoft}`
      : `0 0.75rem 1.25rem ${theme.palette.shadowAccent}`};

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
    theme.mode === "dark" ? theme.palette.accentBase : "inherit"};
`;
