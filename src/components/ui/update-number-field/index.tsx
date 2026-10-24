import { Minus, Plus } from 'lucide-react';
import {
    StyledField,
    StyledFieldLabel,
    StyledStepperButton,
    StyledStepperControl,
    StyledStepperValue,
} from '@/components/ui/update-number-field/styles';
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
                    aria-label="Decrease"
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
                    aria-label="Increase"
                    disabled={value >= maxValue}
                    onClick={() => updateValue(value + 1)}
                >
                    <Plus aria-hidden="true" />
                </StyledStepperButton>
            </StyledStepperControl>
        </StyledField>
    );
};
