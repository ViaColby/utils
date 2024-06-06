/**
 * Find nodes that match the filter from a tree
 *
 * @param {Record<string, any>[]} tree The tree
 * @param {function} cb the filter method
 * @param {string} children Specify the child node attribute name of a node
 * @returns {Record<string, any>[]} Returns an array of nodes that match the filter.
 *
 * @example
 * const tree = [
 *   { id: '1', value: 1, children: [{ id: '1-1', value: 2 }] },
 *   { id: '2', value: 1 },
 *   { id: '3', value: 4, children: [{ id: '3-1', value: 1 }] },
 * ]
 * findNodes(tree, (node) => node.value & 2 === 0)
 * // => [
 *  { id: '1-1', value: 2 },
 *  { id: '3', value: 4, children: [{ id: '3-1', value: 1 }] },
 * ]
 *
 */

const findNodes = (
    tree: Record<string, any>[],
    cb: (node: Record<string, any>) => boolean,
    children: string = 'children',
): Record<string, any>[] => {
    // define result array
    const result: Record<string, any>[] = [];

    tree.forEach(node => {
        if (cb(node)) {
            result.push({ ...node });
        }
        if (node[children] && node[children].length) {
            result.push(...findNodes(node[children], cb, children));
        }
    });

    return result;
};

export default findNodes;
