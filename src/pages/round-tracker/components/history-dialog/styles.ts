import styled from 'styled-components';

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
`;
export const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.palette.outlineVariant};
    color: ${({ theme }) => theme.palette.textPrimary};
`;
export const StyledOpenButton = styled.button`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    min-width: 0;
    padding: 1rem 0.75rem;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;


    &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: -2px;
    }

    > svg {
        flex-shrink: 0;
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const StyledDeleteButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    width: 2.75rem;
    height: 2.75rem;
    margin-left: 0.25rem;
    padding: 0;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.palette.fail};
    cursor: pointer;


    &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: -2px;
    }

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export const StyledRowDetails = styled.span`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    min-width: 0;
`;

export const StyledResult = styled.span`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.palette.fail};
`;
