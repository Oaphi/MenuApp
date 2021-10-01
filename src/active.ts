type ErrLoggable<T> = T & { onError?: (err: string | Error) => void };

type ActiveDocOptions = ErrLoggable<{
    type?: DocTypes;
}>;

type UserInterfaceGetter = () => GoogleAppsScript.Base.Ui;

const isCorrectUIgetter_ = (getter: UserInterfaceGetter) => {
    try {
        return !!getter();
    } catch (error) {
        return false;
    }
};

const getActiveUI_ = ({
    type = DocTypes.SPREADSHEET,
    onError = console.warn,
}: ActiveDocOptions = {}) => {
    const ActiveDocMap: Map<DocTypes, UserInterfaceGetter> = new Map();

    ActiveDocMap.set(DocTypes.DOCUMENT, DocumentApp.getUi);
    ActiveDocMap.set(DocTypes.FORM, FormApp.getUi);
    ActiveDocMap.set(DocTypes.SPREADSHEET, SpreadsheetApp.getUi);
    ActiveDocMap.set(DocTypes.PRESENTATION, SlidesApp.getUi);

    const getter = ActiveDocMap.get(type)!;

    try {
        const valid = isCorrectUIgetter_(getter)
            ? getter
            : [...ActiveDocMap.values()].find(isCorrectUIgetter_)!;
        return valid();
    } catch (error) {
        onError(error as Error);
        return null;
    }
};
