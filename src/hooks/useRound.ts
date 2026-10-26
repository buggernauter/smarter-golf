import { useCallback, useState } from 'react';

import { createInitialHoles } from '@/domain/round-tracker/create-round';
import { useRoundStorage } from '@/hooks/useRoundStorage';
import { hydrateActiveRound, hydrateActiveScoreGoal } from '@/storage/round-storage';
import type { Hole, ScoreGoal } from '@/types/score-card';

type SaveRound = (holes: Hole[], scoreGoal: ScoreGoal) => void;

export const useScorecard = (saveToHistory: SaveRound) => {
    const [holes, setHoles] = useState(() => hydrateActiveRound(createInitialHoles()));
    const [scoreGoal, setScoreGoal] = useState<ScoreGoal | null>(() => hydrateActiveScoreGoal());
    const { clearRound } = useRoundStorage({ holes, scoreGoal });

    const startRound = useCallback((goal: ScoreGoal) => {
        setScoreGoal(goal);
    }, []);

    const resetRound = useCallback(() => {
        clearRound();
        setHoles(createInitialHoles());
        setScoreGoal(null);
    }, [clearRound]);

    const finishRound = useCallback(() => {
        if (scoreGoal === null) {
            throw new Error('Cannot finish a round without a score goal.');
        }
        saveToHistory(holes, scoreGoal);
        resetRound();
    }, [holes, scoreGoal, saveToHistory, resetRound]);

    return { holes, setHoles, scoreGoal, startRound, resetRound, finishRound };
};
