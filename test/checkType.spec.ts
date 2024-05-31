import checkType from "../src/checkType";

describe('checkType', () => {
    it('check String', () => {
        const result = checkType('');
        expect(result).toBe('String');
    });

    it('check Number', () => {
        const result = checkType(0);
        expect(result).toBe('Number');
    });

    it('check Boolean', () => {
        const result = checkType(true);
        expect(result).toBe('Boolean');
    });

    it('check Null', () => {
        const result = checkType(null);
        expect(result).toBe('Null');
    });

    it('check Undefined', () => {
        const result = checkType(undefined);
        expect(result).toBe('Undefined');
    });

    it('check Array', () => {
        const result = checkType([]);
        expect(result).toBe('Array');
    });

    it('check Object', () => {
        const result = checkType({});
        expect(result).toBe('Object');
    });

    it('check Symbol', () => {
        const result = checkType(Symbol(1));
        expect(result).toBe('Symbol');
    });

    it('check Map', () => {
        const result = checkType(new Map());
        expect(result).toBe('Map');
    });

    it('check Set', () => {
        const result = checkType(new Set());
        expect(result).toBe('Set');
    });

    it('check WeakMap', () => {
        const result = checkType(new WeakMap());
        expect(result).toBe('WeakMap');
    });

    it('check WeakSet', () => {
        const result = checkType(new WeakSet());
        expect(result).toBe('WeakSet');
    });
});
