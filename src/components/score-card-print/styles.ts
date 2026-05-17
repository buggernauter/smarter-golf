import styled, { createGlobalStyle, css } from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

const paperBorder = "#d8cfc2";
const paperSurface = "#fcfaf6";
const paperCard = "#f4ede2";
const paperMuted = "#f8f3eb";
const paperText = "#1f1a17";
const paperTextMuted = "#655b51";
const paperBorderSoft = "#ece4d9";
const printLine = "#8d8d8d";

const StyledInfoCardSurface = css`
  padding: 0.75rem 0.875rem;
  border: 0.0625rem solid #ddd5c9;
  border-radius: 1.125rem;
  background: rgba(250, 247, 241, 0.9);

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    padding: 2.5mm 3mm;
    border-color: #000;
    border-radius: 4mm;
    background: #fff;
    box-shadow: none;
  }
`;

const StyledInputBoxBase = css`
  display: inline-block;
  border: 0.1125rem solid #dddddd;
  background: #fff;

  @media print {
    border-width: 0.0625rem;
    border-color: ${printLine};
  }
`;

export const StyledPrintGlobalStyle = createGlobalStyle`
  @media print {
    @page {
      size: A4 landscape;
      margin: 5mm;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      background: #fff;
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
  min-height: 100vh;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ebe7de 0%, #f5f2ea 45%, #ddd6c8 100%);
  color: ${paperText};
  font-family:
    "Avenir Next",
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;

  @media (max-width: ${breakpoints.printCompact}) {
    padding: 0.0625rem;
  }

  @media print {
    width: 100%;
    min-height: auto;
    padding: 0;
    background: #fff;
    color: #000;
  }
`;

export const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 70rem;
  margin: 0 auto 1.125rem;

  @media (max-width: ${breakpoints.printCompact}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const StyledActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  appearance: none;
  width: 3.25rem;
  height: 3.25rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: #393838;
  font: inherit;
  font-weight: 700;
  cursor: pointer;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    fill: currentColor;
  }
`;

export const StyledSheet = styled.main`
  box-sizing: border-box;
  max-width: 70rem;
  margin: 0 auto;
  padding: 1.75rem;
  border: 0.0625rem solid #d3c9ba;
  border-radius: 1.75rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, ${paperSurface} 100%);
  box-shadow: 0 1.5rem 3.75rem rgba(43, 33, 24, 0.14);

  @media (max-width: ${breakpoints.printCompact}) {
    padding: 0;
  }

  @media print {
    display: block;
    width: 100%;
    max-width: none;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: #fff;
    box-shadow: none;
    overflow: visible;
  }
`;

export const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.875rem;

  @media (max-width: ${breakpoints.printCompact}) {
    grid-template-columns: 1fr;
  }

  @media print {
    display: flex;
    align-items: flex-start;
    gap: 1mm;
  }
`;

