[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

# MenuApp

MenuApp is a small library for building custom menus from JSON configuration.

```javascript
const menu = MenuApp.buildMenu({
    type: MenuApp.DocTypes.DOCUMENT,
    title: "My Menu",
    items: [
        {
            title: "My Action",
            action: runMyAction.name,
        },
        MenuApp.createActionItem("Item from function", myCallback),
        {
            title: "Submenu",
            items: [
                {
                    title: "My Second Action",
                    actions: "MyLib.doSomething",
                },
                MenuApp.createSeparatorItem(),
            ],
        },
    ],
    append: true,
});
```

The library exposes two utility enums accessible via `<user symbol>.<enum name>`:

Parent document type: `DocTypes`

| Value        |
| ------------ |
| SPREADSHEET  |
| PRESENTATION |
| FORM         |
| DOCUMENT     |

Menu item type (required if adding a special items): `ItemTypes`

| Value     |
| --------- |
| MENU      |
| ITEM      |
| SEPARATOR |

# Install

> Latest library version: 19

If developing locally, add the project info to manifest file's `dependencies.libraries` list:

| Field             | Required | Value                                                                    |
| ----------------- | -------- | ------------------------------------------------------------------------ |
| `libraryId`       | yes      | `1wr0xwr-RgfP0j9acfpJy2ESd3q4oqgM2bt0mgOemhRGS-U2N1XDxRuYk`              |
| `version`         | yes      | Library version you want to use                                          |
| `userSymbol`      | no       | The library name, `MenuApp` by default                                   |
| `developmentMode` | no       | Include the library in dev mode (will use any latest _unstable_ version) |

Sample JSON object to add:

```json
{
    "libraryId": "1wr0xwr-RgfP0j9acfpJy2ESd3q4oqgM2bt0mgOemhRGS-U2N1XDxRuYk",
    "userSymbol": "MenuApp",
    "version": "19",
    "developmentMode": false
}
```

Otherwise, use the new online editor UI to add the library (the id is the same as in `libraryId`):

![adding library via the online editor](./assets/library.png)
