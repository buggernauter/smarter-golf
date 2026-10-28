import { spacing, sizes, radii, borderWidths } from '@/styles/tokens';
import styled from "styled-components";

export const StyledModalBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[4]};
  background: ${({ theme }) => theme.palette.shadowDark};
`;

export const StyledSummaryModal = styled.section`
  width: ${sizes.full};
  max-height: calc(${sizes.dynamicViewportHeight} - ${sizes[8]});
  box-sizing: border-box;
  overflow-y: auto;
  padding: ${spacing[5]};
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outline};
  border-radius: ${radii[5]};
  background: ${({ theme }) => theme.gradients.cardSurface};
  box-shadow: ${({ theme }) => theme.shadows.cardSurface};
`;

export const StyledSummaryHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing[4]};
`;

export const StyledSummaryTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-size: 1.5rem;
`;

export const StyledSummaryClose = styled.button`
  display: flex;
  width: ${sizes[11]};
  min-width: ${sizes[11]};
  height: ${sizes[11]};
  align-items: center;
  justify-content: center;
  padding: 0;
  border: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outline};
  border-radius: ${radii.circle};
  background: ${({ theme }) => theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.textPrimary};
  cursor: pointer;
`;

export const StyledSummaryScore = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[1]};
  margin: ${spacing[5]} 0;
  padding: ${spacing[4]};
  border-radius: ${radii[3.5]};
  background: ${({ theme }) => theme.gradients.fieldSurface};
  color: ${({ theme }) => theme.palette.textPrimary};
  box-shadow: ${({ theme }) => theme.shadows.fieldSurface};
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
  margin: 0 0 ${spacing[5]};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;
  font-size: 1.125rem;
  text-align: center;

  strong {
    color: ${({ theme }) => theme.palette.primaryMain};
  }
`;

export const StyledSummaryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
  padding: 0;
  border-top: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outlineVariant};
  list-style: none;
`;

export const StyledSummaryListItem = styled.li`
  display: flex;
  gap: ${spacing[4]};
  align-items: center;
  min-height: ${sizes[11]};
  border-bottom: ${borderWidths.hairline} solid ${({ theme }) => theme.palette.outlineVariant};
  color: ${({ theme }) => theme.palette.textPrimary};
  font-family: Arial, sans-serif;

  > :first-child {
    flex: 1;
    min-width: 0;
  }

  > :not(:first-child) {
    flex-shrink: 0;
  }

  span:last-child {
    min-width: ${sizes[14]};
    color: ${({ theme }) => theme.palette.textDisabled};
    text-align: right;
  }
`;
