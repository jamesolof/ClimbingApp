namespace ClimbingApp.Views.Locations {
    let module: ng.IModule = angular.module('Views.Locations', [])

    module.config(Locations.Configuration);
    module.controller("LocationsController", Locations.LocationsController);

}