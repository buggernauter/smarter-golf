import styled from 'styled-components';

export const StyledDialog = styled.dialog`
    box-sizing: border-box;
    width: min(26rem, calc(100% - 2rem));
    max-height: calc(100dvh - 2rem);
    overflow-y: auto;
    padding: 1.5rem;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    border-radius: 1.25rem;
    background: ${({ theme }) => theme.palette.backgroundPaper};
    color: ${({ theme }) => theme.palette.textPrimary};
    font-family: inherit;

    &::backdrop {
        background: ${({ theme }) => theme.palette.backdrop};
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h1 {
        margin: 0;
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        color: ${({ theme }) => theme.palette.textSecondary};
        line-height: 1.5;
    }

    label {
        font-weight: 600;
    }

    select,
    button {
        min-height: 3rem;
        padding: 0.75rem 1rem;
        border: 1px solid ${({ theme }) => theme.palette.divider};
        border-radius: 0.75rem;
        background: ${({ theme }) => theme.palette.surfaceSecondary};
        color: inherit;
        font: inherit;
    }

    button {
        cursor: pointer;
    }

    button[type='submit'] {
        border-color: transparent;
        background: ${({ theme }) => theme.palette.success};
        color: ${({ theme }) => theme.palette.textOnAccent};
        font-weight: 700;
    }

    :is(select, button):focus-visible {
        outline: 3px solid ${({ theme }) => theme.palette.primaryMain};
        outline-offset: 3px;
    }
`;
