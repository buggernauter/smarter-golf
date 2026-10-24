import assert from 'node:assert/strict';
import test from 'node:test';
import { predictRound } from '../src/domain/round-tracker/predicted-result.ts/predicted-result.ts';

const createHoles = () => Array.from({ length: 18 }, (_, index) => ({
    number: index + 1,
    par: 4,
    stroke: 0,
    penalty: 0,
    downIn3: false,
    threePutt: false,
    meter: 300,
    scoringGoal: '',
    scoringZone: false,
}));

test('no forecast before the first completed hole', () => {
    const result = predictRound({ holes: createHoles() });
    assert.equal(result.expectedFinal, null);
    assert.equal(result.expectedRemaining, null);
    assert.equal(result.actualTotalScore, 0);
    assert.equal(result.playedHoles, 0);
    assert.equal(result.playedPercentage, 0);
    assert.equal(result.isComplete, false);
});

test('one completed hole produces a forecast based on the deviation from par', () => {
    const holes = createHoles();
    holes[0].stroke = 5;
    const result = predictRound({ holes });
    assert.equal(result.actualTotalScore, 5);
    assert.equal(result.expectedRemaining, 85);
    assert.equal(result.expectedFinal, 90);
    assert.equal(result.playedHoles, 1);
});

test('different hole pars and playing orders use the average relative to par without rounding', () => {
    const holes = createHoles();
    holes[0] = { ...holes[0], stroke: 4, par: 3 };
    holes[8] = { ...holes[8], stroke: 7, par: 5 };
    holes[17] = { ...holes[17], stroke: 4, par: 4 };
    const result = predictRound({ holes });
    assert.equal(result.actualTotalScore, 15);
    assert.equal(result.expectedRemaining, 75);
    assert.equal(result.expectedFinal, 90);
    holes[17].stroke = 3;
    assert.ok(Math.abs(predictRound({ holes }).expectedFinal! - 84) < 1e-10);
});

test('playing under par lowers the forecast', () => {
    const holes = createHoles();
    holes[0].stroke = 3;
    const result = predictRound({ holes });
    assert.equal(result.expectedRemaining, 51);
    assert.equal(result.expectedFinal, 54);
});

test('corrected and removed strokes trigger a fresh calculation', () => {
    const holes = createHoles();
    holes[0].stroke = 12;
    assert.equal(predictRound({ holes }).expectedFinal, 216);
    holes[0].stroke = 5;
    assert.equal(predictRound({ holes }).expectedFinal, 90);
    holes[0].stroke = 0;
    assert.equal(predictRound({ holes }).expectedFinal, null);
});

test('a completed round produces the exact actual final score', () => {
    const holes = createHoles().map((hole, index) => ({ ...hole, stroke: index % 2 === 0 ? 4 : 6 }));
    const result = predictRound({ holes });
    assert.equal(result.actualTotalScore, 90);
    assert.equal(result.expectedFinal, 90);
    assert.equal(result.expectedRemaining, 0);
    assert.equal(result.playedHoles, 18);
    assert.equal(result.playedPercentage, 100);
    assert.equal(result.isComplete, true);
});

test('the calculation does not mutate its input', () => {
    const holes = createHoles();
    holes[0].stroke = 7;
    const before = structuredClone(holes);
    predictRound({ holes });
    assert.deepEqual(holes, before);
});

test('invalid strokes, par and round length are rejected', () => {
    for (const stroke of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
        const holes = createHoles();
        holes[0].stroke = stroke;
        assert.throws(() => predictRound({ holes }), RangeError);
    }
    for (const par of [-1, 0, NaN, Infinity]) {
        const holes = createHoles();
        holes[0].par = par;
        assert.throws(() => predictRound({ holes }), RangeError);
    }
    assert.throws(() => predictRound({ holes: [] }), RangeError);
});
