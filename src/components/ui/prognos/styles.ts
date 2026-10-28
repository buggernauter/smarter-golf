import { spacing, sizes, radii } from '@/styles/tokens';
import styled from 'styled-components';

export const StyledPrognosTrack = styled.div`
    display: flex;
    height: ${sizes[1.5]};
    margin-top: ${spacing[2.5]};
    overflow: hidden;
    border-radius: ${radii.pill};
    background: ${({ theme }) => theme.palette.divider};
`;

export const StyledPrognosFill = styled.div<{ $percentage: number }>`
    width: ${({ $percentage }) => $percentage}%;
    height: ${sizes.full};
    border-radius: inherit;
    background: ${({ theme }) => theme.palette.primaryMain};
`;
