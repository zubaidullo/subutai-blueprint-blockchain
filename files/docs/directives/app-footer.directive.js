/*
 * Directive app-footer
 */
(function() {

    var module = angular.module("app-footer-directive", []);

    module.directive("appFooter", [
        function() {
            return {
                restrict: "E", 
                replace: true, 
                templateUrl: "views/app-footer.html"
            }
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */