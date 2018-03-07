/*
 * Main AngularJS Application
 */
(function () {

    var appName = "docs";

    var app = angular.module(appName, [
        "ngRoute",
        "app-header-directive",
        "app-sidebar-directive", 
        "app-main-directive",
        "app-footer-directive",
        "static-route"
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */