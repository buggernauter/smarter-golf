export type PlayStrategy = {
    heading: string;
    points: [string, string, string?, string?, string?];
};
export const ScoringZoneInstruction = 'Scoring zone';
const par3Strategy: PlayStrategy = {
    heading: 'Scoring zone in 1 shot',
    points: ['Tee shot: secure side of green ', '2 putts'],
};
const createPar4Strategy = (): PlayStrategy => ({
    heading: 'Scoring zone in 2 shots',
    points: [
        'Tee shot: keep the ball in play',
        '2nd shot: get within 90 m of the green',
        '3rd shot: middle of the green',
        '2 putts',
    ],
});

const createPar5Strategy = (): PlayStrategy => ({
    heading: 'Scoring zone in 3 shots',
    points: [
        'Tee shot: keep the ball in play',
        '2nd shot: advance towards the scoring zone',
        '3rd shot: get within 90 m of the green',
        '4th shot: aim for the middle of the green',
        '2 putts',
    ],
});

export const getPlayStrategy = (parValue: number): PlayStrategy => {
    if (parValue === 3) {
        return par3Strategy;
    }

    if (parValue === 4) {
        return createPar4Strategy();
    }

    return createPar5Strategy();
};

export const getStrategyDelta = (stroke: number, par: number) => {
    const targetScore = par + 1;
    return stroke - targetScore;
};
