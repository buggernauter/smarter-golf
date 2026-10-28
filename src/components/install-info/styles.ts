import { spacing, sizes, radii, borderWidths, pixels } from '@/styles/tokens';
import styled from 'styled-components';

export const StyledInstallInfo = styled.details`
  position: relative;

  summary {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${sizes[11]};
    height: ${sizes[11]};
    border-radius: ${radii.circle};
    color: ${({ theme }) => theme.palette.textPrimary};
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary:focus-visible {
    outline: ${borderWidths.doublePixel} solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: ${pixels[2]};
  }
`;

export const StyledInstallInstructions = styled.div`
  position: absolute;
  top: calc(100% + ${spacing[2]});
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  width: min(${sizes[88]}, calc(${sizes.viewportWidth} - ${sizes[8]}));
  max-height: 70dvh;
  overflow-y: auto;
  padding: ${spacing[4]};
  border-radius: ${radii[4]};
  background: ${({ theme }) => theme.palette.backgroundPaper};
  color: ${({ theme }) => theme.palette.textPrimary};
  border: ${borderWidths.pixel} solid ${({ theme }) => theme.palette.divider};
  box-shadow: ${({ theme }) => theme.shadows.cardSurface};
  font-size: 0.9rem;
  line-height: 1.5;

  h2 {
    margin-top: 0;
    font-size: 1rem;
  }

  ol {
    padding-left: ${spacing[6]};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

