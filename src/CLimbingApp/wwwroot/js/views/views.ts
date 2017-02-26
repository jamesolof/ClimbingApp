namespace ClimbingApp.Views {
    let module: ng.IModule = angular.module('ClimbingApp.Views', [
        // Required SubModules
        'Views.Home',
        'Views.About',
        'Views.Register',
        'Views.Locations',
        'Views.Login'

    ]);
}