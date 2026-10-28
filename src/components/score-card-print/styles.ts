import { spacing, sizes, radii, borderWidths, printLengths } from '@/styles/tokens';
import styled, { createGlobalStyle, css } from "styled-components";

import { printPalette } from "@/styles/palette";

const StyledInfoCardSurface = css`
  padding: ${spacing[3]} ${spacing[3.5]};
  border: ${borderWidths.hairline} solid ${printPalette.borderSubtle};
  border-radius: ${radii[4.5]};
  background: ${printPalette.panelTint};

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    padding: ${printLengths[2.5]} ${printLengths[3]};
    border-color: ${printPalette.borderStrong};
    border-radius: ${printLengths[4]};
    background: ${printPalette.paper};
    box-shadow: none;
  }
`;

const StyledInputBoxBase = css`
  display: inline-block;
  border: ${borderWidths.input} solid ${printPalette.borderSubtle};
  background: ${printPalette.paper};

  @media print {
    border-width: ${borderWidths.hairline};
    border-color: ${printPalette.line};
  }
`;

export const StyledPrintGlobalStyle = createGlobalStyle`
  @media print {
    @page {
      size: A4 landscape;
      margin: ${printLengths[5]};
    }

    html,
    body {
      margin: 0;
      padding: 0;
      background: ${printPalette.paper};
    }

    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .no-print {
      display: none !important;
    }
  }
`;

export const StyledPage = styled.div`
  min-height: ${sizes.viewportHeight};
  padding: ${spacing[0.25]};
  background: ${printPalette.pageGradient};
  color: ${printPalette.text};
  font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif;

  @media print {
    width: ${sizes.full};
    min-height: auto;
    padding: 0;
    background: ${printPalette.paper};
    color: ${printPalette.borderStrong};
  }
`;

export const StyledToolbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: ${spacing[4]};
  margin: 0 auto ${spacing[4.5]};

`;

export const StyledActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
`;

export const StyledActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  appearance: none;
  width: ${sizes[13]};
  height: ${sizes[13]};
  padding: 0;
  border: 0;
  background: transparent;
  color: ${printPalette.actionText};
  font: inherit;
  font-weight: 700;
  cursor: pointer;

  svg {
    width: ${sizes[5.5]};
    height: ${sizes[5.5]};
  }
`;

export const StyledSheet = styled.main`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  border: ${borderWidths.hairline} solid ${printPalette.border};
  border-radius: ${radii[7]};
  background: ${printPalette.sheetGradient};
  box-shadow: ${printPalette.sheetShadow};

  @media print {
    display: block;
    width: ${sizes.full};
    padding: 0;
    border: 0;
    border-radius: 0;
    background: ${printPalette.paper};
    box-shadow: none;
    overflow: visible;
  }
`;

export const StyledGrid = styled.section`
  display: flex;
  flex-direction: column;
  > * {
    flex: 1 1 auto;
    min-width: 0;
  }
  gap: ${spacing[3.5]};

  @media print {
    flex-direction: row;

    > * {
      flex-basis: 0;
    }
    display: flex;
    align-items: flex-start;
    gap: ${printLengths[1]};
  }
`;

export const StyledCard = styled.section`
  overflow: hidden;
  border: ${borderWidths.hairline} solid ${printPalette.border};
  border-radius: ${radii[6]};
  background: ${printPalette.card};

  @media print {
    flex: 1 1 0;
    min-width: 0;
    break-inside: avoid;
    page-break-inside: avoid;
    border-color: ${printPalette.borderStrong};
    border-radius: ${printLengths[5]};
    background: ${printPalette.paper};
    box-shadow: none;
  }
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${spacing[3]};
  padding: ${spacing[3.5]} ${spacing[4]};
  border-bottom: ${borderWidths.hairline} solid ${printPalette.border};
  background: ${printPalette.card};

  @media print {
    padding: ${printLengths[2]} ${printLengths[2.4]};
    border-bottom-color: ${printPalette.borderStrong};
    background: ${printPalette.paper};
  }
`;

export const StyledCardTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;

  @media print {
    font-size: 9pt;
  }
`;

export const StyledCardMeta = styled.p`
  margin: 0;
  color: ${printPalette.textMuted};
  font-size: 0.9rem;
  font-weight: 700;

  @media print {
    color: ${printPalette.borderStrong};
    font-size: 7pt;
  }
`;

