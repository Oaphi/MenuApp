
[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENCE)

# MenuApp

MenuApp is a small library for building custom menus from JSON configuration.

````
const menu = MenuApp.buildMenu({
    type  : MenuApp.DocTypes.DOCUMENT,
    title : "My Menu",
    items : [{
        title : "My Action",
        action : "runMyAction"
    },{
        title : "Submenu",
        items : [{
            title : "My Second Action",
            actions : "MyLib.doSomething"
        }]
    }],
    append : true
});
````
