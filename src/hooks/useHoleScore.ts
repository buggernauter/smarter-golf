import { useCallback, type Dispatch, type SetStateAction } from 'react';

import type { Hole, NumericHoleValue } from '@/types/score-card';

export const useHoleScore = (setHoles: Dispatch<SetStateAction<Hole[]>>) => {
    const updateStrokes = useCallback((index: number, field: NumericHoleValue, value: number) => {
        setHoles((holes) => holes.map((hole, i) => (i === index ? { ...hole, [field]: value } : hole)));
    }, [setHoles]);

    return { updateStrokes };
};
