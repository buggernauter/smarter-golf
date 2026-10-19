import styled from 'styled-components';
import { StyledCardSurface } from '../../styles';

export const StyledForecastResult = styled.div`
    flex: 1.3 1 0;
    min-width: 0;
    padding: 1rem 0.875rem;
`;

export const StyledForecastGoal = styled(StyledForecastResult)`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.palette.surfaceSecondary};
`;
export const StyledForecastLabel = styled.div`
    color: ${({ theme }) => theme.palette.textSecondary};
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.02em;
`;

export const StyledForecastScore = styled.div`
    margin-top: 0.25rem;
    font-size: large;
    font-weight: 700;

    span {
        color: ${({ theme }) => theme.palette.textDisabled};
        font-size: 0.95rem;
        font-weight: 400;
    }
`;

export const StyledForecastText = styled.p`
    margin: 0.5rem 0 0;
    color: ${({ theme }) => theme.palette.textSecondary};
    font-size: 0.85rem;
    line-height: 1.5;
`;
export const StyledForecastCard = styled.div`
    ${StyledCardSurface};
    display: flex;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 1.75rem;
    overflow: hidden;
    color: ${({ theme }) => theme.palette.textPrimary};

    @media (max-width: 30rem) {
        flex-direction: column;
    }
`;
