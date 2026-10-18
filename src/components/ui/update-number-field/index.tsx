import { Minus, Plus } from 'lucide-react';
import {
    StyledField,
    StyledFieldLabel,
    StyledStepperButton,
    StyledStepperControl,
    StyledStepperValue,
} from './styles';
interface Props {
    title: string;
    value: number;
    updateValue: (value: number) => void;
    minValue: number;
    maxValue: number;
}
export const NumberStepper = ({ title, value, updateValue, minValue, maxValue }: Props) => {
    return (
        <StyledField>
            <StyledFieldLabel>{title}</StyledFieldLabel>
            <StyledStepperControl>
                <StyledStepperButton
                    type="button"
                    aria-label="Minska"
                    disabled={value <= minValue}
                    onClick={() => updateValue(value - 1)}
                >
                    <Minus aria-hidden="true" />
                </StyledStepperButton>
                <StyledStepperValue>
                    <strong>{value || '-'}</strong>
                </StyledStepperValue>
                <StyledStepperButton
                    type="button"
                    aria-label="Öka"
                    disabled={value >= maxValue}
                    onClick={() => updateValue(value + 1)}
                >
                    <Plus aria-hidden="true" />
                </StyledStepperButton>
            </StyledStepperControl>
        </StyledField>
    );
};
