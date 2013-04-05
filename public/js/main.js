require.config({
    "baseUrl": "js/lib",
    "config": {
        "../app/main.coffee.md": {
            "problems": [
               "js/app/one.coffee.md",
               "js/app/two.coffee.md"
            ]
        }
    },
    "paths": {
        "underscore": "underscore"
    },
    "shim": {
        "underscore": {
            "exports": "_"
        }
    }
});
require(['cs!../app/main.coffee.md'], function () {});
