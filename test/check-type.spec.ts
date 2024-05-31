import checkType from "../src/check-type";

describe('checkType', () => {
    it('check String', () => {
        const result = checkType('');
        expect(result).toBe('string');
    });

    it('check Number', () => {
        const result = checkType(0);
        expect(result).toBe('number');
    });

    it('check Boolean', () => {
        const result = checkType(true);
        expect(result).toBe('boolean');
    });

    it('check Null', () => {
        const result = checkType(null);
        expect(result).toBe('null');
    });

    it('check Undefined', () => {
        const result = checkType(undefined);
        expect(result).toBe('undefined');
    });

    it('check Array', () => {
        const result = checkType([]);
        expect(result).toBe('array');
    });

    it('check Object', () => {
        const result = checkType({});
        expect(result).toBe('object');
    });
});
