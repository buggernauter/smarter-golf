import assert from 'node:assert/strict';
import test from 'node:test';
import { predictRound } from '../src/domain/round-tracker/round-prediction.ts';

const createHoles = () => Array.from({ length: 18 }, (_, index) => ({
    number: index + 1,
    par: 4,
    stroke: 0,
    penalty: 0,
    downIn3: false,
    threePutt: false,
    meter: 300,
    scoringZone: false,
}));

test('no forecast before the first completed hole', () => {
    const result = predictRound({ holes: createHoles() });
    assert.equal(result.predictedTotalStrokes, null);
    assert.equal(result.predictedRemainingStrokes, null);
    assert.equal(result.predictedStrokesRange, null);
    assert.equal(result.strokesSoFar, 0);
    assert.equal(result.completedHoles, 0);
    assert.equal(result.playedPercentage, 0);
    assert.equal(result.isRoundComplete, false);
});

test('one completed hole produces a forecast based on the deviation from par', () => {
    const holes = createHoles();
    holes[0].stroke = 5;
    const result = predictRound({ holes });
    assert.equal(result.strokesSoFar, 5);
    assert.equal(result.predictedRemainingStrokes, 85);
    assert.equal(result.predictedTotalStrokes, 90);
    assert.equal(result.completedHoles, 1);
});

test('different hole pars and playing orders use the average relative to par without rounding', () => {
    const holes = createHoles();
    holes[0] = { ...holes[0], stroke: 4, par: 3 };
    holes[8] = { ...holes[8], stroke: 7, par: 5 };
    holes[17] = { ...holes[17], stroke: 4, par: 4 };
    const result = predictRound({ holes });
    assert.equal(result.strokesSoFar, 15);
    assert.equal(result.predictedRemainingStrokes, 75);
    assert.equal(result.predictedTotalStrokes, 90);
    holes[17].stroke = 3;
    assert.ok(Math.abs(predictRound({ holes }).predictedTotalStrokes! - 84) < 1e-10);
});

test('playing under par lowers the forecast', () => {
    const holes = createHoles();
    holes[0].stroke = 3;
    const result = predictRound({ holes });
    assert.equal(result.predictedRemainingStrokes, 51);
    assert.equal(result.predictedTotalStrokes, 54);
});

test('corrected and removed strokes trigger a fresh calculation', () => {
    const holes = createHoles();
    holes[0].stroke = 12;
    assert.equal(predictRound({ holes }).predictedTotalStrokes, 216);
    holes[0].stroke = 5;
    assert.equal(predictRound({ holes }).predictedTotalStrokes, 90);
    holes[0].stroke = 0;
    assert.equal(predictRound({ holes }).predictedTotalStrokes, null);
});

test('a completed round produces the exact actual final score', () => {
    const holes = createHoles().map((hole, index) => ({ ...hole, stroke: index % 2 === 0 ? 4 : 6 }));
    const result = predictRound({ holes });
    assert.equal(result.strokesSoFar, 90);
    assert.equal(result.predictedTotalStrokes, 90);
    assert.equal(result.predictedRemainingStrokes, 0);
    assert.equal(result.completedHoles, 18);
    assert.equal(result.playedPercentage, 100);
    assert.equal(result.isRoundComplete, true);
    assert.deepEqual(result.predictedStrokesRange, { lower: 90, higher: 90 });
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

test('a nine-hole round uses its planned length for the forecast and completion', () => {
    const holes = createHoles().slice(0, 9);
    holes[0].stroke = 5;
    const result = predictRound({ holes });
    assert.equal(result.predictedTotalStrokes, 45);
    assert.equal(result.predictedRemainingStrokes, 40);
    assert.equal(result.playedPercentage, 11);
    assert.equal(result.isRoundComplete, false);
    assert.deepEqual(result.predictedStrokesRange, { lower: 41, higher: 49 });

    holes.forEach(hole => { hole.stroke = 5; });
    const completed = predictRound({ holes });
    assert.equal(completed.isRoundComplete, true);
    assert.equal(completed.predictedRemainingStrokes, 0);
    assert.equal(completed.playedPercentage, 100);
    assert.deepEqual(completed.predictedStrokesRange, { lower: 45, higher: 45 });
});

test('the range rounds the forecast while retaining the unrounded total', () => {
    const holes = createHoles();
    holes[0].stroke = 4;
    holes[1].stroke = 4;
    holes[2].stroke = 4;
    holes[3].stroke = 5;
    const result = predictRound({ holes });
    assert.equal(result.predictedTotalStrokes, 76.5);
    assert.deepEqual(result.predictedStrokesRange, { lower: 73, higher: 81 });
});
