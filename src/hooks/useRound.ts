import { useCallback, useEffect, useState } from 'react';

import { getPlayStrategy } from '@/domain/round-tracker/golf-round-strategy';

import type { BooleanHoleValue, Hole, NumericHoleValue } from '@/types/score-card';
import { useRoundStorage } from '@/hooks/useRoundStorage';
import { holeData } from '@/api/chgk';

const createInitialHole = ({ holeNr, parValue, meterValue }: (typeof holeData)[number]): Hole => ({
    number: holeNr,
    par: parValue,
    stroke: 0,
    penalty: 0,
    downIn3: false,
    threePutt: false,
    meter: meterValue,
    scoringGoal: getPlayStrategy(parValue).heading,
    scoringZone: false,
});

export const useScorecard = () => {
    const { clearRound, hydrateRound, syncRound } = useRoundStorage();

    const createInitialHoles = (): Hole[] => holeData.map(createInitialHole);

    const [holes, setHoles] = useState(() => hydrateRound(createInitialHoles()));

    useEffect(() => {
        syncRound(holes);
    }, [holes, syncRound]);

    const updateStrokes = useCallback((index: number, field: NumericHoleValue, value: number) => {
        setHoles((holes) => holes.map((hole, i) => (i === index ? { ...hole, [field]: value } : hole)));
    }, []);

    const toggleCheckbox = useCallback((index: number, field: BooleanHoleValue) => {
        setHoles((holes) =>
            holes.map((hole, i) => (i === index ? { ...hole, [field]: !hole[field] } : hole)),
        );
    }, []);

    const resetRound = useCallback(() => {
        clearRound();
        setHoles(createInitialHoles());
    }, [clearRound]);

    return {
        holes,
        playStrategy: getPlayStrategy,
        resetRound,
        toggleCheckbox,
        updateStrokes,
    };
};
