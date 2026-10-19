import assert from 'node:assert/strict';
import test from 'node:test';
import { getRoundGoalStatus } from '../src/domain/round-tracker/golf-round-goal.ts';
import { predictRound } from '../src/domain/round-tracker/predicted-result.ts/predicted-result.ts';

test('47 slag och prognos 92 ger budget 42 och förbättringsbehov 3', () => {
    assert.deepEqual(getRoundGoalStatus({ actualTotalScore: 47, expectedFinal: 92, isComplete: false }), {
        remainingBudget: 42,
        improvementNeeded: 3,
        goalAchieved: null,
    });
});

test('prognos under målet kräver ingen förbättring och decimaler behålls', () => {
    assert.equal(getRoundGoalStatus({ actualTotalScore: 47, expectedFinal: 88, isComplete: false }).improvementNeeded, 0);
    const status = getRoundGoalStatus({ actualTotalScore: 47, expectedFinal: 89.4, isComplete: false });
    assert.ok(Math.abs(status.improvementNeeded - 0.4) < 1e-10);
});

test('överskriden maxscore ger negativ budget', () => {
    assert.equal(getRoundGoalStatus({ actualTotalScore: 91, expectedFinal: 96, isComplete: false }).remainingBudget, -2);
});

test('efter 18 hål klarar 89 målet men 90 gör det inte', () => {
    for (const score of [89, 90]) {
        const status = getRoundGoalStatus({ actualTotalScore: score, expectedFinal: score, isComplete: true });
        assert.equal(status.goalAchieved, score === 89);
        assert.equal(status.improvementNeeded, 0);
    }
});

test('målberäkningen ändrar inte prognosen', () => {
    const prediction = predictRound({
        holes: Array.from({ length: 18 }, () => ({ score: 0, expectedTotalStroke: 5 })),
    });
    const before = structuredClone(prediction);
    getRoundGoalStatus(prediction);
    assert.deepEqual(prediction, before);
});
