import { resolveShot } from './battleship-engine';
import {
    initialGameState,
    opponentByPlayer,
    type GameAction,
    type GameState,
    type Player,
    type TargetContext,
    type TargetContextInput,
} from './types';

const getTargetContext = (
    target: Player,
    { playerShip, computerShip, playerShots, computerShots }: TargetContextInput,
): TargetContext => {
    const shooter = opponentByPlayer[target];

    return {
        shooter,
        targetShip: target === 'player' ? playerShip : computerShip,
        targetShots: shooter === 'player' ? playerShots : computerShots,
    };
};

export const gameReducer = (state: GameState, action: GameAction) => {
    if (action.type === 'START_GAME') {
        return {
            ...initialGameState,
            playerShip: action.playerShip,
            computerShip: action.computerShip,
        };
    }
    if (!state.playerShip || !state.computerShip || state.winner) {
        return state;
    }
    const { shooter, targetShip, targetShots } = getTargetContext(action.target, {
        playerShip: state.playerShip,
        computerShip: state.computerShip,
        playerShots: state.shotsByShooter.player,
        computerShots: state.shotsByShooter.computer,
    });
    if (state.turn !== shooter) {
        return state;
    }
    const shootingResult = resolveShot(targetShip, targetShots, action.position);
    if (shootingResult.isAlreadyShotAt) {
        return state;
    }
    return {
        ...state,
        shotsByShooter: {
            ...state.shotsByShooter,
            [shooter]: shootingResult.nextShots,
        },
        winner: shootingResult.isSunk ? shooter : null,
        turn: shootingResult.isSunk ? state.turn : action.target,
    };
};
