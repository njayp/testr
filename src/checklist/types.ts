export interface Item {
    text: string;
    checked: boolean;
    children?: Item[];
}

export interface ItemState {
    item: Item
    setItem: (item: Item) => void
}

export const DefaultChecklist: Item[] = [
    {
        text: "Parent 1",
        checked: false,
        children: [
            {
                text: "Child 1",
                checked: false,
                children: [
                    {
                        text: "Grandchild 1",
                        checked: false,
                    },
                    {
                        text: "Grandchild 2",
                        checked: false,
                    },
                ],
            },
            {
                text: "Child 2",
                checked: false,
            },
        ],
    },
    {
        text: "Parent 2",
        checked: false,
        children: [
            {
                text: "Child 3",
                checked: false,
            },
            {
                text: "Child 4",
                checked: false,
            },
        ],
    },
]