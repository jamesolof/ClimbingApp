var ClimbingApp;
(function (ClimbingApp) {
    var Services;
    (function (Services) {
        var LocationsService = (function () {
            function LocationsService($resource) {
                this.LocationsResource = $resource('api/locations');
            }
            //get all Locations
            LocationsService.prototype.getAllLocations = function () {
                return this.LocationsResource.query();
            };
            return LocationsService;
        }());
        LocationsService.$inject = [
            '$resource'
        ];
        Services.LocationsService = LocationsService;
    })(Services = ClimbingApp.Services || (ClimbingApp.Services = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=locations.service.js.map