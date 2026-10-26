import { useEffect, useRef } from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { ScoreGoal } from '@/types/score-card';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { StyledDialog, StyledSelect } from '@/pages/round-tracker/components/round-goal-dialog/styles';

type Props = {
    scoreGoal: ScoreGoal;
    onScoreGoalChange: (scoreGoal: ScoreGoal) => void;
    onStart: () => void;
    onCancel: () => void;
};

export const RoundGoalDialog = ({ scoreGoal, onScoreGoalChange, onStart, onCancel }: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const selectRef = useRef<HTMLDetailsElement>(null);

    useOutsideClick(selectRef, () => {
        if (selectRef.current) selectRef.current.open = false;
    });

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog?.showModal();
        return () => dialog?.close();
    }, []);

    return (
        <StyledDialog
            ref={dialogRef}
            aria-labelledby="round-goal-title"
            onCancel={(event) => {
                event.preventDefault();
                onCancel();
            }}
        >
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    onStart();
                }}
            >
                <h1 id="round-goal-title">Set your round goal</h1>

                <StyledSelect
                    ref={selectRef}
                    onKeyDown={(event) => {
                        if (event.key === 'Escape' && selectRef.current?.open) {
                            event.preventDefault();
                            event.stopPropagation();
                            selectRef.current.open = false;
                            selectRef.current.querySelector('summary')?.focus();
                        }
                    }}
                >
                    <summary aria-label={`Score goal: Break ${scoreGoal}`}>
                        Break {scoreGoal}
                        <ChevronDown aria-hidden="true" size={18} />
                    </summary>
                    <ul aria-label="Score goal options">
                        {Object.values(ScoreGoal).map((goal) => (
                            <li key={goal}>
                                <button
                                    type="button"
                                    disabled={goal !== ScoreGoal.Break90}
                                    aria-pressed={scoreGoal === goal}
                                    onClick={() => {
                                        onScoreGoalChange(goal);
                                        if (selectRef.current) {
                                            selectRef.current.open = false;
                                            selectRef.current.querySelector('summary')?.focus();
                                        }
                                    }}
                                >
                                    <Check
                                        aria-hidden="true"
                                        size={16}
                                        visibility={scoreGoal === goal ? 'visible' : 'hidden'}
                                    />
                                    Break {goal}
                                    {goal !== ScoreGoal.Break90 ? ' — not available' : ''}
                                </button>
                            </li>
                        ))}
                    </ul>
                </StyledSelect>
                <button type="submit">Start round</button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        </StyledDialog>
    );
};
