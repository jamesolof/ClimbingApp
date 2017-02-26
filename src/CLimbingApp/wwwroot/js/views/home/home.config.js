var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Home;
        (function (Home) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('Home', {
                    url: '/',
                    templateUrl: 'js/views/home/home.view.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                });
            }
            Home.Configuration = Configuration;
        })(Home = Views.Home || (Views.Home = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=home.config.js.map