import { spacing, sizes, radii } from '@/styles/tokens';
import styled from 'styled-components';

export const StyledField = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1.75]};
    padding: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    align-items: center;
`;
export const StyledFieldLabel = styled.span`
    display: block;
    margin-bottom: ${spacing[1.75]};
    font-size: 0.88rem;
    font-weight: 600;
    color: ${({ theme }) =>
        theme.mode === 'dark' ? theme.palette.textSecondary : theme.palette.textDisabled};
`;
export const StyledStepperButton = styled.button`
    flex: 0 0 ${sizes[12]};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 0rem;
    height: ${sizes[12]};
    padding: 0;
    border: 0;
    border-radius: ${radii.pill};
    color: ${({ theme }) => theme.palette.textPrimary};
    background: ${({ theme }) => theme.gradients.stepperButton};
    box-shadow: ${({ theme }) => theme.shadows.stepperButton};
    transition:
        transform 160ms ease,
        background 180ms ease,
        box-shadow 180ms ease,
        opacity 180ms ease;

    &:active:not(:disabled) {
        transform: scale(0.96);
        background: ${({ theme }) => theme.palette.primaryMain};
        color: ${({ theme }) => theme.palette.backgroundPaper};
        box-shadow: ${({ theme }) => theme.shadows.stepperButtonPressed};
    }

    &:disabled {
        opacity: 0.35;
        box-shadow: none;
    }

    svg {
        width: ${sizes[4.8]};
        height: ${sizes[4.8]};
    }
`;
export const StyledStepperValue = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${spacing[0.5]};
    min-width: 0;
    text-align: center;

    strong {
        font-size: 1.5rem;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        color: ${({ theme }) => theme.palette.textPrimary};
    }
`;
export const StyledStepperControl = styled.div`
    display: flex;
    align-items: center;
    gap: ${spacing[2.5]};
    width: ${sizes.full};
    max-width: ${sizes[56]};
    padding: ${spacing[1.25]};
    border-radius: ${radii[5]};
    background: ${({ theme }) => theme.gradients.stepperControl};
    box-shadow: ${({ theme }) => theme.shadows.stepperControl};
`;
