import { Delete } from 'lucide-react';
import { ScoreGrid, KeypadRow, NumberButton, DeleteButton, SelectedScore } from './styles';
import type { ChangeEvent } from 'react';

interface Props {
    value: number;
    rows: number[][];
    onSelectNumber: (value: number) => void;
    onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onDelete: () => void;
    onBlur?: () => void | Promise<void>;
    ariaLabel: string;
    deleteLabel?: string;
    getNumberLabel?: (value: number) => string;
}
export const NumericKeypad = ({
    rows,
    onSelectNumber,
    onDelete,
    onValueChange,
    ariaLabel,
    value,
    deleteLabel,
    getNumberLabel,
    onBlur,
}: Props) => {
    return (
        <>
            <SelectedScore
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                aria-label={ariaLabel}
                value={value === 0 ? '' : String(value)}
                placeholder=""
                onChange={onValueChange}
                onBlur={onBlur}
            />
            <ScoreGrid>
                {rows.map((row, rowIndex) => (
                    <KeypadRow key={rowIndex}>
                        {row.map((number) => {
                            const label = getNumberLabel?.(number);

                            return (
                                <NumberButton
                                    key={number}
                                    type="button"
                                    aria-pressed={value === number}
                                    onPointerDown={(event) => event.preventDefault()}
                                    onClick={() => onSelectNumber(number)}
                                >
                                    <span>{number}</span>
                                    {label && <small>{label}</small>}
                                </NumberButton>
                            );
                        })}

                        {rowIndex === rows.length - 1 && (
                            <DeleteButton
                                type="button"
                                aria-label={deleteLabel ?? 'Clear value'}
                                onPointerDown={(event) => event.preventDefault()}
                                onClick={onDelete}
                            >
                                <Delete strokeWidth={1} aria-hidden="true" />
                            </DeleteButton>
                        )}
                    </KeypadRow>
                ))}
            </ScoreGrid>
        </>
    );
};
