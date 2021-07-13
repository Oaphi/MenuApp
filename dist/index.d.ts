/// <reference types="google-apps-script" />
declare type ErrLoggable<T> = T & {
    onError?: (err: string | Error) => void;
};
declare type ActiveDocOptions = ErrLoggable<{
    type?: DocTypes;
}>;
declare type UserInterfaceGetter = () => GoogleAppsScript.Base.Ui;
declare const isCorrectUIgetter_: (getter: UserInterfaceGetter) => boolean;
declare const getActiveUI_: ({ type, onError, }?: ActiveDocOptions) => GoogleAppsScript.Base.Ui | null;
interface ItemOptions {
    title: string;
    type?: ItemTypes;
    items?: ItemOptions[];
    action: string;
}
interface BuildMenuOptions {
    title: string;
    docType?: DocTypes;
    items?: ItemOptions[];
    append?: boolean;
    ui?: GoogleAppsScript.Base.Ui;
}
interface buildMenu {
    (options: BuildMenuOptions): GoogleAppsScript.Base.Menu | null;
}
declare const buildMenu_: buildMenu;
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
