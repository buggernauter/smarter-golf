import type { Hole } from '@/types/score-card';
import { getPlayedHoleSummary } from '@/domain/round-tracker/golf-round-selectors';

const STORAGE_PREFIX = 'golf-round:';

export type SavedRound = {
    id: string;
    savedAt: string;
    playedHoles: Hole[];
};

const isHole = (value: unknown): value is Hole => {
    if (typeof value !== 'object' || value === null) return false;

    const hole = value as Record<string, unknown>;

    return (
        ['number', 'par', 'stroke', 'penalty', 'meter'].every(
            (field) => typeof hole[field] === 'number' && Number.isFinite(hole[field]),
        ) &&
        ['downIn3', 'threePutt', 'scoringZone'].every((field) => typeof hole[field] === 'boolean') &&
        typeof hole.scoringGoal === 'string'
    );
};

export const saveRound = (holes: Hole[]): void => {
    const id = crypto.randomUUID();
    const summary = getPlayedHoleSummary(holes);

    window.localStorage.setItem(
        `${STORAGE_PREFIX}${id}`,
        JSON.stringify({
            ...summary,
            id,
            savedAt: new Date().toISOString(),
        }),
    );
};

export const readRoundHistory = (): SavedRound[] => {
    const rounds: SavedRound[] = [];

    for (let index = 0; index < window.localStorage.length; index++) {
        const key = window.localStorage.key(index);
        if (!key) continue;

        const legacyMatch = key.match(/^\d+-hole (\d{4}-\d{2}-\d{2})$/);
        if (!key.startsWith(STORAGE_PREFIX) && !legacyMatch) continue;

        try {
            const raw = window.localStorage.getItem(key);
            if (!raw) continue;

            const value: unknown = JSON.parse(raw);
            if (typeof value !== 'object' || value === null) continue;

            const data = value as Record<string, unknown>;
            if (!Array.isArray(data.playedHoles) || !data.playedHoles.every(isHole)) {
                continue;
            }

            const savedAt =
                typeof data.savedAt === 'string'
                    ? data.savedAt
                    : legacyMatch
                      ? `${legacyMatch[1]}T12:00:00`
                      : null;

            if (!savedAt || Number.isNaN(Date.parse(savedAt))) continue;

            rounds.push({
                id: key,
                savedAt,
                playedHoles: data.playedHoles,
            });
        } catch {
            console.log('error');
        }
    }

    return rounds.sort((a, b) => Date.parse(b.savedAt) - Date.parse(a.savedAt));
};
