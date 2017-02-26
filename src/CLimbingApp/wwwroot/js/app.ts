//define globval module here
namespace ClimbingApp {
    let module: ng.IModule = angular.module('ClimbingApp', [
        //external modules
        'ui.router',
        'ngResource',
        'ui.bootstrap',

        //application modules
        'ClimbingApp.Views',
        'ClimbingApp.Services'

    ]);

    module.controller('ApplicationController', ClimbingApp.ApplicationController);
    module.config(ClimbingApp.Configuration);

}