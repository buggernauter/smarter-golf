import { holeData } from '@/api/chgk';
import type { Hole } from '@/types/score-card';

const createInitialHole = ({ holeNr, parValue, meterValue }: (typeof holeData)[number]): Hole => ({
    number: holeNr,
    par: parValue,
    stroke: 0,
    penalty: 0,
    downIn3: false,
    meter: meterValue,
    scoringZone: false,
    completedStrategyPoints: [],
});

export const createInitialHoles = (): Hole[] => holeData.map(createInitialHole);
