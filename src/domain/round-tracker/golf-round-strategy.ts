export type PlayStrategy = {
    heading: string;
    points: [string, string, string, string?];
};
export const ScoringZoneInstruction = 'Scoring zone';
const par3Strategy: PlayStrategy = {
    heading: 'Slag mot green',
    points: ['Sikta mot trygg sida', 'Enklaste chip-läget', '2 putt'],
};

const createPar4Strategy = (): PlayStrategy => ({
    heading: '2 slag till scoring zone',
    points: ['Bollen i spel från tee', '2:a slaget mot ~90 m', '3:e slaget på green', '2 putt'],
});

const createPar5Strategy = (): PlayStrategy => ({
    heading: '3 slag till scoring zone',
    points: ['Bollen i spel från tee', '3:e slaget mot ~90 m', '4:e slaget på green', '2 putt'],
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

export const getStrategyDelta = (score: number, par: number) => {
    const targetScore = par + 1;
    return score - targetScore;
};
