var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Register;
        (function (Register) {
            var module = angular.module('Views.Register', []);
            module.config(Register.Configuration);
            module.controller('RegisterController', Register.RegisterController);
        })(Register = Views.Register || (Views.Register = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=register.js.map