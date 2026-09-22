import { useMemo, useState } from "react";

import {
  StyledBackLink,
  StyledFinishButton,
  StyledForm,
  StyledPage,
  StyledReferenceCard,
  StyledReferenceTable,
  StyledReferenceTitle,
  StyledResetButton,
  StyledSavedRoundsLink,
  StyledScoringSystem,
} from "./styles";
import { ScoreOptions } from "../../components/result-options";
import { SummaryModal } from "../../components/summary-modal";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  createEmptyScores,
  lagPuttDistances,
  rankings,
  scoringSystem,
} from "./config";
import {
  holes,
  LAGPUT_SCORE_STORAGE_KEY,
  type Round,
  type SavedLagputRound,
  type Scores,
} from "../../types/lag-put";
import { Header } from "../../components/global-header";
import { ArrowLeft, RotateCcw } from "lucide-react";

export const Lagput = () => {
  const [scores, setScores] = useState<Scores>(createEmptyScores);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const { getJsonValue, setJsonValue } = useLocalStorage();

  const { level, selectedScores, totalScore } = useMemo(() => {
    const selectedScores = holes.flatMap((round) => scores[round]);
    let totalScore = 0;

    selectedScores.forEach((distance) => {
      const rule = scoringSystem.find((score) => score.distance === distance);

      totalScore += rule?.result ?? 0;
    });

    const level =
      rankings.find((ranking) => totalScore <= ranking.score)?.label ??
      "Above HCP 10";

    return { level, selectedScores, totalScore };
  }, [scores]);

  const updateScore = (round: Round, holeIndex: number, distance: string) => {
    const nextScores = { ...scores, [round]: [...scores[round]] };

    nextScores[round][holeIndex] = distance;
    setScores(nextScores);
  };

  const resetScores = () => {
    setScores(createEmptyScores());
    setIsSummaryOpen(false);
  };
  const handleFinishRound = () => {
    setIsSummaryOpen(true);
  };
  const handleSaveScore = () => {
    const savedRounds = getJsonValue<SavedLagputRound[]>(
      LAGPUT_SCORE_STORAGE_KEY,
      [],
    );

    setJsonValue({
      key: LAGPUT_SCORE_STORAGE_KEY,
      value: [
        {
          scores: {
            frontNine: [...scores.frontNine],
            backNine: [...scores.backNine],
          },
          totalScore,
          level,
          savedAt: new Date().toISOString(),
        },
        ...savedRounds,
      ],
    });
    setIsSummaryOpen(false);
  };

  return (
    <StyledPage>
      <Header
        title="Practice Green"
        leading={
          <StyledBackLink href="/" aria-label="Back to round">
            <ArrowLeft aria-hidden="true" />
            Round
          </StyledBackLink>
        }
      />

      {holes.map((nine) => (
        <StyledForm key={nine} $round={nine}>
          <ScoreOptions
            list={lagPuttDistances[nine]}
            title={nine === "frontNine" ? "Out" : "In"}
            scores={scores[nine]}
            updateScore={(holeIndex, distance) =>
              updateScore(nine, holeIndex, distance)
            }
          />
        </StyledForm>
      ))}
      <StyledResetButton
        type="button"
        onClick={resetScores}
        aria-label="Reset scores"
      >
        <RotateCcw aria-hidden="true" />
        Reset
      </StyledResetButton>
      <StyledFinishButton type="button" onClick={handleFinishRound}>
        Finish
      </StyledFinishButton>
      <StyledSavedRoundsLink to="/saved-rounds">Rounds</StyledSavedRoundsLink>
      <StyledScoringSystem>
        <strong>Scoring System</strong>

        {scoringSystem.map(({ distance, result }) => (
          <p key={distance}>
            {distance} {result} points
          </p>
        ))}
      </StyledScoringSystem>
      <StyledReferenceCard>
        <StyledReferenceTitle>Average Score</StyledReferenceTitle>
        <StyledReferenceTable>
          <tbody>
            {rankings.map(({ label, score }) => (
              <tr key={label}>
                <th scope="row">{label}:</th>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </StyledReferenceTable>
      </StyledReferenceCard>
      <SummaryModal
        isOpen={isSummaryOpen}
        level={level}
        selectedScores={selectedScores}
        totalScore={totalScore}
        onClose={() => setIsSummaryOpen(false)}
        saveScore={handleSaveScore}
      />
    </StyledPage>
  );
};
