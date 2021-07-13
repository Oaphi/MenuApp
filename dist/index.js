"use strict";
const isCorrectUIgetter_ = (getter) => {
    try {
        return !!getter();
    }
    catch (error) {
        return false;
    }
};
const getActiveUI_ = ({ type = DocTypes.SPREADSHEET, onError = console.warn, } = {}) => {
    const ActiveDocMap = new Map();
    ActiveDocMap.set(DocTypes.DOCUMENT, DocumentApp.getUi);
    ActiveDocMap.set(DocTypes.FORM, FormApp.getUi);
    ActiveDocMap.set(DocTypes.SPREADSHEET, SpreadsheetApp.getUi);
    ActiveDocMap.set(DocTypes.PRESENTATION, SlidesApp.getUi);
    const getter = ActiveDocMap.get(type);
    try {
        const valid = isCorrectUIgetter_(getter)
            ? getter
            : [...ActiveDocMap.values()].find(isCorrectUIgetter_);
        return valid();
    }
    catch (error) {
        onError(error);
        return null;
    }
};
const buildMenu_ = ({ docType = DocTypes.SPREADSHEET, append = true, title, items = [] } = {
    title: "Menu",
}) => {
    const ui = getActiveUI_({ type: docType });
    if (!ui)
        return null;
    const menu = ui.createMenu(title);
    items.forEach((item) => {
        const { title, type = ItemTypes.ITEM, action, items } = item;
        if (type === ItemTypes.MENU || items) {
            const submenu = buildMenu_({
                ...item,
                append: false,
                docType,
            });
            return submenu && menu.addSubMenu(submenu);
        }
        if (type === ItemTypes.ITEM)
            return menu.addItem(title, action);
        if (type === ItemTypes.SEPARATOR)
            return menu.addSeparator();
    });
    append && menu.addToUi();
    return menu;
};
var DocTypes;
(function (DocTypes) {
    DocTypes["SPREADSHEET"] = "spreadsheet";
    DocTypes["PRESENTATION"] = "presentation";
    DocTypes["FORM"] = "form";
    DocTypes["DOCUMENT"] = "document";
})(DocTypes || (DocTypes = {}));
var ItemTypes;
(function (ItemTypes) {
    ItemTypes["MENU"] = "menu";
    ItemTypes["ITEM"] = "item";
    ItemTypes["SEPARATOR"] = "separator";
})(ItemTypes || (ItemTypes = {}));
Object.assign(this, {
    DocTypes,
    ItemTypes,
    buildMenu: buildMenu_,
});
