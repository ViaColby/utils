import findBranches from '../src/findBranches';

describe('findBranches', () => {
    it('should return a new tree matches the filter method with default children key', () => {
        const tree = [
            {
                id: '1',
                value: 1,
                children: [
                    {
                        id: '1-1',
                        value: 2,
                        children: [
                            {
                                id: '1-1-1',
                                value: 2,
                            },
                            {
                                id: '1-1-2',
                                value: 1,
                            },
                        ],
                    },
                    {
                        id: '1-2',
                        value: 3,
                        children: [
                            { id: '1-2-1', value: 1 },
                            { id: '1-2-2', value: 2 },
                        ],
                    },
                ],
            },
            {
                id: '2',
                value: 0,
                children: [{ id: '2-1', value: 1 }],
            },
        ];

        const result = findBranches(tree, node => node.value === 1);

        expect(result).toStrictEqual([
            {
                id: '1',
                value: 1,
                children: [
                    {
                        id: '1-1',
                        value: 2,
                        children: [
                            {
                                id: '1-1-2',
                                value: 1,
                            },
                        ],
                    },
                    {
                        id: '1-2',
                        value: 3,
                        children: [{ id: '1-2-1', value: 1 }],
                    },
                ],
            },
            {
                id: '2',
                value: 0,
                children: [{ id: '2-1', value: 1 }],
            },
        ]);
    });

    it('should return a new tree matches the filter method with changed children key', () => {
        const tree = [
            {
                id: '1',
                value: 1,
                subset: [
                    {
                        id: '1-1',
                        value: 2,
                        subset: [
                            {
                                id: '1-1-1',
                                value: 2,
                            },
                            {
                                id: '1-1-2',
                                value: 1,
                            },
                        ],
                    },
                    {
                        id: '1-2',
                        value: 3,
                        subset: [
                            { id: '1-2-1', value: 1 },
                            { id: '1-2-2', value: 2 },
                        ],
                    },
                ],
            },
            {
                id: '2',
                value: 0,
                subset: [{ id: '2-1', value: 1 }],
            },
        ];

        const result = findBranches(tree, node => node.value === 1, 'subset');

        expect(result).toStrictEqual([
            {
                id: '1',
                value: 1,
                subset: [
                    {
                        id: '1-1',
                        value: 2,
                        subset: [
                            {
                                id: '1-1-2',
                                value: 1,
                            },
                        ],
                    },
                    {
                        id: '1-2',
                        value: 3,
                        subset: [{ id: '1-2-1', value: 1 }],
                    },
                ],
            },
            {
                id: '2',
                value: 0,
                subset: [{ id: '2-1', value: 1 }],
            },
        ]);
    });
});
