import { getChecklistStats } from '@/domain/round-tracker/round-checklist';
import { ScoreGoal, type Hole, type SavedRound } from '@/types/score-card';
import { STORAGE_KEY } from '@/constants';
import { getRoundSummary } from '@/domain/round-tracker/round-summary';

const STORAGE_PREFIX = 'golf-round:';

const isHole = (value: unknown): value is Hole => {
    if (typeof value !== 'object' || value === null) return false;

    const hole = value as Record<string, unknown>;

    return (
        ['number', 'par', 'stroke', 'penalty', 'meter'].every(
            (field) => typeof hole[field] === 'number' && Number.isFinite(hole[field]),
        ) &&
        ['downIn3', 'threePutt', 'scoringZone'].every((field) => typeof hole[field] === 'boolean')
    );
};

export const saveRoundToHistory = (holes: Hole[], scoreGoal: ScoreGoal): SavedRound => {
    const id = crypto.randomUUID();
    const summary = getRoundSummary(holes);

    const key = `${STORAGE_PREFIX}${id}`;
    const savedAt = new Date().toISOString();
    window.localStorage.setItem(key, JSON.stringify({ ...summary, scoreGoal, id, savedAt }));
    return { id: key, savedAt, playedHoles: summary.playedHoles, scoreGoal };
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
                scoreGoal: isScoreGoal(data.scoreGoal) ? data.scoreGoal : null,
            });
        } catch {
            console.log('error');
        }
    }

    return rounds.sort((a, b) => Date.parse(b.savedAt) - Date.parse(a.savedAt));
};

export const deleteRoundFromHistory = (id: string): void => {
    window.localStorage.removeItem(id);
};

const isScoreGoal = (value: unknown): value is ScoreGoal =>
    Object.values(ScoreGoal).some((goal) => goal === value);

export const hydrateActiveRound = (baseRound: Hole[], storageKey = STORAGE_KEY): Hole[] => {
    try {
        const raw = window.localStorage.getItem(storageKey);
        if (!raw) return baseRound;
        const stored = JSON.parse(raw);
        return mergeStoredRound(baseRound, Array.isArray(stored) ? stored : stored?.holes);
    } catch (error) {
        console.error(error);
        return baseRound;
    }
};

export const hydrateActiveScoreGoal = (storageKey = STORAGE_KEY): ScoreGoal | null => {
    try {
        const raw = window.localStorage.getItem(storageKey);
        if (!raw) return null;
        const stored = JSON.parse(raw);
        return isScoreGoal(stored?.scoreGoal) ? stored.scoreGoal : null;
    } catch {
        return null;
    }
};

export const saveActiveRound = (
    holes: Hole[],
    scoreGoal: ScoreGoal | null,
    storageKey = STORAGE_KEY,
): void => {
    window.localStorage.setItem(storageKey, JSON.stringify({ holes, scoreGoal }));
};

export const clearActiveRound = (storageKey = STORAGE_KEY): void => {
    window.localStorage.removeItem(storageKey);
};

const mergeStoredRound = (baseRound: Hole[], storedValue: unknown) => {
    if (!Array.isArray(storedValue)) {
        return baseRound;
    }

    return baseRound.map((hole, index) => {
        const storedHole = storedValue[index];

        if (!storedHole || typeof storedHole !== 'object') {
            return hole;
        }

        const completedStrategyPoints = Array.isArray(storedHole.completedStrategyPoints)
            ? storedHole.completedStrategyPoints.filter((point: unknown): point is string => typeof point === 'string')
            : undefined;

        return {
            ...hole,
            completedStrategyPoints: completedStrategyPoints ?? [],
            stroke: typeof storedHole.stroke === 'number' ? storedHole.stroke : hole.stroke,
            penalty: typeof storedHole.penalty === 'number' ? storedHole.penalty : hole.penalty,
            downIn3: typeof storedHole.downIn3 === 'boolean' ? storedHole.downIn3 : hole.downIn3,
            threePutt: typeof storedHole.threePutt === 'boolean' ? storedHole.threePutt : hole.threePutt,
            scoringZone:
                typeof storedHole.scoringZone === 'boolean' ? storedHole.scoringZone : hole.scoringZone,
            ...(completedStrategyPoints ? getChecklistStats(completedStrategyPoints) : {}),
        };
    });
};
