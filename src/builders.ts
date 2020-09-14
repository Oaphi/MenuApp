import { DocTypes, getActiveUI_ } from "./activeDoc";

enum ItemTypes {
  MENU = "menu",
  ITEM = "item",
  SEPARATOR = "separator",
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

const buildMenu_: buildMenu = (
  { docType = DocTypes.SPREADSHEET, append = true, title, items = [] } = {
    title: "Menu",
  }
) => {
  const ui = getActiveUI_({ type: docType });

  if (!ui) {
    return null;
  }

  const menu = ui.createMenu(title);

  items.forEach((item) => {
    const { title, type = ItemTypes.ITEM, action, items } = item;

    if (type === ItemTypes.MENU || items) {
      const submenuConfig = Object.assign(item, { append: false, docType });
      return menu.addSubMenu(buildMenu_(submenuConfig));
    }

    if (type === ItemTypes.ITEM) {
      return menu.addItem(title, action);
    }

    if (type === ItemTypes.SEPARATOR) {
      return menu.addSeparator();
    }
  });

  append && menu.addToUi();

  return menu;
};

export { buildMenu_, DocTypes };
