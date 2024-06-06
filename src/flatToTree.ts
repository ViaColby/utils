/**
 * Transform the list into a tree structure
 *
 * @param {Record<string, any>[]} list The list to transform
 * @param {TreeTransformOption} options Optional item data source
 * @param {string} options.parent Specify the parent id attribute name of a node
 * @param {string} options.id Specify the id attribute name of a node
 * @param {string} options.children Specify the child node attribute name of a node
 * @returns {Record<string, any>[]} Returns the tree structure list.
 *
 * @example
 * const list = [
 *   {id: 1, parent: null},
 *   {id: 2, parent: 1},
 *   {id: 3, parent: null},
 *   {id: 4, parent: 3}
 * ]
 * flatArrayToTree(list, { parent: 'parent' })
 * // => [
 *   {
 *      id: 1,
 *      parent: 0,
 *      children: [
 *        {id: 2, parent: 1}
 *      ]
 *   },
 *   {
 *      id: 3,
 *      parent: 0,
 *      children: [
 *        {id: 4, parent: 3}
 *      ]
 *   },
 * ]
 *
 */

export interface TreeTransformOption {
    parent?: string;
    id?: string;
    children?: string;
}

const flatToTree = (list: Record<string, any>[], options?: TreeTransformOption): any => {
    // define a result array to return
    const result: Array<Record<string, any>> = [];

    if (list == null) {
        return result;
    }
    // define keys
    const pidKey = options?.parent || 'pid';
    const idKey = options?.id || 'id';
    const childrenKey = options?.children || 'children';
    // define an id mapping object
    const map: Record<string, any> = {};

    // build id mapping table
    list.forEach(node => {
        const nodeId = node[idKey];
        map[nodeId] = { ...node };
    });

    list.forEach(node => {
        const parentId = node[pidKey];
        const parent = map[parentId];
        if (parent) {
            (parent[childrenKey] || (parent[childrenKey] = [])).push(map[node[idKey]]);
        } else {
            result.push(map[node[idKey]]);
        }
    });

    return result;
};

export default flatToTree;
