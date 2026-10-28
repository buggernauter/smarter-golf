import { spacing, sizes, radii, borderWidths } from '@/styles/tokens';
import styled from "styled-components";

const StyledTextBase = styled.p`
  margin: 0;
`;

export const StyledLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${sizes.viewportHeight};
  padding: ${spacing[8]};
  box-sizing: border-box;
`;

export const StyledCard = styled.section`
  width: min(${sizes.full}, ${sizes[112]});
  padding: ${spacing[6]};
  border-radius: ${radii[6]};
  background: ${({ theme }) => theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.textPrimary};
  box-shadow: ${({ theme }) => theme.shadows.desktopNoticeCard};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.divider};
`;

export const StyledTitle = styled.h1`
  margin: 0 0 ${spacing[2]};
  font-size: 1.6rem;
`;

export const StyledLead = styled(StyledTextBase)`
  margin-bottom: ${spacing[2.5]};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.textPrimary};
`;
