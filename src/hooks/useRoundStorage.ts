import { useCallback, useEffect } from 'react';

import { STORAGE_KEY } from '@/constants';
import type { Hole, ScoreGoal } from '@/types/score-card';
import { hasPlayedHoles } from '@/domain/round-tracker/round-summary';
import {
    saveActiveRound as persistActiveRound,
    clearActiveRound,
} from '@/storage/round-storage';

type Props = {
    holes: Hole[];
    scoreGoal: ScoreGoal | null;
    storageKey?: string;
};

export const useRoundStorage = ({ holes, scoreGoal, storageKey = STORAGE_KEY }: Props) => {
    const saveActiveRound = useCallback(
        (holes: Hole[], scoreGoal: ScoreGoal | null) => persistActiveRound(holes, scoreGoal, storageKey),
        [storageKey],
    );
    const clearRound = useCallback(() => clearActiveRound(storageKey), [storageKey]);
    const syncRound = useCallback(
        (holes: Hole[], scoreGoal: ScoreGoal | null) => {
            if (!hasPlayedHoles(holes) && scoreGoal === null) {
                clearRound();
                return;
            }
            saveActiveRound(holes, scoreGoal);
        },
        [clearRound, saveActiveRound],
    );

    useEffect(() => {
        try {
            syncRound(holes, scoreGoal);
        } catch (error) {
            console.error(error);
        }
    }, [holes, scoreGoal, syncRound]);

    return { saveActiveRound, clearRound };
};
