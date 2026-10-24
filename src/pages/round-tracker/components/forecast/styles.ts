import styled from 'styled-components';
import { StyledCardSurface } from '@/pages/round-tracker/components/forecast/card/styles';

export const StyledForecastCard = styled.section`
    ${StyledCardSurface};
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    padding: clamp(0.875rem, 4vw, 1.5rem);
    margin-bottom: 1.75rem;
    overflow-wrap: anywhere;
    color: ${({ theme }) => theme.palette.textPrimary};
`;

export const StyledForecastHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
`;

export const StyledForecastResult = styled.div`
    min-width: 0;
`;
export const StyledForecastGoal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    margin-left: auto;
`;

export const StyledGoalBadge = styled.span`
    padding: 0.4375rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.palette.primaryMain};
    border-radius: 999px;
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
    margin-top: 0.375rem;
    font-size: ${({ $hasForecast }) => ($hasForecast ? 'clamp(2rem, 6vw, 2.75rem)' : '1rem')};
    font-weight: 700;
    line-height: 1.2;
    font-variant-numeric: tabular-nums;
`;

export const StyledForecastStats = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
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
    width: 100%;
    height: 0.3125rem;
    margin: 1.125rem 0 0.625rem;
    appearance: none;
    border: 0;
    border-radius: 999px;
    overflow: hidden;
    background: ${({ theme }) => theme.palette.outline};
    color: ${({ theme }) => theme.palette.primaryMain};

    &::-webkit-progress-bar {
        background: ${({ theme }) => theme.palette.outline};
    }

    &::-webkit-progress-value {
        background: ${({ theme }) => theme.palette.primaryMain};
        border-radius: 999px;
    }

    &::-moz-progress-bar {
        background: ${({ theme }) => theme.palette.primaryMain};
        border-radius: 999px;
    }
`;
