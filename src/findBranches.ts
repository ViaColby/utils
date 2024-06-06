/**
 * Find branches that match the filter from a tree
 *
 * @param {Record<string, any>[]} tree The tree
 * @param {function} cb the filter method
 * @param {string} children Specify the child node attribute name of a node
 * @returns {Record<string, any>[]} Returns the new tree that matches the filter.
 *
 * @example
 * const tree = [
 *   { id: '1', value: 1, children: [{ id: '1-1', value: 2 }] },
 *   { id: '2', value: 1 },
 * ]
 * findBranches(tree, (node) => node.value === 2)
 * // => [
 *  { id: '1', value: 1, children: [{ id: '1-1', value: 2 }] },
 * ]
 *
 */

const findBranches = (
    tree: Record<string, any>[],
    cb: (node: Record<string, any>) => boolean, // parameter 'node': current node
    children: string = 'children',
): Record<string, any>[] => {
    const newTree = tree.map(node => ({ ...node }));
    return newTree.filter(node => {
        if (node[children]) {
            node[children] = findBranches(node[children], cb, children);
        }
        return cb(node) || (node[children] && node[children].length);
    });
};

export default findBranches;
