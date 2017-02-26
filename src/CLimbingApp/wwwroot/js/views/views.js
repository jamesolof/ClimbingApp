var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var module = angular.module('ClimbingApp.Views', [
            // Required SubModules
            'Views.Home',
            'Views.About',
            'Views.Register',
            'Views.Locations',
            'Views.Login'
        ]);
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=views.js.map