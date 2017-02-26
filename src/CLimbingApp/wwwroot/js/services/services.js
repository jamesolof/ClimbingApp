var ClimbingApp;
(function (ClimbingApp) {
    var Services;
    (function (Services) {
        var module = angular.module('ClimbingApp.Services', []);
        module.service('LocationsService', Services.LocationsService);
        module.service('RoutesService', Services.RoutesService);
        module.service('RegistrationService', Services.RegistrationService);
        module.service('UserService', Services.UserService);
    })(Services = ClimbingApp.Services || (ClimbingApp.Services = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=services.js.map