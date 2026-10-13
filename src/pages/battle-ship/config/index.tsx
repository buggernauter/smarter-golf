import {
  getPositionKey,
  type BoardPositions,
  type BoardPosition,
  type ShotResults,
} from "../../../domain/battle-ship/types";

const BOARD_SIZE = 10;
const SHIP_SIZE = 3;
const randomIndex = (max: number) => Math.floor(Math.random() * max);

export const cells: BoardPositions = Array.from(
  { length: 100 },
  (_, index) => ({
    row: Math.floor(index / 10),
    col: index % 10,
  }),
);

const getRandomStartPosition = ({
  isHorizontal,
}: {
  isHorizontal: boolean;
}): BoardPosition => {
  return isHorizontal
    ? {
        row: randomIndex(BOARD_SIZE),
        col: randomIndex(BOARD_SIZE - SHIP_SIZE + 1),
      }
    : {
        row: randomIndex(BOARD_SIZE - SHIP_SIZE + 1),
        col: randomIndex(BOARD_SIZE),
      };
};

export const createRandomShip = (
  occupiedPositions: BoardPositions = [],
): BoardPositions => {
  let ship: BoardPositions;

  do {
    const isHorizontal = Math.random() > 0.5;
    const startPosition = getRandomStartPosition({ isHorizontal });

    ship = Array.from({ length: SHIP_SIZE }, (_, index) => ({
      row: isHorizontal ? startPosition.row : startPosition.row + index,
      col: isHorizontal ? startPosition.col + index : startPosition.col,
    }));
  } while (
    ship.some((position) =>
      occupiedPositions.some(
        (occupied) =>
          occupied.row === position.row && occupied.col === position.col,
      ),
    )
  );

  return ship;
};

// Väljer en slumpmässig ruta som datorn inte redan har skjutit på.
export const computerLevelEasy = (shots: ShotResults) => {
  // Den valda rutan. Är undefined om inga rutor är tillgängliga.
  let target: BoardPosition | undefined;

  // Räknar hur många oskjutna rutor vi har hittat.
  let availableCount = 0;

  // Gå igenom varje ruta på spelbrädet.
  for (const position of cells) {
    // Hoppa över rutan om datorn redan har skjutit där.
    const alreadyShotAt = shots[getPositionKey(position)];
    if (alreadyShotAt) {
      continue;
    }

    // Den här rutan är ledig, så öka antalet möjliga mål.
    availableCount += 1;

    // Ersätt det tidigare valet med sannolikheten 1 / antal lediga rutor.
    // Det gör att varje ledig ruta har samma chans att väljas.
    if (Math.floor(Math.random() * availableCount) === 0) {
      // Spara den aktuella lediga rutan som datorns mål.
      target = position;
    }
  }

  // Returnera den slumpmässigt valda rutan, eller undefined om inga finns kvar.
  return target;
};
export const computerLevelMedium = (shots: ShotResults) => {
  // Samla alla rutor som datorn tidigare har träffat.
  const hitPositions = cells.filter(
    // Behåll bara positioner vars skottresultat är en träff.
    (position) => shots[getPositionKey(position)] === "hit",
  );

  // Hitta alla lediga rutor som ligger inom Mediums felmarginal.
  const candidateCells = cells.filter(
    // Kontrollera varje position på brädet.
    (position) => {
      // Kontrollera om datorn redan har skjutit på den här rutan.
      const isAlreadyShot = shots[getPositionKey(position)];

      // Kontrollera om rutan är högst två rader och två kolumner från en träff.
      const isWithinMargin = hitPositions.some(
        // Jämför den aktuella rutan med en tidigare träff.
        (hitPosition) =>
          // Kontrollera avståndet mellan raderna.
          Math.abs(position.row - hitPosition.row) <= 2 &&
          // Kontrollera avståndet mellan kolumnerna.
          Math.abs(position.col - hitPosition.col) <= 2,
      );

      // Behåll bara oskjutna rutor som ligger inom felmarginalen.
      return !isAlreadyShot && isWithinMargin;
    },
  );

  // Återgå till Easy om Medium inte hittar några giltiga rutor.
  if (!candidateCells.length) {
    // Låt Easy välja en slumpmässig ledig ruta på hela brädet.
    return computerLevelEasy(shots);
  }

  // Välj ett slumpmässigt index bland Mediums möjliga rutor.
  const randomIndex = Math.floor(Math.random() * candidateCells.length);

  // Returnera rutan på det slumpmässigt valda indexet.
  return candidateCells[randomIndex];
};

export const computerLevelHard = (
  shots: ShotResults,
): BoardPosition | undefined => {
  const hits = cells.filter(
    (position) => shots[getPositionKey(position)] === "hit",
  );
  const isAvailable = ({ row, col }: BoardPosition): boolean => {
    // row is within board boundaries.
    if (row < 0 || row >= BOARD_SIZE) {
      return false;
    }

    // column is within board boundaries.
    if (col < 0 || col >= BOARD_SIZE) {
      return false;
    }

    // Create the unique key used to look up this board position.
    const positionKey = getPositionKey({ row, col });

    const notShootedAtAlready = !shots[positionKey];

    return notShootedAtAlready;
  };
  const pickRandom = (positions: BoardPosition[]) =>
    positions[randomIndex(positions.length)];

  // Leta efter två intilliggande träffar och fortsätt i samma riktning.
  const extensions = new Map<string, BoardPosition>();

  for (const hit of hits) {
    for (const direction of [
      { row: 0, col: 1 },
      { row: 1, col: 0 },
    ]) {
      const next = {
        row: hit.row + direction.row,
        col: hit.col + direction.col,
      };
      if (shots[getPositionKey(next)] !== "hit") {
        continue;
      }
      let end = next;
      while (
        shots[
          getPositionKey({
            row: end.row + direction.row,
            col: end.col + direction.col,
          })
        ] === "hit"
      ) {
        end = { row: end.row + direction.row, col: end.col + direction.col };
      }
      const before = {
        row: hit.row - direction.row,
        col: hit.col - direction.col,
      };

      const after = {
        row: end.row + direction.row,
        col: end.col + direction.col,
      };
      for (const position of [before, after]) {
        if (isAvailable(position)) {
          extensions.set(getPositionKey(position), position);
        }
      }
    }
  }
  if (extensions.size > 0) {
    return pickRandom([...extensions.values()]);
  }
  // Med en ensam träff: prova en oskjuten granne.
  const neighbors = cells.filter(
    (position) =>
      isAvailable(position) &&
      hits.some(
        (hit) =>
          Math.abs(position.row - hit.row) +
            Math.abs(position.col - hit.col) ===
          1,
      ),
  );
  return neighbors.length > 0
    ? pickRandom(neighbors)
    : computerLevelEasy(shots);
};
