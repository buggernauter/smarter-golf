import { useNavigate } from '@tanstack/react-router';
import { ClipboardList, Home } from 'lucide-react';
import { useCallback, useState } from 'react';

import {
    StyledActionBar,
    StyledIconButton,
    StyledPage,
    StyledPagination,
    StyledPaginationDot,
    StyledResetIcon,
} from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useScorecard } from '../../hooks/useRound';
import { useSwipeNavigation } from '../../hooks/useRoundNavigation';
import { getPlayedHoleSummary } from '../../domain/round-tracker/golf-round-selectors';
import { CardsCarousel } from './components/cards-carousel';

import { SummarySheet } from './components/summary-sheet';
import { predictRound } from '../../domain/round-tracker/predicted-result.ts/predicted-result';
import { Forecast } from './components/forecast/forecast';
import { getRoundGoalStatus } from '../../domain/round-tracker/golf-round-goal';
import { hcp } from '../../api/player';

export const RoundTrackerPage = () => {
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const navigate = useNavigate();
    const { setValue } = useLocalStorage();
    const { holes, playStrategy, resetRound, updateNumericField, toggleCheckbox } = useScorecard();
    const { activeHoleIndex, carouselRef, nextHole, previousHole, setHoleCardRef, scrollToHole } =
        useSwipeNavigation();

    const handleSaveRound = useCallback(() => {
        const scoreSummary = getPlayedHoleSummary(holes);
        const playedHoleCount = scoreSummary.playedHoles.length;
        if (playedHoleCount !== 9 && playedHoleCount !== 18) {
            alert('Not all holes have been played');
            return;
        }
        const dateKey = new Date().toLocaleDateString('sv-SE');
        try {
            setValue({ key: `${playedHoleCount}-hole ${dateKey}`, value: JSON.stringify(scoreSummary) });
        } catch (error) {
            alert(dateKey);
            console.error(error);
        } finally {
            setIsSummaryOpen(false);
        }
    }, [holes, setValue]);

    const handleResetRound = useCallback(() => {
        scrollToHole(0);
        resetRound();
    }, [resetRound, scrollToHole]);

    const prediction = predictRound({
        holes: holes.map((hole) => ({
            score: hole.score,
            expectedTotalStroke: hole.par + 1,
        })),
        predictionRange: {
            // Preliminärt spridningsantagande, inte en handicapformel.
            // Påverkar enbart intervallet; ska kalibreras mot rondhistorik.
            fullRoundStandardDeviation: 3.5 + 0.1 * Math.max(0, hcp),
            baselineStandardDeviation: 0,
        },
    });
    const goalStatus = getRoundGoalStatus(prediction);

    return (
        <StyledPage>
            <StyledIconButton
                type="button"
                aria-label="Till startsidan"
                onClick={() => void navigate({ to: '/' })}
            >
                <Home aria-hidden="true" />
            </StyledIconButton>
            <Forecast
                prediction={prediction}
                goalStatus={goalStatus}
                totalHoles={holes.length}
            />
            <CardsCarousel
                carouselRef={carouselRef}
                holes={holes}
                onToggleCheckboxValue={toggleCheckbox}
                onUpdateValue={updateNumericField}
                setHoleCardRef={setHoleCardRef}
                playStrategy={playStrategy}
                isOnFirstHole={activeHoleIndex === 0}
                isOnLastHole={activeHoleIndex === holes.length - 1}
                onNextHole={nextHole}
                onPreviousHole={previousHole}
            />
            <StyledPagination aria-hidden="true">
                {holes.map((hole, index) => (
                    <StyledPaginationDot
                        key={hole.number}
                        type="button"
                        $active={index === activeHoleIndex}
                        aria-label={`Gå till hål ${hole.number}`}
                        aria-current={index === activeHoleIndex ? 'true' : undefined}
                        onClick={() => scrollToHole(index)}
                    />
                ))}
            </StyledPagination>

            <StyledActionBar>
                <StyledIconButton
                    type="button"
                    aria-label="Öppna rondöversikt"
                    onClick={() => setIsSummaryOpen(true)}
                >
                    <ClipboardList aria-hidden="true" />
                </StyledIconButton>
                {/* <StyledIconButton
                    type="button"
                    aria-label="Öppna utskriftsvänligt scorekort"
                    onClick={() => void navigate({ to: '/print' })}
                >
                    <Printer aria-hidden="true" />
                </StyledIconButton> */}
                <StyledIconButton type="button" aria-label="Nollställ rond" onClick={handleResetRound}>
                    <StyledResetIcon aria-hidden="true" />
                </StyledIconButton>
            </StyledActionBar>

            <SummarySheet
                holes={holes}
                isOpen={isSummaryOpen}
                onClose={() => setIsSummaryOpen(false)}
                onSaveRound={handleSaveRound}
            />
        </StyledPage>
    );
};
