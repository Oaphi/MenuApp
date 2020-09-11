/// <reference types="google-apps-script" />
declare enum DocTypes {
    SPREADSHEET = "spreadsheet",
    PRESENTATION = "presentation",
    FORM = "form",
    DOCUMENT = "document"
}
declare enum ItemTypes {
    MENU = "menu",
    ITEM = "item",
    SEPARATOR = "separator"
}
declare interface ItemOptions {
    title: string;
    type?: ItemTypes;
    items?: ItemOptions[];
    action: string;
}
declare interface BuildMenuOptions {
    title: string;
    docType?: DocTypes;
    items?: ItemOptions[];
    append?: boolean;
}
declare interface buildMenu {
    (options: BuildMenuOptions): GoogleAppsScript.Base.Menu | null;
}
declare const buildMenu_: buildMenu;
export { buildMenu_ };
