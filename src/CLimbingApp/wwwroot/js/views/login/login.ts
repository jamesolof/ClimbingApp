namespace ClimbingApp.Views.Login {
    let module: ng.IModule = angular.module('Views.Login', []);

    module.config(Login.Configuration);
    module.controller('LoginController',Login.LoginController);
}