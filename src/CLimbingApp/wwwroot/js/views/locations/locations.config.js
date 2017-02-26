var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Locations;
        (function (Locations) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('Locations', {
                    url: '/locations',
                    templateUrl: 'js/views/locations/locations.view.html',
                    controller: 'LocationsController',
                    controllerAs: 'vm'
                });
            }
            Locations.Configuration = Configuration;
        })(Locations = Views.Locations || (Views.Locations = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=locations.config.js.map