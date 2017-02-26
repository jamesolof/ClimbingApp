namespace ClimbingApp.Views.About {
    let module: ng.IModule = angular.module('Views.About', [])

    module.config(About.Configuration);
    module.controller("AboutController", About.AboutController);

}