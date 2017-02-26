namespace ClimbingApp.Views.Home {
    let module: ng.IModule = angular.module('Views.Home', [])

    module.config(Home.Configuration);
    module.controller("HomeController", Home.HomeController);

}