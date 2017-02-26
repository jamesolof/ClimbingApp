namespace ClimbingApp.Views.Locations {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Locations', <ng.ui.IState>{
                url: '/locations',
                templateUrl: 'js/views/locations/locations.view.html',
                controller: 'LocationsController',
                controllerAs: 'vm'
            });
    }
}