export const StyledTable = styled.table`
  width: ${sizes.full};
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 0.78rem;

  th,
  td {
    padding: ${spacing[1.75]} ${spacing[0.5]};
    border-bottom: ${borderWidths.hairline} solid ${printPalette.borderSoft};
    text-align: center;
    vertical-align: middle;
  }

  th {
    background: ${printPalette.tableHeader};
    font-size: 0.67rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    line-height: 1.15;
    white-space: normal;
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: ${sizes[5.5]};
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: ${sizes[6.5]};
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: ${sizes[12]};
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: ${sizes[12]};
  }

  th:nth-child(5),
  td:nth-child(5) {
    width: ${sizes[14]};
  }

  th:nth-child(6),
  td:nth-child(6) {
    width: ${sizes[14]};
  }

  th:nth-child(5),
  th:nth-child(6),
  th:nth-child(7) {
    white-space: nowrap;
  }

  th:nth-child(7),
  td:nth-child(7) {
    width: ${sizes[14.5]};
  }

  @media print {
    font-size: 5.4pt;

    th,
    td {
      padding: 0;
      border-bottom-color: ${printPalette.borderStrong};
    }

    th {
      background: ${printPalette.paper};
      font-size: 4.6pt;
      letter-spacing: 0.01em;
      line-height: 1.05;
    }

    th:nth-child(1),
    td:nth-child(1) {
      width: ${printLengths[3.1]};
    }

    th:nth-child(2),
    td:nth-child(2) {
      width: ${printLengths[3.8]};
    }

    th:nth-child(3),
    td:nth-child(3) {
      width: ${printLengths[7.2]};
    }

    th:nth-child(4),
    td:nth-child(4) {
      width: ${printLengths[7.2]};
    }

    th:nth-child(5),
    td:nth-child(5) {
      width: ${printLengths[7.8]};
    }

    th:nth-child(6),
    td:nth-child(6) {
      width: ${printLengths[7.8]};
    }

    th:nth-child(7),
    td:nth-child(7) {
      width: ${printLengths[7.8]};
    }
  }
`;

export const StyledCheckboxBox = styled.span`
  ${StyledInputBoxBase};
  width: ${sizes[5.5]};
  height: ${sizes[4.5]};

  @media print {
    width: ${printLengths[2.6]};
    height: ${printLengths[3]};
  }
`;

export const StyledInputBox = styled.span`
  ${StyledInputBoxBase};
  width: ${sizes[11.5]};
  height: ${sizes[5]};

  @media print {
    width: ${printLengths[5.4]};
    height: ${printLengths[3.8]};
  }
`;

export const StyledSectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};

  > * {
    flex-basis: auto;
  }

  @media print {
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    gap: ${printLengths[1.5]};
    margin-top: ${printLengths[2]};
  }
`;

export const StyledSummary = styled.section`
  display: flex;
  flex-direction: column;
  > * {
    flex: 1 1 auto;
    min-width: 0;
  }
  gap: ${spacing[2.5]};
  margin: ${spacing[3]} 0;

  @media print {
    flex-direction: row;

    > * {
      flex-basis: 0;
    }
    flex: 0 0 ${printLengths[84]};
    margin: 0;
    gap: ${printLengths[2]};
  }
`;

export const StyledSummaryField = styled.div`
  ${StyledInfoCardSurface};
  padding: ${spacing[2.5]} ${spacing[3]};

  span {
    display: block;
    margin-bottom: ${spacing[2]};
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-bottom: ${spacing[2]};
    font-size: 1rem;
  }

  @media print {
    padding: ${printLengths[2.25]} ${printLengths[2.5]};

    strong {
      margin-bottom: ${printLengths[2]};
      font-size: 10pt;
    }
  }
`;

export const StyledSummaryInput = styled.div`
  ${StyledInputBoxBase};
  width: ${sizes.full};
  height: ${sizes[6.5]};
  border-radius: ${radii[2]};

  @media print {
    height: ${printLengths[7]};
  }
`;

export const StyledAsideGrid = styled.section`
  display: flex;
  flex-direction: column;
  > * {
    flex: 1 1 auto;
    min-width: 0;
  }

  > :first-child {
    flex-grow: 1.2;
  }
  gap: ${spacing[3.5]};

  @media print {
    flex-direction: row;

    > * {
      flex-basis: 0;
    }
    flex: 1 1 0;
    min-width: 0;
    align-items: flex-start;
    gap: ${printLengths[1.5]};
  }
`;

export const StyledInfoCard = styled.div`
  ${StyledInfoCardSurface};
  padding: ${spacing[3.5]} ${spacing[4]};
  background: ${printPalette.muted};

  h3 {
    margin: 0 0 ${spacing[2.5]};
    font-size: 0.95rem;
  }

  p,
  ul {
    margin: 0;
    font-size: 0.84rem;
    line-height: 1.5;
  }

  ul {
    padding-left: ${spacing[4.5]};
  }

  @media print {
    flex: 1 1 0;
    min-width: 0;
    padding: ${printLengths[2.25]} ${printLengths[2.5]};

    h3 {
      margin-bottom: ${printLengths[1.5]};
      font-size: 7.5pt;
    }

    p,
    ul {
      font-size: 6.6pt;
      line-height: 1.3;
    }

    ul {
      padding-left: ${printLengths[4]};
    }
  }
`;
