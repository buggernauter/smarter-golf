import assert from 'node:assert/strict';
import test from 'node:test';
import { predictRound } from '../src/domain/round-tracker/predicted-result.ts/predicted-result.ts';

const createHoles = () => Array.from({ length: 18 }, () => ({ score: 0, expectedTotalStroke: 5 }));
const uncertainty = {
    fullRoundStandardDeviation: 6,
    baselineStandardDeviation: 2,
};

test('noll hål ger en ändlig startprognos utan påhittat intervall', () => {
    const result = predictRound({ holes: createHoles() });
    assert.equal(result.expectedFinal, 90);
    assert.equal(result.actualTotalScore, 0);
    assert.equal(result.formAdjustment, 0);
    assert.equal(result.predictionInterval, null);
});

test('faktiska slag plus återstående håls egna förväntningar, utan intern avrundning', () => {
    const holes = createHoles();
    holes[0].score = 5;
    holes[17].expectedTotalStroke = 6.25;
    const result = predictRound({ holes });
    assert.equal(result.actualTotalScore, 5);
    assert.equal(result.expectedRemaining, 86.25);
    assert.equal(result.expectedFinal, 91.25);
    assert.equal(result.playedHoles, 1);
});

test('katastrofhål räknas fullt men extrapoleras begränsat', () => {
    const holes = createHoles();
    holes[0].score = 12;
    const first = predictRound({ holes });
    assert.equal(first.actualTotalScore, 12);
    assert.equal(first.formAdjustment, 2 / 13);
    assert.ok(Math.abs(first.expectedRemaining - (85 + 17 * 2 / 13)) < 1e-10);
    holes[0].score = 20;
    const worse = predictRound({ holes });
    assert.equal(worse.actualTotalScore, 20);
    assert.equal(worse.expectedRemaining, first.expectedRemaining);
});

test('korrigerad och borttagen score beräknas om från grunden', () => {
    const holes = createHoles();
    holes[0].score = 12;
    predictRound({ holes });
    holes[0].score = 5;
    assert.equal(predictRound({ holes }).expectedFinal, 90);
    holes[0].score = 0;
    assert.equal(predictRound({ holes }).playedHoles, 0);
});

test('formjustering begränsas åt båda håll och hålförväntan understiger inte 1', () => {
    for (const score of [1, 12]) {
        const holes = createHoles();
        for (let i = 0; i < 10; i++) holes[i].score = score;
        assert.equal(predictRound({ holes }).formAdjustment, score === 1 ? -0.35 : 0.35);
    }
    const holes = createHoles().map(() => ({ score: 1, expectedTotalStroke: 2 }));
    holes[17] = { score: 0, expectedTotalStroke: 1 };
    assert.equal(predictRound({ holes }).expectedRemaining, 1);
});

test('80-procentsintervallet smalnar av och blir exakt faktisk slutscore', () => {
    const holes = createHoles();
    let previousWidth = Infinity;
    for (let n = 0; n <= 18; n++) {
        if (n > 0) holes[n - 1].score = 5;
        const interval = predictRound({ holes, predictionRange: uncertainty }).predictionInterval!;
        assert.equal(interval.level, 0.8);
        assert.equal(interval.isCalibrated, false);
        assert.ok(Number.isFinite(interval.lower) && Number.isFinite(interval.upper));
        const width = interval.upper - interval.lower;
        assert.ok(width <= previousWidth);
        previousWidth = width;
    }
    const final = predictRound({ holes });
    assert.equal(final.expectedFinal, 90);
    assert.equal(final.expectedRemaining, 0);
    assert.equal(final.isComplete, true);
    assert.equal(final.predictionInterval!.lower, 90);
    assert.equal(final.predictionInterval!.upper, 90);
});

test('ogiltig score, hålförväntan, rondlängd och osäkerhet avvisas', () => {
    for (const score of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
        const holes = createHoles();
        holes[0].score = score;
        assert.throws(() => predictRound({ holes }), RangeError);
    }
    for (const expectedTotalStroke of [0, NaN, Infinity]) {
        const holes = createHoles();
        holes[0].expectedTotalStroke = expectedTotalStroke;
        assert.throws(() => predictRound({ holes }), RangeError);
    }
    assert.throws(() => predictRound({ holes: [] }), RangeError);
    for (const invalid of [
        { ...uncertainty, fullRoundStandardDeviation: -1 },
        { ...uncertainty, baselineStandardDeviation: NaN },
    ]) {
        assert.throws(() => predictRound({ holes: createHoles(), predictionRange: invalid }), RangeError);
    }
});

test('större spridning breddar intervallet utan att ändra mittprognosen', () => {
    const holes = createHoles();
    const lowerVariation = predictRound({
        holes,
        predictionRange: { fullRoundStandardDeviation: 3.5, baselineStandardDeviation: 0 },
    });
    const higherVariation = predictRound({
        holes,
        predictionRange: { fullRoundStandardDeviation: 5.64, baselineStandardDeviation: 0 },
    });
    assert.equal(lowerVariation.expectedFinal, higherVariation.expectedFinal);
    assert.ok(higherVariation.predictionInterval!.lower < lowerVariation.predictionInterval!.lower);
    assert.ok(higherVariation.predictionInterval!.upper > lowerVariation.predictionInterval!.upper);
});
