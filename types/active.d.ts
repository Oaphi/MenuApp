/// <reference types="google-apps-script" />
declare type ErrLoggable<T> = T & {
    onError?: (err: string | Error) => void;
};
declare type ActiveDocOptions = ErrLoggable<{
    type?: DocTypes;
}>;
export declare enum DocTypes {
    SPREADSHEET = "spreadsheet",
    PRESENTATION = "presentation",
    FORM = "form",
    DOCUMENT = "document"
}
export declare const getActiveDoc_: ({ type, onError, }?: ActiveDocOptions) => GoogleAppsScript.Base.Ui | null;
export {};
