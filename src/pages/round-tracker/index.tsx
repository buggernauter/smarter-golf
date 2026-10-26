import { useRoundHistory } from '@/hooks/useRoundHistory';
import { useHoleScore } from '@/hooks/useHoleScore';
import { useNavigate } from '@tanstack/react-router';
import { Home, Save, CalendarDays } from 'lucide-react';
import { useCallback, useState } from 'react';

import { StyledFooter, StyledIconButton, StyledPage } from '@/pages/round-tracker/styles';

import { useScorecard } from '@/hooks/useRound';
import { useSwipeNavigation } from '@/hooks/useRoundNavigation';

import { CardsCarousel } from '@/pages/round-tracker/components/cards-carousel';

import { SummaryDialog } from '@/pages/round-tracker/components/summary-dialog';
import { predictRound } from '@/domain/round-tracker/round-prediction';
import { Forecast } from '@/pages/round-tracker/components/forecast/forecast';
import { Spacer } from '@/components/ui/spacer';
import { HistoryDialog } from '@/pages/round-tracker/components/history-dialog';
import { RoundGoalDialog } from '@/pages/round-tracker/components/round-goal-dialog';
import { ScoreGoal } from '@/types/score-card';
import { useRoundChecklist } from '@/hooks/useRoundChecklist';

export const RoundTrackerPage = () => {
    const navigate = useNavigate();
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [selectedRoundGoal, setSelectedRoundGoal] = useState<ScoreGoal>(ScoreGoal.Break90);
    const { rounds, loadHistory, saveToHistory, deleteRound } = useRoundHistory();
    const {
        holes,
        scoreGoal,
        startRound,
        resetRound,
        finishRound,
        setHoles,
    } = useScorecard(saveToHistory);
    const { updateStrokes } = useHoleScore(setHoles);
    const { toggleStrategyPoint } = useRoundChecklist(setHoles);
    const { activeHoleIndex, carouselRef, nextHole, previousHole, setHoleCardRef, scrollToHole } =
        useSwipeNavigation();

    const handleSaveRound = useCallback(() => {
        if (scoreGoal === null) return;

        try {
            finishRound();
        } catch (error) {
            console.error(error);
            alert('Try again later.');
            return;
        }

        setIsSummaryOpen(false);
        void navigate({ to: '/' });
    }, [finishRound, navigate, scoreGoal]);

    const handleOpenHistory = () => {
        try {
            loadHistory();
            setIsSummaryOpen(false);
            setIsHistoryOpen(true);
        } catch (error) {
            console.error(error);
            alert('Try again later.');
        }
    };

    const handleResetRound = useCallback(() => {
        scrollToHole(0);
        resetRound();
        void navigate({ to: '/' });
    }, [navigate, resetRound, scrollToHole]);

    const handleDeleteRound = (id: string) => {
        try {
            deleteRound(id);
        } catch (error) {
            console.error(error);
            alert('Try again later');
        }
    };
    const handleHoleFinished = () => {
        if (activeHoleIndex === holes.length - 1) {
            setIsSummaryOpen(true);
            return;
        }
        scrollToHole(activeHoleIndex + 1);
    };
    const prediction = predictRound({ holes });

    if (scoreGoal === null) {
        return (
            <StyledPage>
                <RoundGoalDialog
                    scoreGoal={selectedRoundGoal}
                    onScoreGoalChange={setSelectedRoundGoal}
                    onStart={() => startRound(selectedRoundGoal)}
                    onCancel={() => void navigate({ to: '/' })}
                />
            </StyledPage>
        );
    }

    return (
        <StyledPage>
            <StyledIconButton
                type="button"
                aria-label="Go to home page"
                onClick={() => void navigate({ to: '/' })}
            >
                <Home aria-hidden="true" />
            </StyledIconButton>
            <Spacer size={8} />

            <Forecast
                prediction={prediction}
                scoreGoal={scoreGoal}
                totalHoles={holes.length}
                onOpenSummary={() => setIsSummaryOpen(true)}
            />
            <CardsCarousel
                carouselRef={carouselRef}
                holes={holes}
                onToggleStrategyPoint={toggleStrategyPoint}
                updateStrokes={updateStrokes}
                setHoleCardRef={setHoleCardRef}
                isOnFirstHole={activeHoleIndex === 0}
                isOnLastHole={activeHoleIndex === holes.length - 1}
                onHoleFinish={handleHoleFinished}
                onNextHole={nextHole}
                onPreviousHole={previousHole}
            />

            <SummaryDialog
                holes={holes}
                isOpen={isSummaryOpen}
                onClose={() => setIsSummaryOpen(false)}
                onSaveRound={handleSaveRound}
                onResetRound={handleResetRound}
            />
            {isHistoryOpen && (
                <HistoryDialog
                    rounds={rounds}
                    onDeleteRound={handleDeleteRound}
                    onClose={() => setIsHistoryOpen(false)}
                />
            )}
            <StyledFooter>
                <StyledIconButton type="button" aria-label="Open round history" onClick={handleOpenHistory}>
                    <CalendarDays aria-hidden="true" />
                </StyledIconButton>
                <StyledIconButton type="button" aria-label="Save and finish round" onClick={handleSaveRound}>
                    <Save aria-hidden="true" />
                </StyledIconButton>
            </StyledFooter>
        </StyledPage>
    );
};
