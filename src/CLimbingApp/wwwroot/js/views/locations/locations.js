var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Locations;
        (function (Locations) {
            var module = angular.module('Views.Locations', []);
            module.config(Locations.Configuration);
            module.controller("LocationsController", Locations.LocationsController);
        })(Locations = Views.Locations || (Views.Locations = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=locations.js.map