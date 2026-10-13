import styled from "styled-components";

import {
  computerLevelEasy,
  createRandomShip,
  computerLevelHard,
  computerLevelMedium,
} from "./config";
import { useCallback, useEffect, useReducer, useState } from "react";
import { Button } from "../../components/ui/button";

import { gameReducer } from "../../domain/battle-ship/game-reducer";
import type { GameLevel } from "../../types/battle-ship";
import { PlayBoard } from "../../components/play-board/play-board";
import {
  initialGameState,
  type BoardPosition,
  type Player,
} from "../../domain/battle-ship/types";

export const BattleshipPage = () => {
  const [game, dispatch] = useReducer(gameReducer, initialGameState);

  const [level, setLevel] = useState<GameLevel>();

  const handleShot = useCallback((position: BoardPosition, target: Player) => {
    dispatch({ type: "FIRE_SHOT", position, target });
  }, []);

  const handlePlayerShot = (position: BoardPosition) => {
    handleShot(position, "computer");
  };

  const handleComputerShot = useCallback(() => {
    const strategies = {
      easy: computerLevelEasy,
      medium: computerLevelMedium,
      hard: computerLevelHard,
    };
    if (!level) {
      return;
    }
    const randomComputerPosition = strategies[level](
      game.shotsByShooter.computer,
    );
    if (!randomComputerPosition) {
      return;
    }
    handleShot(randomComputerPosition, "player");
  }, [game.shotsByShooter.computer, handleShot, level]);

  useEffect(() => {
    if (!game.playerShip || game.turn !== "computer" || game.winner) {
      return;
    }

    const timer = window.setTimeout(handleComputerShot, 500);

    return () => window.clearTimeout(timer);
  }, [game.playerShip, game.turn, game.winner, handleComputerShot]);

  const handleStartGame = () => {
    const playerShip = createRandomShip();
    const computerShip = createRandomShip(playerShip);
    dispatch({
      type: "START_GAME",
      playerShip,
      computerShip,
    });
  };

  return (
    <StyledContainer>
      <StyleButtonWrapper>
        <Button
          backgroundColor={level === "easy" ? "ButtonFace" : undefined}
          onClick={() => setLevel("easy")}
        >
          {"Easy"}
        </Button>
        <Button
          backgroundColor={level === "medium" ? "ButtonFace" : undefined}
          onClick={() => setLevel("medium")}
        >
          {"Medium"}
        </Button>
        <Button
          backgroundColor={level === "hard" ? "ButtonFace" : undefined}
          onClick={() => setLevel("hard")}
        >
          {"Hard"}
        </Button>
      </StyleButtonWrapper>
      <Button disabled={Boolean(!level)} onClick={handleStartGame}>
        {game.playerShip ? "Starta om" : "Starta spel"}
      </Button>

      {game.playerShip && (
        <StyledStatus aria-live="polite">
          {game.winner === "player"
            ? "Du sänkte datorns skepp!"
            : game.winner === "computer"
              ? "Datorn sänkte ditt skepp."
              : game.turn === "player"
                ? "Din tur: välj en ruta på datorns bräde."
                : "Datorn väljer en ruta..."}
        </StyledStatus>
      )}

      <StyledBoardWrapper>
        {game.playerShip && game.computerShip && (
          <>
            <StyledLegend>
              <span>🔴 Träff · ⚪ Miss</span>
            </StyledLegend>
            <PlayBoard
              title="Player"
              ship={game.playerShip}
              shots={game.shotsByShooter.computer}
              disabled
              onClick={handlePlayerShot}
            />
            <PlayBoard
              title="Computer"
              shots={game.shotsByShooter.player}
              disabled={game.turn !== "player" || Boolean(game.winner)}
              onClick={handlePlayerShot}
            />
          </>
        )}
      </StyledBoardWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  min-height: 100dvh;
  justify-content: center;
  align-items: center;
`;
const StyleButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const StyledBoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;

const StyledStatus = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-weight: 700;
`;
const StyledLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-size: 0.875rem;
`;