export const StyledCard = styled.section`
  overflow: hidden;
  border: 0.0625rem solid ${paperBorder};
  border-radius: 1.5rem;
  background: ${paperCard};

  @media print {
    flex: 1 1 0;
    min-width: 0;
    break-inside: avoid;
    page-break-inside: avoid;
    border-color: #000;
    border-radius: 5mm;
    background: #fff;
    box-shadow: none;
  }
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-bottom: 0.0625rem solid #e1d9cd;
  background: ${paperCard};

  @media print {
    padding: 2mm 2.4mm;
    border-bottom-color: #000;
    background: #fff;
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
  color: ${paperTextMuted};
  font-size: 0.9rem;
  font-weight: 700;

  @media print {
    color: #000;
    font-size: 7pt;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 0.78rem;

  th,
  td {
    padding: 0.4375rem 0.125rem;
    border-bottom: 0.0625rem solid ${paperBorderSoft};
    text-align: center;
    vertical-align: middle;
  }

  th {
    background: #fbf7f0;
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
    width: 1.375rem;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 1.625rem;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 3rem;
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 3rem;
  }

  th:nth-child(5),
  td:nth-child(5) {
    width: 3.5rem;
  }

  th:nth-child(6),
  td:nth-child(6) {
    width: 3.5rem;
  }

  th:nth-child(7),
  td:nth-child(7) {
    width: 2.75rem;
  }

  th:nth-child(5),
  th:nth-child(6),
  th:nth-child(7),
  th:nth-child(8) {
    white-space: nowrap;
  }

  th:nth-child(8),
  td:nth-child(8) {
    width: 3.625rem;
  }

  @media print {
    font-size: 5.4pt;

    th,
    td {
      padding: 0;
      border-bottom-color: #000;
    }

    th {
      background: #fff;
      font-size: 4.6pt;
      letter-spacing: 0.01em;
      line-height: 1.05;
    }

    th:nth-child(1),
    td:nth-child(1) {
      width: 3.1mm;
    }

    th:nth-child(2),
    td:nth-child(2) {
      width: 3.8mm;
    }

    th:nth-child(3),
    td:nth-child(3) {
      width: 7.2mm;
    }

    th:nth-child(4),
    td:nth-child(4) {
      width: 7.2mm;
    }

    th:nth-child(5),
    td:nth-child(5) {
      width: 7.8mm;
    }

    th:nth-child(6),
    td:nth-child(6) {
      width: 7.8mm;
    }

    th:nth-child(7),
    td:nth-child(7) {
      width: 6.2mm;
    }

    th:nth-child(8),
    td:nth-child(8) {
      width: 7.8mm;
    }
  }
`;

export const StyledCheckboxBox = styled.span`
  ${StyledInputBoxBase};
  width: 1.375rem;
  height: 1.125rem;

  @media print {
    width: 2.6mm;
    height: 3mm;
  }
`;

export const StyledInputBox = styled.span`
  ${StyledInputBoxBase};
  width: 2.875rem;
  height: 1.25rem;

  @media print {
    width: 5.4mm;
    height: 3.8mm;
  }
`;

export const StyledSectionGroup = styled.div`
  display: grid;
  gap: 0.75rem;

  @media (max-width: ${breakpoints.printCompact}) {
    grid-template-columns: 1fr;
  }

  @media print {
    display: flex;
    align-items: flex-start;
    gap: 1.5mm;
    margin-top: 2mm;
  }
`;

export const StyledSummary = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.625rem;
  margin: 0.75rem 0;

  @media (max-width: ${breakpoints.printCompact}) {
    grid-template-columns: 1fr;
  }

  @media print {
    flex: 0 0 84mm;
    margin: 0;
    gap: 2mm;
  }
`;

export const StyledSummaryField = styled.div`
  ${StyledInfoCardSurface};
  padding: 0.625rem 0.75rem;

  span {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  @media print {
    padding: 2.25mm 2.5mm;

    strong {
      margin-bottom: 2mm;
      font-size: 10pt;
    }
  }
`;

export const StyledSummaryInput = styled.div`
  ${StyledInputBoxBase};
  width: 100%;
  height: 1.625rem;
  border-radius: 0.5rem;

  @media print {
    height: 7mm;
  }
`;

export const StyledAsideGrid = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 0.875rem;

  @media (max-width: ${breakpoints.printCompact}) {
    grid-template-columns: 1fr;
  }

  @media print {
    flex: 1 1 0;
    min-width: 0;
    align-items: flex-start;
    gap: 1.5mm;
  }
`;

export const StyledInfoCard = styled.div`
  ${StyledInfoCardSurface};
  padding: 0.875rem 1rem;
  background: ${paperMuted};

  h3 {
    margin: 0 0 0.625rem;
    font-size: 0.95rem;
  }

  p,
  ul {
    margin: 0;
    font-size: 0.84rem;
    line-height: 1.5;
  }

  ul {
    padding-left: 1.125rem;
  }

  @media print {
    flex: 1 1 0;
    min-width: 0;
    padding: 2.25mm 2.5mm;

    h3 {
      margin-bottom: 1.5mm;
      font-size: 7.5pt;
    }

    p,
    ul {
      font-size: 6.6pt;
      line-height: 1.3;
    }

    ul {
      padding-left: 4mm;
    }
  }
`;
