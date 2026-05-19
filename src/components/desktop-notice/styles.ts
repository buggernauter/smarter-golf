import styled from "styled-components";

const StyledTextBase = styled.p`
  margin: 0;
`;

export const StyledLayout = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
`;

export const StyledCard = styled.section`
  width: min(100%, 28rem);
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.textPrimary};
  box-shadow: ${({ theme }) => theme.palette.desktopNoticeCardShadow};
  border: 0.0625rem solid ${({ theme }) => theme.palette.divider};
`;

export const StyledTitle = styled.h1`
  margin: 0 0 0.5rem;
  font-size: 1.6rem;
`;

export const StyledLead = styled(StyledTextBase)`
  margin-bottom: 0.625rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const StyledText = styled(StyledTextBase)`
  line-height: 1.55;
  color: ${({ theme }) => theme.palette.textSecondary};
`;
