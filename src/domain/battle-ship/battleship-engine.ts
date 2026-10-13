import {
    getPositionKey,
    type BoardPosition,
    type BoardPositions,
    type ShotResult,
    type ShotResults,
} from './types';

type ShotResolution =
    | { isAlreadyShotAt: true }
    | { isAlreadyShotAt: false; result: ShotResult; nextShots: ShotResults; isSunk: boolean };

export const resolveShot = (
    ship: BoardPositions,
    shots: ShotResults,
    position: BoardPosition,
): ShotResolution => {
    const positionKey = getPositionKey(position);

    if (shots[positionKey]) {
        return { isAlreadyShotAt: true };
    }
    const result: ShotResult = ship.some(
        (shipPosition) => shipPosition.row === position.row && shipPosition.col === position.col,
    )
        ? 'hit'
        : 'miss';
    const nextShots = {
        ...shots,
        [positionKey]: result,
    };

    const isSunk = ship.every((shipPosition) => nextShots[getPositionKey(shipPosition)] === 'hit');

    return {
        isAlreadyShotAt: false,
        result,
        nextShots,
        isSunk,
    };
};
