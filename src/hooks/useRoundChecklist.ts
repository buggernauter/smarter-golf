import { useCallback, type Dispatch, type SetStateAction } from 'react';

import { getChecklistStats } from '@/domain/round-tracker/round-checklist';
import type { Hole } from '@/types/score-card';

export const useRoundChecklist = (setHoles: Dispatch<SetStateAction<Hole[]>>) => {
    const toggleStrategyPoint = useCallback((holeIndex: number, point: string) => {
        setHoles((holes) => holes.map((hole, index) => {
            if (index !== holeIndex) return hole;

            const checkedPoints = hole.completedStrategyPoints ?? [];
            const isChecked = checkedPoints.includes(point);
            const completedStrategyPoints = isChecked
                ? checkedPoints.filter((checkedPoint) => checkedPoint !== point)
                : [...checkedPoints, point];

            return {
                ...hole,
                completedStrategyPoints,
                ...getChecklistStats(completedStrategyPoints),
            };
        }));
    }, [setHoles]);

    return { toggleStrategyPoint };
};
