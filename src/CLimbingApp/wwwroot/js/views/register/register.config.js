var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Register;
        (function (Register) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('Register', {
                    url: '/register',
                    templateUrl: 'js/views/register/register.view.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                });
            }
            Register.Configuration = Configuration;
        })(Register = Views.Register || (Views.Register = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=register.config.js.map