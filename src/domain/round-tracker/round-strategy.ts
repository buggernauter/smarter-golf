import type { PlayStrategy } from '@/types/score-card';

const par3Strategy: PlayStrategy = {
    heading: 'Scoring zone in 1 shot',
    points: ['Tee shot: secure side of green ', '2 putts'],
};
const par4Strategy: PlayStrategy = {
    heading: 'Scoring zone in 2 shots',
    points: [
        'Tee shot: keep the ball in play',
        '2nd shot: get within 90 m of the green',
        '3rd shot: middle of the green',
        '2 putts',
    ],
};

const par5Strategy: PlayStrategy = {
    heading: 'Scoring zone in 3 shots',
    points: [
        'Tee shot: keep the ball in play',
        '2nd shot: advance towards the scoring zone',
        '3rd shot: get within 90 m of the green',
        '4th shot: aim for the middle of the green',
        '2 putts',
    ],
};

export const getPlayStrategy = (parValue: number): PlayStrategy => {
    switch (parValue) {
        case 3:
            return par3Strategy;
        case 4:
            return par4Strategy;
        case 5:
            return par5Strategy;
        default:
            throw new RangeError('Play strategy requires a par of 3, 4 or 5.');
    }
};

export const getStrategyDelta = (stroke: number, par: number) => {
    const targetScore = par + 1;
    return stroke - targetScore;
};
