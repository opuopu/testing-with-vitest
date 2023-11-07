import { expect, it, test } from 'vitest';
import { checkStringLength } from '../../src/string.js';

it('check string length', () => {
  const value = 'opuvai';
  const result = checkStringLength(value);
  expect(result).toBe(6);
});
