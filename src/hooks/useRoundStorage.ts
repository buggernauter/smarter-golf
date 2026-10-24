import { useCallback } from 'react';

import { STORAGE_KEY } from '@/constants';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Hole } from '@/types/score-card';
import { hasRoundData } from '@/domain/round-tracker/golf-round-selectors';

export const useRoundStorage = (storageKey = STORAGE_KEY) => {
    const { getValue, removeValue, setValue } = useLocalStorage();

    const hydrateRound = useCallback(
        (baseRound: Hole[]) => {
            try {
                const storedValue = getValue(storageKey);

                if (!storedValue) {
                    return baseRound;
                }

                return mergeStoredRound(baseRound, JSON.parse(storedValue));
            } catch (error) {
                console.error(error);
                return baseRound;
            }
        },
        [getValue, storageKey],
    );

    const saveRound = useCallback(
        (round: Hole[]) => {
            setValue({
                key: storageKey,
                value: JSON.stringify(round),
            });
        },
        [setValue, storageKey],
    );

    const clearRound = useCallback(() => {
        removeValue(storageKey);
    }, [removeValue, storageKey]);

    const syncRound = useCallback(
        (round: Hole[]) => {
            if (!hasRoundData(round)) {
                clearRound();
                return;
            }

            saveRound(round);
        },
        [clearRound, saveRound],
    );

    return {
        clearRound,
        hydrateRound,
        saveRound,
        syncRound,
    };
};

const mergeStoredRound = (baseRound: Hole[], storedValue: unknown) => {
    if (!Array.isArray(storedValue)) {
        return baseRound;
    }

    return baseRound.map((hole, index) => {
        const storedHole = storedValue[index];

        if (!storedHole || typeof storedHole !== 'object') {
            return hole;
        }

        return {
            ...hole,
            stroke: typeof storedHole.stroke === 'number' ? storedHole.stroke : hole.stroke,
            penalty: typeof storedHole.penalty === 'number' ? storedHole.penalty : hole.penalty,
            downIn3: typeof storedHole.downIn3 === 'boolean' ? storedHole.downIn3 : hole.downIn3,
            threePutt: typeof storedHole.threePutt === 'boolean' ? storedHole.threePutt : hole.threePutt,
            scoringZone:
                typeof storedHole.scoringZone === 'boolean' ? storedHole.scoringZone : hole.scoringZone,
        };
    });
};
