import { useCallback, useEffect, useState } from 'react';

import { getPlayStrategy } from '@/domain/round-tracker/round-strategy';

import type { BooleanHoleValue, Hole, NumericHoleValue, ScoreGoal } from '@/types/score-card';
import { useRoundStorage } from '@/hooks/useRoundStorage';
import { useRoundHistory } from '@/hooks/useRoundHistory';
import { holeData } from '@/api/chgk';

const createInitialHole = ({ holeNr, parValue, meterValue }: (typeof holeData)[number]): Hole => ({
    number: holeNr,
    par: parValue,
    stroke: 0,
    penalty: 0,
    downIn3: false,
    threePutt: false,
    meter: meterValue,
    scoringZone: false,
});

export const useScorecard = () => {
    const { clearRound, hydrateRound, hydrateScoreGoal, syncRound } = useRoundStorage();
    const { rounds, loadHistory, saveToHistory, deleteRound } = useRoundHistory();

    const createInitialHoles = (): Hole[] => holeData.map(createInitialHole);

    const [holes, setHoles] = useState(() => hydrateRound(createInitialHoles()));
    const [scoreGoal, setScoreGoal] = useState<ScoreGoal | null>(hydrateScoreGoal);

    useEffect(() => {
        try {
            syncRound(holes, scoreGoal);
        } catch (error) {
            console.error(error);
        }
    }, [holes, scoreGoal, syncRound]);

    const startRound = useCallback((goal: ScoreGoal) => {
        setScoreGoal(goal);
    }, []);

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
        setScoreGoal(null);
    }, [clearRound]);

    const finishRound = useCallback(() => {
        if (scoreGoal === null) {
            throw new Error('Cannot finish a round without a score goal.');
        }
        saveToHistory(holes, scoreGoal);
        resetRound();
    }, [holes, scoreGoal, saveToHistory, resetRound]);

    return {
        holes,
        scoreGoal,
        startRound,
        playStrategy: getPlayStrategy,
        resetRound,
        finishRound,
        rounds,
        loadHistory,
        deleteRound,
        toggleCheckbox,
        updateStrokes,
    };
};
