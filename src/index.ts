enum DocTypes {
    SPREADSHEET = "spreadsheet",
    PRESENTATION = "presentation",
    FORM = "form",
    DOCUMENT = "document",
}

enum ItemTypes {
    MENU = "menu",
    ITEM = "item",
    SEPARATOR = "separator",
}

Object.assign(this, {
    DocTypes,
    ItemTypes,
    buildMenu: buildMenu_,
    createActionItem: createAction_,
    createSeparatorItem: createSeparator_,
});
