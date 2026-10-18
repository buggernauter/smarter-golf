import styled from 'styled-components';

export const StyledField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4375rem;
    padding: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    align-items: center;
`;
export const StyledFieldLabel = styled.span`
    display: block;
    margin-bottom: 0.4375rem;
    font-size: 0.88rem;
    font-weight: 600;
    color: ${({ theme }) =>
        theme.mode === 'dark' ? theme.palette.textSecondary : theme.palette.textDisabled};
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
export const StyledStepperControl = styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
    width: 100%;
    max-width: 14rem;
    padding: 0.3125rem;
    border-radius: 1.25rem;
    background: ${({ theme }) => theme.gradients.stepperControl};
    box-shadow: ${({ theme }) => theme.shadows.stepperControl};
`;
