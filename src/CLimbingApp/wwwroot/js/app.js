//define globval module here
var ClimbingApp;
(function (ClimbingApp) {
    var module = angular.module('ClimbingApp', [
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
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=app.js.map