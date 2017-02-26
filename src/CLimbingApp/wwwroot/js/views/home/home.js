var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Home;
        (function (Home) {
            var module = angular.module('Views.Home', []);
            module.config(Home.Configuration);
            module.controller("HomeController", Home.HomeController);
        })(Home = Views.Home || (Views.Home = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=home.js.map