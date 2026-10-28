import { spacing, sizes, radii } from '@/styles/tokens';
import { RotateCcw } from 'lucide-react';
import styled from 'styled-components';

export const StyledPage = styled.div`
    box-sizing: border-box;
    min-height: ${sizes.viewportHeight};

    padding: ${spacing[3.5]} ${spacing[3]} ${spacing[12]};
    color: ${({ theme }) => theme.palette.textPrimary};
    width: ${sizes.full};
    max-width: ${sizes.viewportWidth};
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

    padding-top: ${spacing[8]};
`;

export const StyledIconButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${sizes[12]};
    height: ${sizes[12]};
    padding: 0;
    border: 0;
    border-radius: ${radii[4]};
    background: ${({ theme }) =>
        theme.mode === 'dark' ? theme.gradients.iconButton : theme.palette.backgroundPaper};
    color: ${({ theme }) => theme.palette.primaryMain};
    box-shadow: ${({ theme }) => theme.shadows.iconButton};

    svg {
        width: ${sizes[5.5]};
        height: ${sizes[5.5]};
    }
`;

export const StyledSummaryGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${spacing[3]};
`;

export const StyledSummaryCard = styled.div`
    flex: 1 1 calc(50% - ${sizes[1.5]});
    min-width: 0;
    padding: ${spacing[3]} ${spacing[3.5]};
    border-radius: ${radii[4]};
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
