var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Login;
        (function (Login) {
            var module = angular.module('Views.Login', []);
            module.config(Login.Configuration);
            module.controller('LoginController', Login.LoginController);
        })(Login = Views.Login || (Views.Login = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=login.js.map