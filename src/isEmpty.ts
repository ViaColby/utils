import { checkType } from '@/checkType';
/**
 * Checks if `data` is an empty object, collection, map, or set.
 *
 * @param {*} data The value to check
 * @returns {boolean} Returns 'true' if 'data' is empty, else 'false'.
 * @example
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty([1, 2])
 * // => false
 */
export const isEmpty = (data: any): boolean => {
    // null or undefined
    if (data == null) {
        return true;
    }
    const dataType = checkType(data);
    // array string arguments uint8Array buffer
    if (['Array', 'String', 'Arguments', 'Uint8Array'].includes(dataType)) {
        return !data.length;
    }
    // map set blob
    if (['Map', 'Set', 'Blob'].includes(dataType)) {
        return !data.size;
    }
    // object
    if (dataType === 'Object') {
        return Object.keys(data).length === 0;
    }
    return dataType !== 'Function';
};
