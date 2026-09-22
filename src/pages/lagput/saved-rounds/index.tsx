import { ArrowLeft, Trash2 } from "lucide-react";
import { useState } from "react";

import { SummaryModal } from "../../../components/summary-modal";
import { Header } from "../../../components/global-header";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

import {
  StyledBackLink,
  StyledDeleteButton,
  StyledEmptyState,
  StyledRoundItem,
  StyledRoundButton,
  StyledRoundList,
  StyledSavedRoundsPage,
} from "./styles";
import { formatSavedAt } from "../../../lib/helper";
import {
  type SavedLagputRound,
  LAGPUT_SCORE_STORAGE_KEY,
  holes,
} from "../../../types/lag-put";

export const SavedRounds = () => {
  const { getJsonValue, removeValue, setJsonValue } = useLocalStorage();
  const [selectedRound, setSelectedRound] = useState<SavedLagputRound | null>(
    null,
  );
  const [savedRounds, setSavedRounds] = useState(() =>
    getJsonValue<SavedLagputRound[]>(LAGPUT_SCORE_STORAGE_KEY, []),
  );
  const selectedScores = selectedRound
    ? holes.flatMap((round) => selectedRound.scores[round])
    : [];

  const removeRound = (savedAt: string) => {
    const remainingRounds = savedRounds.filter(
      (round) => round.savedAt !== savedAt,
    );

    setSavedRounds(remainingRounds);

    if (remainingRounds.length) {
      setJsonValue({
        key: LAGPUT_SCORE_STORAGE_KEY,
        value: remainingRounds,
      });
    } else {
      removeValue(LAGPUT_SCORE_STORAGE_KEY);
    }

    if (selectedRound?.savedAt === savedAt) {
      setSelectedRound(null);
    }
  };

  return (
    <StyledSavedRoundsPage>
      <Header
        title="Saved rounds"
        leading={
          <StyledBackLink to="/lagput" aria-label="Back to practice green">
            <ArrowLeft aria-hidden="true" />
          </StyledBackLink>
        }
      />
      {savedRounds.length ? (
        <StyledRoundList>
          {savedRounds.map((round) => (
            <StyledRoundItem key={round.savedAt}>
              <StyledRoundButton
                type="button"
                onClick={() => setSelectedRound(round)}
              >
                <span>{formatSavedAt(round.savedAt)}</span>
                <strong>
                  {round.totalScore > 0
                    ? `+${round.totalScore}`
                    : round.totalScore}
                </strong>
                <span>{round.level}</span>
              </StyledRoundButton>
              <StyledDeleteButton
                type="button"
                onClick={() => removeRound(round.savedAt)}
                aria-label={`Remove saved round from ${formatSavedAt(round.savedAt)}`}
              >
                <Trash2 aria-hidden="true" />
              </StyledDeleteButton>
            </StyledRoundItem>
          ))}
        </StyledRoundList>
      ) : (
        <StyledEmptyState>No saved rounds yet.</StyledEmptyState>
      )}
      <SummaryModal
        isOpen={Boolean(selectedRound)}
        level={selectedRound?.level ?? ""}
        selectedScores={selectedScores}
        totalScore={selectedRound?.totalScore ?? 0}
        onClose={() => setSelectedRound(null)}
      />
    </StyledSavedRoundsPage>
  );
};
