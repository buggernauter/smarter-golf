import styled from 'styled-components';

export const StyledPrognosTrack = styled.div`
    display: flex;
    height: 0.375rem;
    margin-top: 0.625rem;
    overflow: hidden;
    border-radius: 999rem;
    background: ${({ theme }) => theme.palette.divider};
`;

export const StyledPrognosFill = styled.div<{ $percentage: number }>`
    width: ${({ $percentage }) => $percentage}%;
    height: 100%;
    border-radius: inherit;
    background: ${({ theme }) => theme.palette.primaryMain};
`;
