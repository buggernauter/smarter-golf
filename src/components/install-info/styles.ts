import styled from 'styled-components';

export const StyledInstallInfo = styled.details`
  position: relative;

  summary {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.palette.textPrimary};
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: 2px;
  }
`;

export const StyledInstallInstructions = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  width: min(22rem, calc(100vw - 2rem));
  max-height: 70dvh;
  overflow-y: auto;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.textPrimary};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  box-shadow: ${({ theme }) => theme.shadows.cardSurface};
  font-size: 0.9rem;
  line-height: 1.5;

  h2 {
    margin-top: 0;
    font-size: 1rem;
  }

  ol {
    padding-left: 1.5rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

