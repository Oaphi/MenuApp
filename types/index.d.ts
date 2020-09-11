import { buildMenu_ } from "./builders";
declare namespace Menu {
    type buildMenu = typeof buildMenu_;
    interface MenuApp {
        buildMenu: buildMenu;
    }
}
declare var MenuApp: Menu.MenuApp;
declare var buildMenu: Menu.buildMenu;
export { MenuApp, buildMenu };
