import { useCallback } from 'react';

import { STORAGE_KEY } from '@/constants';
import type { Hole, ScoreGoal } from '@/types/score-card';
import { hasPlayedHoles } from '@/domain/round-tracker/round-summary';
import {
    hydrateActiveRound,
    hydrateActiveScoreGoal,
    saveActiveRound as persistActiveRound,
    clearActiveRound,
} from '@/storage/round-storage';

export const useRoundStorage = (storageKey = STORAGE_KEY) => {
    const hydrateRound = useCallback(
        (baseRound: Hole[]) => hydrateActiveRound(baseRound, storageKey),
        [storageKey],
    );
    const hydrateScoreGoal = useCallback(() => hydrateActiveScoreGoal(storageKey), [storageKey]);
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

    return { hydrateRound, hydrateScoreGoal, saveActiveRound, clearRound, syncRound };
};
