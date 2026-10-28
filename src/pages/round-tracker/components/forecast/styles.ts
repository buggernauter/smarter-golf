import { spacing, sizes, radii, borderWidths } from '@/styles/tokens';
import styled from 'styled-components';

export const StyledForecastCard = styled.section`
    border-radius: ${radii[5]};
    border: 0;
    background: ${({ theme }) => theme.gradients.cardSurface};
    box-sizing: border-box;
    width: ${sizes.full};
    max-width: ${sizes.full};
    min-width: 0;
    padding: clamp(${spacing[3.5]}, 4vw, ${spacing[6]});
    margin-bottom: ${spacing[7]};
    overflow-wrap: anywhere;
    color: ${({ theme }) => theme.palette.textPrimary};
`;

export const StyledForecastHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${spacing[4]};
`;

export const StyledForecastResult = styled.div`
    min-width: 0;
`;
export const StyledForecastGoal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${spacing[2]};
    margin-left: auto;
`;

export const StyledGoalBadge = styled.span`
    padding: ${spacing[1.75]} ${spacing[3]};
    border: ${borderWidths.pixel} solid ${({ theme }) => theme.palette.primaryMain};
    border-radius: ${radii.pillPixels};
    color: ${({ theme }) => theme.palette.primaryMain};
    background: ${({ theme }) => theme.palette.surfaceSecondary};
    font-size: 0.875rem;
    font-weight: 600;
`;

export const StyledForecastLabel = styled.div`
    color: ${({ theme }) => theme.palette.textSecondary};
    font-size: 0.8125rem;
    line-height: 1.5;
`;

export const StyledForecastScore = styled.div<{ $hasForecast: boolean }>`
    margin-top: ${spacing[1.5]};
    font-size: ${({ $hasForecast }) => ($hasForecast ? 'clamp(2rem, 6vw, 2.75rem)' : '1rem')};
    font-weight: 700;
    line-height: 1.2;
    font-variant-numeric: tabular-nums;
`;

export const StyledForecastStats = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${spacing[3]};
    margin-top: ${spacing[5]};
    padding-top: ${spacing[4]};
    border-top: ${borderWidths.pixel} solid ${({ theme }) => theme.palette.divider};
    color: ${({ theme }) => theme.palette.textSecondary};
    font-size: 0.875rem;
`;

export const StyledForecastStat = styled.span`
    min-width: 0;
`;
export const StyledForecastStatValue = styled.strong`
    color: ${({ theme }) => theme.palette.textPrimary};
    font-variant-numeric: tabular-nums;
`;

export const StyledForecastProgress = styled.progress`
    display: block;
    width: ${sizes.full};
    height: ${sizes[1.25]};
    margin: ${spacing[4.5]} 0 ${spacing[2.5]};
    appearance: none;
    border: 0;
    border-radius: ${radii.pillPixels};
    overflow: hidden;
    background: ${({ theme }) => theme.palette.outline};
    color: ${({ theme }) => theme.palette.primaryMain};

    &::-webkit-progress-bar {
        background: ${({ theme }) => theme.palette.outline};
    }

    &::-webkit-progress-value {
        background: ${({ theme }) => theme.palette.primaryMain};
        border-radius: ${radii.pillPixels};
    }

    &::-moz-progress-bar {
        background: ${({ theme }) => theme.palette.primaryMain};
        border-radius: ${radii.pillPixels};
    }
`;
