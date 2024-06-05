/**
 * Check data type
 *
 * @param {any} data the value to check
 * @returns {string} Returns the data type.
 * @example
 *
 * checkType({})
 * => 'Object'
 */
const checkType = (data: any): string => {
    const type = Object.prototype.toString.call(data);
    return type.slice(8, -1);
};
export default checkType;
