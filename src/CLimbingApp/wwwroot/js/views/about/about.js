var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var About;
        (function (About) {
            var module = angular.module('Views.About', []);
            module.config(About.Configuration);
            module.controller("AboutController", About.AboutController);
        })(About = Views.About || (Views.About = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=about.js.map