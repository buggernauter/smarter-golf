import styled from "styled-components";

export const StyledModalBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.palette.shadowDark};
`;

export const StyledSummaryModal = styled.section`
  width: min(100%, 28rem);
  max-height: calc(100dvh - 2rem);
  box-sizing: border-box;
  overflow-y: auto;
  padding: 1.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.outline};
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.palette.cardSurfaceGradient};
  box-shadow: ${({ theme }) => theme.palette.cardSurfaceShadow};
`;

export const StyledSummaryHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const StyledSummaryTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-size: 1.5rem;
`;

export const StyledSummaryClose = styled.button`
  display: grid;
  width: 2.75rem;
  min-width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  padding: 0;
  border: 0.0625rem solid ${({ theme }) => theme.palette.outline};
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.textPrimary};
  cursor: pointer;
`;

export const StyledSummaryScore = styled.div`
  display: grid;
  gap: 0.25rem;
  margin: 1.25rem 0;
  padding: 1rem;
  border-radius: 0.875rem;
  background: ${({ theme }) => theme.palette.fieldSurfaceGradient};
  color: ${({ theme }) => theme.palette.textPrimary};
  box-shadow: ${({ theme }) => theme.palette.fieldSurfaceShadow};
  text-align: center;

  span {
    color: ${({ theme }) => theme.palette.textDisabled};
    font-family: Arial, sans-serif;
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  strong {
    font-family: Arial, sans-serif;
    font-size: 2.5rem;
    line-height: 1;
  }
`;

export const StyledSummaryLevel = styled.p`
  margin: 0 0 1.25rem;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.125rem;
  text-align: center;

  strong {
    color: ${({ theme }) => theme.palette.primaryMain};
  }
`;

export const StyledSummaryList = styled.ul`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  border-top: 0.0625rem solid ${({ theme }) => theme.palette.outlineVariant};
  list-style: none;
`;

export const StyledSummaryListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
  align-items: center;
  min-height: 2.75rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.palette.outlineVariant};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;

  span:last-child {
    min-width: 3.5rem;
    color: ${({ theme }) => theme.palette.textDisabled};
    text-align: right;
  }
`;
