/////////////////////////////////////////////////////////////////////
// REQUIREJS CONFIG
/////////////////////////////////////////////////////////////////////
require.config({
    paths: {
        "jquery": "libs/vendor/jquery/dist/jquery",
        "bootstrap": "libs/vendor/bootstrap/dist/js/bootstrap.min",
        "console": "libs/vendor/console/console.min",
        "throbber": "libs/vendor/throbber.js/throbber",
        "fastClick":"libs/vendor/fastclick/lib/fastclick",
        "tools": "libs/tools",

    },
    shim: {
        "bootstrap": ["jquery"],
        "throbber": ["jquery"],
        "tools": ["jquery", "console"]
    }
});

/////////////////////////////////////////////////////////////////////
// ENTRY POINT
/////////////////////////////////////////////////////////////////////
require(["jquery", "tools", "fastClick", "bootstrap"], function($, tools, fastClick) {
    
    $(function() {
        fastClick.attach(document.body);
        //tools.displayMainLoader();
        //setTimeout(function(){tools.hideMainLoader()}, 2000);
        c("ok");
    });

});