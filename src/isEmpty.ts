import checkType from '@/checkType';
/**
 * Checks if `data` is an empty object, collection, map, or set.
 *
 * @param {any} data The value to check
 * @returns {boolean} Returns 'true' if 'data' is empty, else 'false'.
 * @example
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty([1, 2])
 * // => false
 */
const isEmpty = (data: any): boolean => {
    // null or undefined
    if (data == null) {
        return true;
    }
    const dataType = checkType(data);
    // array string
    if (['Array', 'String'].includes(dataType)) {
        return !data.length;
    }
    // map set
    if (['Map', 'Set'].includes(dataType)) {
        return !data.size;
    }
    // object
    if (['Object'].includes(dataType)) {
        return Object.keys(data).length === 0;
    }
    return true;
};
export default isEmpty;
