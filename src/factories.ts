interface MenuItem {
    type: ItemTypes.MENU;
    items: (MenuItem | SeparatorItem | ActionItem)[];
}

interface SeparatorItem {
    type: ItemTypes.SEPARATOR;
}

interface ActionItem {
    type: ItemTypes.ITEM;
    title: string;
    action: string;
}

const createAction_ = (
    title: string,
    action: (...args: any[]) => any
): ActionItem => ({
    type: ItemTypes.ITEM,
    title,
    action: action.name,
});

const createSeparator_ = (): SeparatorItem => ({
    type: ItemTypes.SEPARATOR,
});
