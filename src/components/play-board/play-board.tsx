import styled from "styled-components";

import { cells } from "../../pages/battle-ship/config";
import {
  getPositionKey,
  type BoardPosition,
  type ShotResult,
  type ShotResults,
} from "../../domain/battle-ship/types";

const columns = "ABCDEFGHIJ".split("");

type PlayBoardProps = {
  title: string;
  shots: ShotResults;
  ship?: BoardPosition[];
  disabled: boolean;
  onClick?: (position: BoardPosition) => void;
};
export const PlayBoard = ({
  title,
  shots,
  ship = [],
  disabled,
  onClick,
}: PlayBoardProps) => {
  const shipCells = new Set(ship.map(getPositionKey));

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>

      <StyledCoordinates>
        <StyledColumnLabels aria-hidden="true">
          {columns.map((column) => (
            <span key={column}>{column}</span>
          ))}
        </StyledColumnLabels>
        <StyledRowLabels aria-hidden="true">
          {columns.map((column, index) => (
            <span key={column}>{index + 1}</span>
          ))}
        </StyledRowLabels>

        <StyledBoard role="group">
          {cells.map(({ row, col }: BoardPosition) => {
            const key = getPositionKey({ col, row });
            const shot = shots[key];
            const hasShip = shipCells.has(key);

            return (
              <StyledCell
                key={key}
                type="button"
                $hasShip={hasShip}
                disabled={disabled || Boolean(shot)}
                onClick={() => onClick?.({ col, row })}
              >
                {shot && <StyledMarker $result={shot} aria-hidden="true" />}
              </StyledCell>
            );
          })}
        </StyledBoard>
      </StyledCoordinates>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: min(90vw, 36rem);
  max-width: 100%;
`;
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  font-size: larger;
  font-weight: 700;
`;
const StyledCoordinates = styled.div`
  display: grid;
  grid-template-columns: 1.5rem minmax(0, 1fr);
  grid-template-rows: 1.5rem auto;
`;

const StyledColumnLabels = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-size: 0.75rem;
`;

const StyledRowLabels = styled.div`
  grid-row: 2;
  display: grid;
  grid-template-rows: repeat(10, minmax(0, 1fr));
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-size: 0.75rem;
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-template-rows: repeat(10, minmax(0, 1fr));
  grid-column: 2;
  grid-row: 2;
  aspect-ratio: 1;
  box-sizing: border-box;
  border-top: 1px solid #414852;
  border-left: 1px solid #414852;
  background: #414852;
`;

const StyledCell = styled.button<{ $hasShip: boolean }>`
  display: grid;
  box-sizing: border-box;
  place-items: center;
  min-width: 0;
  min-height: 0;
  padding: 0;
  border: 0;
  border-right: 1px solid #414852;
  border-bottom: 1px solid #414852;
  background: ${({ $hasShip }) => ($hasShip ? "#647568" : "#181818")};
  cursor: pointer;

  &:hover:not(:disabled) {
    background: #28313b;
  }

  &:disabled {
    cursor: default;
    opacity: 1;
  }

  &:focus-visible {
    outline: 3px solid #9cc9e6;
    outline-offset: -3px;
  }
`;

const StyledMarker = styled.span<{ $result: ShotResult }>`
  width: 35%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ $result }) => ($result === "hit" ? "#ef4444" : "#ffffff")};
`;
