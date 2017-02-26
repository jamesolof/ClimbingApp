var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Locations;
        (function (Locations) {
            var LocationsController = (function () {
                function LocationsController(LocationsService, RoutesService) {
                    this.LocationsService = LocationsService;
                    this.RoutesService = RoutesService;
                    this.newRoute = new ClimbingApp.Models.Route;
                    this.locations = LocationsService.getAllLocations();
                    this.routes = RoutesService.getAllRoutes();
                }
                LocationsController.prototype.deleteRoute = function (id) {
                    this.RoutesService.deleteRoute(id);
                    debugger;
                    var index = _.findIndex(this.routes, function (item) {
                        return item.id === id;
                    });
                    this.routes.splice(index, 1);
                };
                LocationsController.prototype.saveRoute = function () {
                    var _this = this;
                    this.RoutesService.saveRoute(this.newRoute)
                        .then(function (route) {
                        _this.routes.push(route);
                    });
                    this.newRoute = new ClimbingApp.Models.Route();
                };
                return LocationsController;
            }());
            LocationsController.$inject = [
                'LocationsService',
                'RoutesService',
            ];
            Locations.LocationsController = LocationsController;
        })(Locations = Views.Locations || (Views.Locations = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=locations.controller.js.map