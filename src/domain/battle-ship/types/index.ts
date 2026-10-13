export type Player = "player" | "computer";
export type BoardPosition = { row: number; col: number };
export type BoardPositions = BoardPosition[];
export type ShotResult = "hit" | "miss";
export type ShotResults = Partial<Record<string, ShotResult>>;

export const getPositionKey = ({ row, col }: BoardPosition): string =>
  `${row}-${col}`;

export const opponentByPlayer: Record<Player, Player> = {
  player: "computer",
  computer: "player",
};

export type GameState = {
  playerShip: BoardPositions | null;
  computerShip: BoardPositions | null;
  shotsByShooter: Record<Player, ShotResults>;
  turn: Player;
  winner: Player | null;
};

export const initialGameState: GameState = {
  playerShip: null,
  computerShip: null,
  shotsByShooter: { player: {}, computer: {} },
  turn: "player",
  winner: null,
};

export type GameAction =
  | {
      type: "START_GAME";
      playerShip: BoardPositions;
      computerShip: BoardPositions;
    }
  | { type: "FIRE_SHOT"; target: Player; position: BoardPosition };

export type TargetContextInput = {
  playerShip: BoardPositions;
  computerShip: BoardPositions;
  playerShots: ShotResults;
  computerShots: ShotResults;
};

export type TargetContext = {
  shooter: Player;
  targetShip: BoardPositions;
  targetShots: ShotResults;
};
