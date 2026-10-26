import { useEffect, useRef } from 'react';

import { ScoreGoal } from '@/types/score-card';
import { StyledDialog } from '@/pages/round-tracker/components/round-goal-dialog/styles';

type Props = {
    scoreGoal: ScoreGoal;
    onScoreGoalChange: (scoreGoal: ScoreGoal) => void;
    onStart: () => void;
    onCancel: () => void;
};

export const RoundGoalDialog = ({ scoreGoal, onScoreGoalChange, onStart, onCancel }: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog?.showModal();
        return () => dialog?.close();
    }, []);

    return (
        <StyledDialog
            ref={dialogRef}
            aria-labelledby="round-goal-title"
            aria-describedby="round-goal-description"
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
                <p id="round-goal-description">What score do you want to break?</p>
                <label htmlFor="round-score-goal">Score goal</label>
                <select
                    id="round-score-goal"
                    value={scoreGoal}
                    onChange={(event) => {
                        if (event.target.value === String(ScoreGoal.Break90)) {
                            onScoreGoalChange(ScoreGoal.Break90);
                        }
                    }}
                >
                    <option value={ScoreGoal.Break100} disabled>
                        Break 100 — not available
                    </option>
                    <option value={ScoreGoal.Break90}>Break 90</option>
                    <option value={ScoreGoal.Break80} disabled>
                        Break 80 — not available
                    </option>
                </select>
                <button type="submit">Start round</button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        </StyledDialog>
    );
};
