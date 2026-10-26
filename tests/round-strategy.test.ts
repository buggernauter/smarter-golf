import assert from 'node:assert/strict';
import test from 'node:test';

import { getPlayStrategy } from '../src/domain/round-tracker/round-strategy.ts';

test('supported pars return the corresponding strategy', () => {
    for (const par of [3, 4, 5]) {
        const strategy = getPlayStrategy(par);
        assert.equal(strategy.heading, `Scoring zone in ${par - 2} ${par === 3 ? 'shot' : 'shots'}`);
        assert.ok(strategy.points.every(point => typeof point === 'string'));
    }
});

test('unsupported pars are rejected instead of returning a par 5 strategy', () => {
    for (const par of [0, 2, 6, 3.5, NaN, Infinity]) {
        assert.throws(() => getPlayStrategy(par), RangeError);
    }
});
