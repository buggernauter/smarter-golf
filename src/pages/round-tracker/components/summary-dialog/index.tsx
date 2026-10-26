import { ArrowLeft, Check, X } from 'lucide-react';

import type { Hole } from '@/types/score-card';

import { getRoundSummary } from '@/domain/round-tracker/round-summary';
import {
    StyledBadge,
    StyledEmptyText,
    StyledButton,
    StyledSummaryCloseButton,
    StyledSummarySheet,
    StyledSummarySheetBackdrop,
    StyledSummarySheetBody,
    StyledSummarySheetFooter,
    StyledSummarySheetHeader,
    StyledSummarySheetTitle,
    StyledTable,
    StyledTableCard,
    StyledTableCell,
    StyledTableCellPrimary,
    StyledTableFooterCell,
    StyledTableStatusCell,
    StyledTableValue,
    StyledTableWrapper,
} from '@/pages/round-tracker/components/summary-dialog/styles';

type Props = {
    holes: Hole[];
    isOpen: boolean;
    onClose: VoidFunction;
    onBack?: VoidFunction;
    onSaveRound?: VoidFunction;
    onResetRound?: VoidFunction;
};

const renderCheckState = (value: boolean) =>
    value ? <Check aria-hidden="true" /> : <X aria-hidden="true" />;

export const SummaryDialog = ({ holes, isOpen, onClose, onSaveRound, onBack, onResetRound }: Props) => {
    const {
        playedHoles,
        totalDownIn3,
        totalPar,
        totalPenalty,
        totalScore,
        totalScoringZone,
        totalThreePutt,
    } = getRoundSummary(holes);
    const isOngoingRound = Boolean(onSaveRound || onResetRound);
    return (
        <StyledSummarySheetBackdrop $open={isOpen} aria-hidden={!isOpen} onClick={onClose}>
            <StyledSummarySheet
                $open={isOpen}
                aria-label="Scorecard"
                aria-modal="true"
                role="dialog"
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <StyledSummarySheetHeader>
                    {!onBack && <span aria-hidden="true" />}
                    {onBack && (
                        <StyledSummaryCloseButton
                            type="button"
                            aria-label="Back to round history"
                            onClick={onBack}
                        >
                            <ArrowLeft aria-hidden="true" />
                        </StyledSummaryCloseButton>
                    )}

                    <StyledSummarySheetTitle>Scorecard</StyledSummarySheetTitle>

                    {!onBack && (
                        <StyledSummaryCloseButton
                            type="button"
                            aria-label="Close scorecard"
                            onClick={onClose}
                        >
                            <X aria-hidden="true" />
                        </StyledSummaryCloseButton>
                    )}
                    {onBack && <span aria-hidden="true" />}
                </StyledSummarySheetHeader>

                <StyledSummarySheetBody>
                    <StyledTableCard>
                        {playedHoles.length === 0 ? (
                            <StyledEmptyText>No hole statistics yet.</StyledEmptyText>
                        ) : (
                            <StyledTableWrapper>
                                <StyledTable>
                                    <thead>
                                        <tr>
                                            <th>Hole</th>
                                            <th>Par</th>
                                            <th>Strokes</th>
                                            <th>SZ</th>
                                            <th>D3</th>
                                            <th>Penalties</th>
                                            <th>3-putt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {playedHoles.map((hole) => (
                                            <tr key={hole.number}>
                                                <StyledTableCellPrimary>
                                                    <StyledBadge>{hole.number}</StyledBadge>
                                                </StyledTableCellPrimary>
                                                <StyledTableCell>{hole.par}</StyledTableCell>
                                                <StyledTableValue>{hole.stroke || '-'}</StyledTableValue>
                                                <StyledTableStatusCell
                                                    $tone={hole.scoringZone ? 'success' : 'danger'}
                                                >
                                                    {renderCheckState(hole.scoringZone)}
                                                </StyledTableStatusCell>
                                                <StyledTableStatusCell
                                                    $tone={hole.downIn3 ? 'success' : 'danger'}
                                                >
                                                    {renderCheckState(hole.downIn3)}
                                                </StyledTableStatusCell>
                                                <StyledTableCell>{hole.penalty}</StyledTableCell>
                                                <StyledTableStatusCell $tone="danger">
                                                    {hole.threePutt ? <X aria-hidden="true" /> : 'No'}
                                                </StyledTableStatusCell>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <StyledTableFooterCell>Result</StyledTableFooterCell>
                                            <StyledTableCell>{totalPar}</StyledTableCell>
                                            <StyledTableValue>{totalScore}</StyledTableValue>
                                            <StyledTableCell>{totalScoringZone}</StyledTableCell>
                                            <StyledTableCell>{totalDownIn3}</StyledTableCell>
                                            <StyledTableCell>{totalPenalty}</StyledTableCell>
                                            <StyledTableCell>{totalThreePutt}</StyledTableCell>
                                        </tr>
                                    </tfoot>
                                </StyledTable>
                            </StyledTableWrapper>
                        )}
                    </StyledTableCard>
                </StyledSummarySheetBody>

                {isOngoingRound && (
                    <StyledSummarySheetFooter>
                        <StyledButton type="button" onClick={onSaveRound} $isSave={true}>
                            Save round
                        </StyledButton>

                        <StyledButton type="button" onClick={onResetRound} $isSave={false}>
                            Finish without saving
                        </StyledButton>
                    </StyledSummarySheetFooter>
                )}
            </StyledSummarySheet>
        </StyledSummarySheetBackdrop>
    );
};
