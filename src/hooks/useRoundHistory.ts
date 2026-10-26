import { useCallback, useState } from 'react';

import type { Hole, ScoreGoal, SavedRound } from '@/types/score-card';
import { deleteRoundFromHistory, readRoundHistory, saveRoundToHistory } from '@/storage/round-storage';

export const useRoundHistory = () => {
    const [rounds, setRounds] = useState<SavedRound[]>([]);

    const loadHistory = useCallback(() => {
        setRounds(readRoundHistory());
    }, []);

    const saveToHistory = useCallback((holes: Hole[], scoreGoal: ScoreGoal) => {
        const savedRound = saveRoundToHistory(holes, scoreGoal);
        setRounds((current) => [savedRound, ...current]);
    }, []);

    const deleteRound = useCallback((id: string) => {
        deleteRoundFromHistory(id);
        setRounds((current) => current.filter((round) => round.id !== id));
    }, []);

    return { rounds, loadHistory, saveToHistory, deleteRound };
};
