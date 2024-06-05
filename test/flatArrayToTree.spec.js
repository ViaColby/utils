import flatArrayToTree from '../src/flatArrayToTree';

describe('flatArrayToTree', () => {
    it('should return the correct tree list with default options', () => {
        const list = [
            { id: 1, pid: null },
            { id: 2, pid: 1 },
            { id: 3, pid: null },
            { id: 4, pid: 3 },
        ];
        const tree = flatArrayToTree(list);
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
        const tree = flatArrayToTree(list, {
            idKey: 'uuid',
            pidKey: 'parentId',
            childrenKey: 'child',
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
});
