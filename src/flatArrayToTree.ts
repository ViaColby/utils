/**
 * Transform the list into a tree structure
 *
 * @param {FlatArrayItem[]} list The list to transform
 * @param {TreeTransformOption} option Optional item data source
 * @param {string} option.pidKey Specify the parent id attribute name of a node
 * @param {string} option.idKey Specify the id attribute name of a node
 * @param {string} option.childrenKey Specify the child node attribute name of a node
 * @returns {FlatArrayItem[]} Returns the tree structure list.
 *
 * @example
 * const list = [
 *   {id: 1, parent: null},
 *   {id: 2, parent: 1},
 *   {id: 3, parent: null},
 *   {id: 4, parent: 3}
 * ]
 * flatArrayToTree(list, { pidKey: 'parent' })
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

export interface FlatArrayItem {
    [key: string]: any;
}

export interface TreeTransformOption {
    pidKey?: string;
    idKey?: string;
    childrenKey?: string;
}

const flatArrayToTree = (
    list: FlatArrayItem[],
    option: TreeTransformOption = { pidKey: 'pid', idKey: 'id', childrenKey: 'children' },
): FlatArrayItem[] => {
    // define keys
    const pidKey = option?.pidKey || 'pid';
    const idKey = option?.idKey || 'id';
    const childrenKey = option?.childrenKey || 'children';
    // define an id mapping object
    const map: FlatArrayItem = {};
    // define a result array to return
    const result: FlatArrayItem[] = [];

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

export default flatArrayToTree;
