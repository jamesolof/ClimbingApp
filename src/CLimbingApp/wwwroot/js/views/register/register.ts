namespace ClimbingApp.Views.Register {
    let module: ng.IModule = angular.module('Views.Register', []);

    module.config(Register.Configuration);
    module.controller('RegisterController',Register.RegisterController);
}