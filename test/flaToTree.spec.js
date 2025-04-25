import { flatToTree } from '../src';

describe('flatArrayToTree', () => {
    it('should return the correct tree list with default options', () => {
        const list = [
            { id: 1, pid: null },
            { id: 2, pid: 1 },
            { id: 3, pid: null },
            { id: 4, pid: 3 },
        ];
        const tree = flatToTree(list);
        expect(tree).toStrictEqual([
            {
                id: 1,
                pid: null,
                children: [{ id: 2, pid: 1 }],
            },
            {
                id: 3,
                pid: null,
                children: [{ id: 4, pid: 3 }],
            },
        ]);
    });

    it('should return the correct tree list with non-default options', () => {
        const list = [
            { uuid: 1, parentId: null },
            { uuid: 2, parentId: 1 },
            { uuid: 3, parentId: null },
            { uuid: 4, parentId: 3 },
            { uuid: 5, parentId: 4 },
        ];
        const tree = flatToTree(list, {
            id: 'uuid',
            parent: 'parentId',
            children: 'child',
        });
        expect(tree).toStrictEqual([
            {
                uuid: 1,
                parentId: null,
                child: [{ uuid: 2, parentId: 1 }],
            },
            {
                uuid: 3,
                parentId: null,
                child: [
                    {
                        uuid: 4,
                        parentId: 3,
                        child: [{ uuid: 5, parentId: 4 }],
                    },
                ],
            },
        ]);
    });

    it('should return [] with no parameters', () => {
        const result = flatToTree();
        expect(result).toStrictEqual([]);
    });
});
