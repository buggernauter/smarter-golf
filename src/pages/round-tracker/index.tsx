import { useNavigate } from '@tanstack/react-router';
import { Home, Save, CalendarDays } from 'lucide-react';
import { useCallback, useState } from 'react';

import { StyledFooter, StyledIconButton, StyledPage } from '@/pages/round-tracker/styles';

import { useScorecard } from '@/hooks/useRound';
import { useSwipeNavigation } from '@/hooks/useRoundNavigation';

import { CardsCarousel } from '@/pages/round-tracker/components/cards-carousel';

import { SummaryDialog } from '@/pages/round-tracker/components/summary-dialog';
import { predictRound } from '@/domain/round-tracker/predicted-result';
import { Forecast } from '@/pages/round-tracker/components/forecast/forecast';
import { Spacer } from '@/components/ui/spacer';
import { readRoundHistory, saveRound, type SavedRound } from '@/domain/round-tracker/round-history';
import { HistoryDialog } from '@/pages/round-tracker/components/history-dialog';

export const RoundTrackerPage = () => {
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [oldRounds, setOldRounds] = useState<SavedRound[]>([]);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const navigate = useNavigate();
    const { holes, playStrategy, resetRound, updateStrokes, toggleCheckbox } = useScorecard();
    const { activeHoleIndex, carouselRef, nextHole, previousHole, setHoleCardRef, scrollToHole } =
        useSwipeNavigation();

    const handleSaveRound = useCallback(() => {
        try {
            saveRound(holes);
        } catch (error) {
            console.error(error);
            alert('Kunde inte spara rundan. Försök igen.');
            return;
        }

        setIsSummaryOpen(false);
        resetRound();
        void navigate({ to: '/' });
    }, [resetRound, navigate, holes]);

    const handleOpenHistory = () => {
        try {
            setOldRounds(readRoundHistory());
            setIsSummaryOpen(false);
            setIsHistoryOpen(true);
        } catch (error) {
            console.error(error);
            alert('Kunde inte läsa sparade rundor.');
        }
    };

    const handleResetRound = useCallback(() => {
        scrollToHole(0);
        resetRound();
        void navigate({ to: '/' });
    }, [navigate, resetRound, scrollToHole]);

    const handleDeleteRound = (id: string) => {
        try {
            window.localStorage.removeItem(id);
            setOldRounds((rounds) => rounds.filter((round) => round.id !== id));
        } catch (error) {
            console.error(error);
            alert('Kunde inte radera rundan.');
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
                totalHoles={holes.length}
                onOpenSummary={() => setIsSummaryOpen(true)}
            />
            <CardsCarousel
                carouselRef={carouselRef}
                holes={holes}
                onToggleCheckboxValue={toggleCheckbox}
                updateStrokes={updateStrokes}
                setHoleCardRef={setHoleCardRef}
                playStrategy={playStrategy}
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
                    rounds={oldRounds}
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
