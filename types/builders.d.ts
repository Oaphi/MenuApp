/// <reference types="google-apps-script" />
import { DocTypes } from "./active";
export declare enum ItemTypes {
    MENU = "menu",
    ITEM = "item",
    SEPARATOR = "separator"
}
export interface ItemOptions {
    title: string;
    type?: ItemTypes;
    items?: ItemOptions[];
    action: string;
}
export interface BuildMenuOptions {
    title: string;
    docType?: DocTypes;
    items?: ItemOptions[];
    append?: boolean;
}
export interface buildMenu {
    (options: BuildMenuOptions): GoogleAppsScript.Base.Menu | null;
}
export declare const buildMenu_: buildMenu;
