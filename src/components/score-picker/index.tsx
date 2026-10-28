import { useRef, type ChangeEvent } from 'react';
import {
    ScoreModal,
    ScoreTrigger,
    StyledPlaceHolder,
    StyledValue,
    StrategyBadge,
} from '@/components/score-picker/styles';

import { fadeOut } from '@/components/ui/animations';
import { NumericKeypad } from '../numeric-keypad';

interface Props {
    value: number;
    par: number;
    strategyDelta: number;
    maxValue: number;
    updateStrokes: (score: number) => void;
    onHoleFinish: VoidFunction;
}
export const ScorePicker = ({ value, par, strategyDelta, maxValue, updateStrokes, onHoleFinish }: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const scores = Array.from({ length: maxValue }, (_, index) => index + 1);

    const scoreRows = Array.from({ length: Math.ceil(scores.length / 3) }, (_, index) =>
        scores.slice(index * 3, index * 3 + 3),
    );

    const handleupdateStrokes = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const input = e.target.value;
        if (!/^\d*$/.test(input)) {
            return;
        }
        const score = input === '' ? 0 : Number(input);
        if (Number.isSafeInteger(score)) {
            updateStrokes(score);
        }
    };
    const closeDialogAnimated = async (
        dialogRef: HTMLDialogElement | null | undefined,
        options?: KeyframeAnimationOptions,
    ): Promise<void> => {
        if (!dialogRef?.open || dialogRef.getAnimations().length > 0) {
            return;
        }
        await fadeOut(dialogRef, options);
        dialogRef.close();
    };
    const handleCloseModal = () => closeDialogAnimated(dialogRef.current);

    const selectScore = (score: number) => {
        updateStrokes(score);
        handleCloseModal();
        onHoleFinish();
    };

    return (
        <>
            <ScoreTrigger
                type="button"
                aria-haspopup="dialog"
                aria-label={`Select score, current value ${value || 'not selected'}`}
                onClick={() => dialogRef.current?.showModal()}
            >
                {value ? (
                    <StyledValue>{value}</StyledValue>
                ) : (
                    <StyledPlaceHolder>{'Strokes'}</StyledPlaceHolder>
                )}
                {value > 0 && (
                    <StrategyBadge $onStrategy={strategyDelta <= 0}>
                        {strategyDelta === 0 ? 'E' : strategyDelta > 0 ? `+${strategyDelta}` : strategyDelta}
                    </StrategyBadge>
                )}
            </ScoreTrigger>
            <ScoreModal
                ref={dialogRef}
                onCancel={(event) => {
                    event.preventDefault();
                    handleCloseModal();
                }}
            >
                <NumericKeypad
                    value={value}
                    rows={scoreRows}
                    onSelectNumber={selectScore}
                    onValueChange={handleupdateStrokes}
                    onDelete={() => updateStrokes(0)}
                    onBlur={handleCloseModal}
                    ariaLabel="Number of strokes"
                    deleteLabel="Reset score"
                    getNumberLabel={(number) =>
                        number === par - 1
                            ? 'Birdie'
                            : number === par
                              ? 'Par'
                              : number === par + 1
                                ? 'Bogey'
                                : ''
                    }
                />
            </ScoreModal>
        </>
    );
};
