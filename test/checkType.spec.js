import checkType from '../src/checkType';
import { map, weakMap, set, weakSet, symbol } from './test-utils';

describe('checkType', () => {
    it('should return the correct type of the value', () => {
        expect(checkType('1')).toBe('String');
        expect(checkType(0)).toBe('Number');
        expect(checkType(false)).toBe('Boolean');
        expect(checkType(null)).toBe('Null');
        expect(checkType(undefined)).toBe('Undefined');
        expect(checkType([])).toBe('Array');
        expect(checkType({})).toBe('Object');
        const fun = () => {};
        expect(checkType(fun)).toBe('Function');
        expect(checkType(symbol)).toBe('Symbol');
        expect(checkType(map)).toBe('Map');
        expect(checkType(set)).toBe('Set');
        expect(checkType(weakMap)).toBe('WeakMap');
        expect(checkType(weakSet)).toBe('WeakSet');
    });
});
