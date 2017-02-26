namespace ClimbingApp {

    Configuration.$inject = [
        '$locationProvider',
        '$urlRouterProvider'
    ];

    export function Configuration(
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

        $urlRouterProvider.otherwise('/');

    }
}