import { ChevronRight, Trash2, X } from 'lucide-react';
import { useState } from 'react';

import type { SavedRound } from '@/domain/round-tracker/round-history';
import { getPlayedHoleSummary } from '@/domain/round-tracker/golf-round-selectors';
import { SummaryDialog } from '@/pages/round-tracker/components/summary-dialog';
import {
    StyledSummaryCloseButton,
    StyledSummarySheet,
    StyledSummarySheetBackdrop,
    StyledSummarySheetBody,
    StyledSummarySheetHeader,
    StyledSummarySheetTitle,
} from '@/pages/round-tracker/components/summary-dialog/styles';
import {
    StyledDeleteButton,
    StyledRowDetails,
    StyledList,
    StyledOpenButton,
    StyledResult,
    StyledRow,
} from '@/pages/round-tracker/components/history-dialog/styles';

type Props = {
    rounds: SavedRound[];
    onClose: () => void;
    onDeleteRound: (id: string) => void;
};

export const HistoryDialog = ({ rounds, onClose, onDeleteRound }: Props) => {
    const [selectedRound, setSelectedRound] = useState<SavedRound | null>(null);

    if (selectedRound) {
        return (
            <SummaryDialog
                holes={selectedRound.playedHoles}
                isOpen
                onClose={() => setSelectedRound(null)}
                onBack={() => setSelectedRound(null)}
            />
        );
    }
    const shortDate = (date: string) =>
        new Date(date).toLocaleString('sv-SE', {
            dateStyle: 'short',
            timeStyle: 'short',
        });

    return (
        <StyledSummarySheetBackdrop $open onClick={onClose}>
            <StyledSummarySheet
                $open
                role="dialog"
                aria-modal="true"
                aria-label="Round history"
                onClick={(event) => event.stopPropagation()}
            >
                <StyledSummarySheetHeader>
                    <span aria-hidden="true" />
                    <StyledSummarySheetTitle>Rounds</StyledSummarySheetTitle>

                    <StyledSummaryCloseButton
                        type="button"
                        aria-label="Close round history"
                        onClick={onClose}
                    >
                        <X aria-hidden="true" />
                    </StyledSummaryCloseButton>
                </StyledSummarySheetHeader>

                <StyledSummarySheetBody>
                    {rounds.length !== 0 ? (
                        <StyledList>
                            {rounds.map((round) => {
                                const summary = getPlayedHoleSummary(round.playedHoles);
                                const date = shortDate(round.savedAt);

                                return (
                                    <>
                                        <StyledRow key={round.id}>
                                            <StyledOpenButton
                                                type="button"
                                                onClick={() => setSelectedRound(round)}
                                                aria-label={`View scorecard: ${date}`}
                                            >
                                                <StyledRowDetails>
                                                    <strong>{date}</strong>
                                                    <StyledResult>
                                                        {summary.playedHoles.length} hål
                                                        {' · '}
                                                        {summary.totalScore} slag
                                                        {' · '}
                                                        par {summary.totalPar}
                                                    </StyledResult>
                                                </StyledRowDetails>

                                                <ChevronRight aria-hidden="true" />
                                            </StyledOpenButton>
                                            <StyledDeleteButton
                                                type="button"
                                                aria-label={`Delete round: ${date}`}
                                                onClick={() => onDeleteRound(round.id)}
                                            >
                                                <Trash2 aria-hidden="true" />
                                            </StyledDeleteButton>
                                        </StyledRow>
                                    </>
                                );
                            })}
                        </StyledList>
                    ) : null}
                </StyledSummarySheetBody>
            </StyledSummarySheet>
        </StyledSummarySheetBackdrop>
    );
};
