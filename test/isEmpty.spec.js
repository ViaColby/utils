import isEmpty from '../src/isEmpty';
import { map, set } from './test-utils';

describe('isEmpty', () => {
    it('should return `true` for empty values', () => {
        expect(isEmpty(map)).toBe(true);
        expect(isEmpty(set)).toBe(true);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty()).toBe(true);
    });

    it('should return `false` for non-empty values', () => {
        expect(isEmpty([0])).toBe(false);
        expect(isEmpty({ a: 0 })).toBe(false);
        expect(isEmpty('0')).toBe(false);
    });
});
