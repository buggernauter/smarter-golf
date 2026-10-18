import { Prognos } from '../../../../components/ui/prognos';

import {
    StyledForecastCard,
    StyledForecastConfidence,
    StyledForecastResult,
    StyledForecastScore,
    StyledForecastLabel,
    StyledForecastPercent,
} from './styles';
interface Props {
    titleLeft: string;
    titleRight: string;
    value?: number;
    confidence?: number;
    isReady: boolean;
}
export const Forecast = ({ titleLeft, titleRight, value, confidence, isReady }: Props) => {
    return (
        <StyledForecastCard>
            <StyledForecastResult>
                <StyledForecastLabel>{titleLeft} </StyledForecastLabel>
                <StyledForecastScore>{isReady ? `${value} slag` : `Spela vidare`}</StyledForecastScore>
            </StyledForecastResult>
            <StyledForecastConfidence>
                <StyledForecastLabel>{titleRight}</StyledForecastLabel>
                <StyledForecastPercent>
                    {confidence}
                    <span> %</span>
                </StyledForecastPercent>
                <Prognos value={confidence ?? 0} />
            </StyledForecastConfidence>
        </StyledForecastCard>
    );
};
