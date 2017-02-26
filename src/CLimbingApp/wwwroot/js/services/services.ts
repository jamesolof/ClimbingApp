namespace ClimbingApp.Services {
    let module: ng.IModule = angular.module('ClimbingApp.Services', []);

    module.service('LocationsService', Services.LocationsService);
    module.service('RoutesService', Services.RoutesService);
    module.service('RegistrationService', Services.RegistrationService);
    module.service('UserService', Services.UserService)


}