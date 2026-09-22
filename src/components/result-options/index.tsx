import { Check, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { scoringSystem } from "../../pages/lagput/config";
import {
  StyledScoreButton,
  StyledScoreMenu,
  StyledScoreMenuLayer,
  StyledScoreMenuOption,
  StyledScoreTable,
  StyledScoreTableFrame,
  StyledTotal,
} from "./styles";

interface Props {
  list: number[];
  scores: string[];
  updateScore: (holeIndex: number, distance: string) => void;
  title: string;
}

type MenuPosition = {
  top: number;
  right: number;
  width: number;
};

export const ScoreOptions = ({ list, scores, updateScore, title }: Props) => {
  const [openHoleIndex, setOpenHoleIndex] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const scoreButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  let total = 0;

  scores.forEach((distance) => {
    const score = scoringSystem.find((rule) => rule.distance === distance);

    total += score?.result ?? 0;
  });

  const toggleScoreMenu = (holeIndex: number) => {
    if (openHoleIndex === holeIndex) {
      setOpenHoleIndex(null);
      return;
    }

    const button = scoreButtonRefs.current[holeIndex];

    if (!button) {
      return;
    }

    const { bottom, right, width } = button.getBoundingClientRect();
    const menuWidth = Math.min(width, window.innerWidth - 16);

    setMenuPosition({
      top: bottom - 12,
      right: Math.max(8, window.innerWidth - right),
      width: menuWidth,
    });
    setOpenHoleIndex(holeIndex);
  };

  const closeScoreMenu = () => setOpenHoleIndex(null);

  return (
    <StyledScoreTableFrame>
      <StyledScoreTable>
        <thead>
          <tr>
            <th scope="col">Hole</th>
            <th scope="col">Length</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {list.map((length, holeIndex) => (
            <tr key={holeIndex}>
              <th scope="row">{holeIndex + 1}</th>
              <td>{length} m</td>
              <td>
                <StyledScoreButton
                  ref={(element) => {
                    scoreButtonRefs.current[holeIndex] = element;
                  }}
                  type="button"
                  aria-label={`Score for hole ${holeIndex + 1}`}
                  aria-controls={`score-menu-${title}-${holeIndex}`}
                  aria-expanded={openHoleIndex === holeIndex}
                  aria-haspopup="menu"
                  onClick={() => toggleScoreMenu(holeIndex)}
                >
                  {scores[holeIndex]}
                  <ChevronDown aria-hidden="true" />
                </StyledScoreButton>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={2} scope="row">
              {title}
            </th>
            <StyledTotal>{total}</StyledTotal>
          </tr>
        </tfoot>
      </StyledScoreTable>
      {openHoleIndex !== null &&
        menuPosition &&
        createPortal(
          <StyledScoreMenuLayer onPointerDown={closeScoreMenu}>
            <StyledScoreMenu
              id={`score-menu-${title}-${openHoleIndex}`}
              role="menu"
              aria-label={`Score choices for hole ${openHoleIndex + 1}`}
              style={menuPosition}
              onPointerDown={(event) => event.stopPropagation()}
            >
              {scoringSystem.map(({ distance }) => (
                <StyledScoreMenuOption
                  key={distance}
                  type="button"
                  role="menuitemradio"
                  aria-checked={scores[openHoleIndex] === distance}
                  onClick={() => {
                    updateScore(openHoleIndex, distance);
                    closeScoreMenu();
                  }}
                >
                  <Check aria-hidden="true" />
                  {distance}
                </StyledScoreMenuOption>
              ))}
            </StyledScoreMenu>
          </StyledScoreMenuLayer>,
          document.body,
        )}
    </StyledScoreTableFrame>
  );
};
