import { buildMenu_ } from "./builders";

declare namespace Menu {

  type buildMenu = typeof buildMenu_;

  export interface MenuApp {
    buildMenu : buildMenu;
  }

}

var MenuApp : Menu.MenuApp = (() => {

    return Object.seal({
      buildMenu : buildMenu_,
    });

})();

var buildMenu : Menu.buildMenu = (options) => MenuApp.buildMenu(options);

export { MenuApp, buildMenu };