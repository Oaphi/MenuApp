enum DocTypes {
  SPREADSHEET = "spreadsheet",
  PRESENTATION = "presentation",
  FORM = "form",
  DOCUMENT = "document",
}

const isCorrectUIgetter_ = (getter: Function) => {
  try {
    return !!getter();
  } catch (error) {
    return false;
  }
};

const getActiveUI_ = ({
  type = DocTypes.SPREADSHEET,
  onError = console.warn,
} = {}): GoogleAppsScript.Base.Ui | null => {
  const ActiveDocMap = new Map();

  ActiveDocMap.set(DocTypes.DOCUMENT, DocumentApp.getUi);
  ActiveDocMap.set(DocTypes.FORM, FormApp.getUi);
  ActiveDocMap.set(DocTypes.SPREADSHEET, SpreadsheetApp.getUi);
  ActiveDocMap.set(DocTypes.PRESENTATION, SlidesApp.getUi);

  const getter = ActiveDocMap.get(type);

  try {
    const valid = isCorrectUIgetter_(getter) ? getter : [...ActiveDocMap.values()].find(isCorrectUIgetter_);
    return valid();
  } catch (error) {
    onError(error);
    return null;
  }
};

export { DocTypes };

export { getActiveUI_ };
