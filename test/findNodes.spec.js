import { findNodes } from '../src';

describe('findNodes', () => {
    it('should return an array of nodes that match the filter', () => {
        const tree = [
            {
                id: '1',
                value: 1,
                children: [{ id: '1-1', value: 2, children: [{ id: '1-1-2', value: 2 }] }],
            },
            { id: '2', value: 1 },
            { id: '3', value: 4, children: [{ id: '3-1', value: 1 }] },
        ];
        const result = findNodes(tree, node => node.value % 2 === 0);
        expect(result).toStrictEqual([
            { id: '1-1', value: 2, children: [{ id: '1-1-2', value: 2 }] },
            { id: '1-1-2', value: 2 },
            { id: '3', value: 4, children: [{ id: '3-1', value: 1 }] },
        ]);
    });

    it('should return an array of nodes that match the filter with changed children attribute', () => {
        const tree = [
            {
                id: '1',
                value: 1,
                subset: [{ id: '1-1', value: 2, subset: [{ id: '1-1-2', value: 2 }] }],
            },
            { id: '2', value: 1 },
            { id: '3', value: 4, subset: [{ id: '3-1', value: 1 }] },
        ];
        const result = findNodes(tree, node => node.value % 2 === 0, 'subset');
        expect(result).toStrictEqual([
            { id: '1-1', value: 2, subset: [{ id: '1-1-2', value: 2 }] },
            { id: '1-1-2', value: 2 },
            { id: '3', value: 4, subset: [{ id: '3-1', value: 1 }] },
        ]);
    });
});
