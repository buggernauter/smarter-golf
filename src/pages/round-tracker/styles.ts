import { RotateCcw } from 'lucide-react';
import styled from 'styled-components';

export const StyledPage = styled.div`
    box-sizing: border-box;
    min-height: 100vh;

    padding: 0.875rem 0.75rem 3rem;
    color: ${({ theme }) => theme.palette.textPrimary};
    width: 100%;
    max-width: 100vw;
    min-width: 0;
    font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        sans-serif;
`;

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    padding-top: 2rem;
`;

export const StyledIconButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    padding: 0;
    border: 0;
    border-radius: 1rem;
    background: ${({ theme }) =>
        theme.mode === 'dark' ? theme.gradients.iconButton : theme.palette.backgroundPaper};
    color: ${({ theme }) => theme.palette.primaryMain};
    box-shadow: ${({ theme }) => theme.shadows.iconButton};

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
        theme.mode === 'dark' ? theme.gradients.summaryCard : theme.gradients.summaryCard};
    color: ${({ theme }) =>
        theme.mode === 'dark' ? theme.palette.textPrimary : theme.palette.backgroundPaper};
    box-shadow: ${({ theme }) => theme.shadows.summaryCard};

    strong {
        font-size: 1.2rem;
    }
`;

export const StyledRotateCcw = styled(RotateCcw)`
    color: ${({ theme }) => theme.palette.fail};
`;
