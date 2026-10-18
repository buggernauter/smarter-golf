import { useEffect } from 'react';

import { STORAGE_KEY } from '../constants';

import { useRoundStorage } from './useRoundStorage';
import type { Hole } from '../types/score-card';
import { hasRoundData } from '../domain/round-tracker/golf-round-selectors';

type Props = {
    holes?: Hole[];
    storageKey?: string;
};

export const useRoundPersistence = ({ holes, storageKey = STORAGE_KEY }: Props = {}) => {
    const { clearRound, hydrateRound, saveRound } = useRoundStorage(storageKey);

    useEffect(() => {
        if (!holes) {
            return;
        }

        if (!hasRoundData(holes)) {
            clearRound();
            return;
        }

        saveRound(holes);
    }, [clearRound, holes, saveRound]);

    return {
        clearRound,
        hydrateRound,
        saveRound,
    };
};
