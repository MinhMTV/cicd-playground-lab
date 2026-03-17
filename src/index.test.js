import test from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './index.js';

test('greet returns default message', () => {
  assert.equal(greet(), 'Hello, CI/CD Learner!');
});

test('greet returns personalized message', () => {
  assert.equal(greet('Minh'), 'Hello, Minh!');
});
