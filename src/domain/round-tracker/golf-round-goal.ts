import { scoreGoal } from '../../api/player/index.ts';
import type { Prediction } from './predicted-result.ts/predicted-result';

export const getRoundGoalStatus = ({
    actualTotalScore,
    expectedFinal,
    isComplete,
}: Pick<Prediction, 'actualTotalScore' | 'expectedFinal' | 'isComplete'>) => ({
    // Negativ budget betyder att maxscoren redan har överskridits.
    remainingBudget: scoreGoal - actualTotalScore,
    improvementNeeded: isComplete ? 0 : Math.max(0, expectedFinal - scoreGoal),
    goalAchieved: isComplete ? actualTotalScore <= scoreGoal : null,
});
