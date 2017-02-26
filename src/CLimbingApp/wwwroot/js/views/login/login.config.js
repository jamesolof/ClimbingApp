var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Login;
        (function (Login) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('Login', {
                    url: '/Login',
                    templateUrl: 'js/views/login/login.view.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                });
            }
            Login.Configuration = Configuration;
        })(Login = Views.Login || (Views.Login = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=login.config.js.map