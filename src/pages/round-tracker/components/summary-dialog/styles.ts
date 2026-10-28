import { spacing, sizes, radii, borderWidths, pixels } from '@/styles/tokens';
import styled from 'styled-components';

export const StyledSummaryCloseButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${sizes[11]};
    height: ${sizes[11]};
    padding: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    color: inherit;
    cursor: pointer;

    &:focus-visible {
        outline: ${borderWidths.doublePixel} solid currentColor;
        outline-offset: ${pixels[2]};
    }

    svg {
        width: ${sizes[6]};
        height: ${sizes[6]};
    }
`;
export const StyledSummaryLabel = styled.span`
    display: block;
    margin-bottom: ${spacing[1]};
    font-size: 0.78rem;
    letter-spacing: 0.02em;
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 1 : 0.82)};
    color: ${({ theme }) => (theme.mode === 'dark' ? theme.palette.primaryMain : 'inherit')};
`;

export const StyledSummarySheetBackdrop = styled.div<{ $open: boolean }>`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: ${spacing[3]};
    background: ${({ theme }) =>
        theme.mode === 'dark' ? theme.palette.shadowDark : theme.palette.shadowMedium};
    backdrop-filter: blur(${pixels[12]});
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition: opacity 220ms ease;
    z-index: 30;
`;
export const StyledSummarySheet = styled.section<{ $open: boolean }>`
    border-radius: ${radii[5]};
    border: 0;
    background: ${({ theme }) => theme.gradients.cardSurface};
    box-sizing: border-box;
    width: ${sizes.full};
    max-height: ${sizes.summarySheetHeight};
    padding: ${spacing[3.5]} ${spacing[2.5]} ${spacing[4]};
    border-radius: ${radii[6]} ${radii[6]} ${radii[4]} ${radii[4]};
    overflow: hidden;
    transform: translateY(${({ $open }) => ($open ? '0' : sizes[8])});
    transition: transform 220ms ease;
`;

export const StyledSummarySheetHandle = styled.span`
    display: block;
    width: ${sizes[12]};
    height: ${sizes[1.25]};
    margin: 0 auto ${spacing[3.5]};
    border-radius: ${radii.pill};
    background: ${({ theme }) => theme.palette.outlineVariant};
`;

export const StyledSummarySheetHeader = styled.div`
    display: flex;
    align-items: center;
    gap: ${spacing[2]};
    padding: 0 ${spacing[2]} ${spacing[3.5]};

    > button,
    > span {
        flex: 0 0 ${sizes[11]};
    }
`;

export const StyledSummarySheetTitle = styled.h2`
    flex: 1;
    min-width: 0;
    margin: 0;
    font-size: 1rem;
    text-align: center;
`;
export const StyledSummarySheetBody = styled.div`
    overflow-y: auto;
    max-height: calc(${sizes.summarySheetHeight} - ${sizes[32]});
    padding: 0 ${spacing[0.5]};
`;

export const StyledTableCard = styled.section`
    box-sizing: border-box;
    width: ${sizes.full};
    border-radius: ${radii[4]};
`;

export const StyledTableWrapper = styled.div`
    overflow: visible;
`;

export const StyledTable = styled.table`
    width: ${sizes.full};
    border-collapse: collapse;
    table-layout: fixed;
    font-variant-numeric: tabular-nums;

    th,
    td {
        padding: ${spacing[2.8]} ${spacing[0.6]};
        border-bottom: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outlineVariant};
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
        padding-top: ${spacing[3.6]};
        border-bottom: 0;
    }
`;

export const StyledTableCell = styled.td`
    font-size: 0.95rem;
    color: ${({ theme }) => theme.palette.textPrimary};
`;

export const StyledTableCellPrimary = styled(StyledTableCell)`
    border-right: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outlineVariant};
`;

export const StyledTableFooterCell = styled.td`
    font-size: 0.95rem;
    text-align: left;
    color: ${({ theme }) => theme.palette.textPrimary};
`;
export const StyledTableValue = styled(StyledTableCell)`
    font-size: 0.95rem;
`;

export const StyledTableStatusCell = styled(StyledTableCell)<{
    $tone: 'success' | 'danger';
}>`
    svg {
        width: ${sizes[4.8]};
        height: ${sizes[4.8]};
        color: ${({ $tone, theme }) =>
            $tone === 'success' ? theme.palette.primaryMain : theme.palette.fail};
    }
`;

export const StyledBadge = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: ${sizes[5.6]};
    min-height: ${sizes[5.6]};
    color: ${({ theme }) => theme.palette.textPrimary};
    font-size: 0.95rem;
`;
export const StyledEmptyText = styled.p`
    margin: 0;
    padding: ${spacing[3]} ${spacing[2]};
    color: ${({ theme }) => theme.palette.textSecondary};
`;
export const StyledButton = styled.button<{ $isSave: boolean }>`
    width: ${({ $isSave }) => ($isSave ? '60%' : '60%')};
    min-height: ${sizes[12]};
    padding: ${spacing[3.5]};
    border: 0;
    border-radius: ${radii.pill};
    background: ${({ theme, $isSave }) => ($isSave ? theme.palette.primaryMain : theme.palette.fail)};
    color: ${({ theme, $isSave }) => ($isSave ? theme.palette.backgroundPaper : theme.palette.textPrimary)};
    font: inherit;
    font-size: 1rem;
    font-weight: 700;
    box-shadow: ${({ theme }) => theme.shadows.primaryButton};
`;

export const StyledSummarySheetFooter = styled.div`
    padding: ${spacing[8]} ${spacing[8]} ${spacing[8]};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing[4]};
`;
export const StyledResetButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-left: auto;
    margin-top: ${spacing[3]};
    padding: ${spacing[3]};
    border: 0;
    background: transparent;
`;
