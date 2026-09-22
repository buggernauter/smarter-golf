import { X } from "lucide-react";

import { scoringSystem } from "../../pages/lagput/config";
import {
  StyledModalBackdrop,
  StyledSummaryClose,
  StyledSummaryHeader,
  StyledSummaryLevel,
  StyledSummaryList,
  StyledSummaryListItem,
  StyledSummaryModal,
  StyledSummaryScore,
  StyledSummaryTitle,
} from "./styles";
import { StyledFinishButton } from "../../pages/lagput/styles";

interface SummaryModalProps {
  isOpen: boolean;
  level: string;
  selectedScores: string[];
  totalScore: number;
  onClose: () => void;
  saveScore?: () => void;
}

export const SummaryModal = ({
  isOpen,
  level,
  selectedScores,
  totalScore,
  onClose,
  saveScore,
}: SummaryModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledModalBackdrop onClick={onClose}>
      <StyledSummaryModal
        role="dialog"
        aria-modal="true"
        aria-labelledby="summary-title"
        onClick={(event) => event.stopPropagation()}
      >
        <StyledSummaryHeader>
          <StyledSummaryTitle id="summary-title">
            Your Summary
          </StyledSummaryTitle>
          <StyledSummaryClose
            type="button"
            onClick={onClose}
            aria-label="Close summary"
          >
            <X aria-hidden="true" />
          </StyledSummaryClose>
        </StyledSummaryHeader>
        <StyledSummaryScore>
          <span>Total Score</span>
          <strong>{totalScore > 0 ? `+${totalScore}` : totalScore}</strong>
        </StyledSummaryScore>
        <StyledSummaryLevel>
          Level based on average score: <strong>{level}</strong>
        </StyledSummaryLevel>
        <StyledSummaryList>
          {scoringSystem.map(({ distance, label }) => {
            const count = selectedScores.filter(
              (score) => score === distance,
            ).length;
            const percentage = Math.round(
              (count / selectedScores.length) * 100,
            );

            return (
              <StyledSummaryListItem key={distance}>
                <span>{label}</span>
                <span>{count}</span>
                <span>{percentage}%</span>
              </StyledSummaryListItem>
            );
          })}
        </StyledSummaryList>
        {saveScore && (
          <StyledFinishButton type="button" onClick={saveScore}>
            Save score
          </StyledFinishButton>
        )}
      </StyledSummaryModal>
    </StyledModalBackdrop>
  );
};
