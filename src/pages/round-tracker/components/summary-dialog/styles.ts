import styled from 'styled-components';
import { StyledCardSurface } from '@/pages/round-tracker/components/forecast/card/styles';

export const StyledSummaryCloseButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    padding: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    color: inherit;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;
export const StyledSummaryLabel = styled.span`
    display: block;
    margin-bottom: 0.25rem;
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
    padding: 0.75rem;
    background: ${({ theme }) =>
        theme.mode === 'dark' ? theme.palette.shadowDark : theme.palette.shadowMedium};
    backdrop-filter: blur(12px);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition: opacity 220ms ease;
    z-index: 30;
`;
export const StyledSummarySheet = styled.section<{ $open: boolean }>`
    ${StyledCardSurface};
    box-sizing: border-box;
    width: 100%;
    max-height: 82vh;
    padding: 0.875rem 0.625rem 1rem;
    border-radius: 1.5rem 1.5rem 1rem 1rem;
    overflow: hidden;
    transform: translateY(${({ $open }) => ($open ? '0' : '2rem')});
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
    gap: 0.5rem;
    padding: 0 0.5rem 0.875rem;

    > button,
    > span {
        flex: 0 0 2.75rem;
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
        border-bottom: 0.0625rem solid ${({ theme }) => theme.palette.outlineVariant};
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
export const StyledTableValue = styled(StyledTableCell)`
    font-size: 0.95rem;
`;

export const StyledTableStatusCell = styled(StyledTableCell)<{
    $tone: 'success' | 'danger';
}>`
    svg {
        width: 1.2rem;
        height: 1.2rem;
        color: ${({ $tone, theme }) =>
            $tone === 'success' ? theme.palette.primaryMain : theme.palette.fail};
    }
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
export const StyledEmptyText = styled.p`
    margin: 0;
    padding: 0.75rem 0.5rem;
    color: ${({ theme }) => theme.palette.textSecondary};
`;
export const StyledButton = styled.button<{ $isSave: boolean }>`
    width: ${({ $isSave }) => ($isSave ? '60%' : '60%')};
    min-height: 3rem;
    padding: 0.875rem;
    border: 0;
    border-radius: 999rem;
    background: ${({ theme, $isSave }) => ($isSave ? theme.palette.primaryMain : theme.palette.fail)};
    color: ${({ theme, $isSave }) => ($isSave ? theme.palette.backgroundPaper : theme.palette.textPrimary)};
    font: inherit;
    font-size: 1rem;
    font-weight: 700;
    box-shadow: ${({ theme }) => theme.shadows.primaryButton};
`;

export const StyledSummarySheetFooter = styled.div`
    padding: 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
