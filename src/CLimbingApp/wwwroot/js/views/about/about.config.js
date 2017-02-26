var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var About;
        (function (About) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('About', {
                    url: '/about',
                    templateUrl: 'js/views/about/about.view.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                });
            }
            About.Configuration = Configuration;
        })(About = Views.About || (Views.About = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=about.config.js.map