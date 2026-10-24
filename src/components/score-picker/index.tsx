import { useRef, type ChangeEvent } from 'react';
import {
    ScoreGrid,
    ScoreButton,
    SelectedScore,
    ScoreModal,
    ScoreRow,
    DeleteButton,
    ScoreTrigger,
    StyledPlaceHolder,
    StyledValue,
    StrategyBadge,
} from '@/components/score-picker/styles';
import { Delete } from 'lucide-react';
import { fadeOut } from '@/components/ui/animations';

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
                <SelectedScore
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    aria-label="Number of strokes"
                    value={value === 0 ? '' : String(value)}
                    placeholder=""
                    onChange={handleupdateStrokes}
                    onBlur={handleCloseModal}
                />
                <ScoreGrid>
                    {scoreRows.map((row, rowIndex) => (
                        <ScoreRow key={row[0]}>
                            {row.map((score) => (
                                <ScoreButton
                                    key={score}
                                    type="button"
                                    aria-pressed={value === score}
                                    onPointerDown={(event) => event.preventDefault()}
                                    onClick={() => selectScore(score)}
                                >
                                    <span>{score}</span>
                                    <small>
                                        {score === par - 1
                                            ? 'Birdie'
                                            : score === par
                                              ? 'Par'
                                              : score === par + 1
                                                ? 'Bogey'
                                                : ''}
                                    </small>
                                </ScoreButton>
                            ))}
                            {rowIndex === scoreRows.length - 1 && (
                                <DeleteButton
                                    type="button"
                                    aria-label="Reset score"
                                    onPointerDown={(event) => event.preventDefault()}
                                    onClick={() => updateStrokes(0)}
                                >
                                    <Delete strokeWidth={1} aria-hidden="true" />
                                </DeleteButton>
                            )}
                        </ScoreRow>
                    ))}
                </ScoreGrid>
            </ScoreModal>
        </>
    );
};
