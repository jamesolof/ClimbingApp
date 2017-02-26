var ClimbingApp;
(function (ClimbingApp) {
    Configuration.$inject = [
        '$locationProvider',
        '$urlRouterProvider'
    ];
    function Configuration($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
        $urlRouterProvider.otherwise('/');
    }
    ClimbingApp.Configuration = Configuration;
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=app.config.js.map