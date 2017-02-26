var ClimbingApp;
(function (ClimbingApp) {
    var ApplicationController = (function () {
        function ApplicationController(UserService, $state) {
            this.UserService = UserService;
            this.$state = $state;
        }
        Object.defineProperty(ApplicationController.prototype, "isUserLoggedIn", {
            get: function () {
                return this.UserService.isLoggedIn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApplicationController.prototype, "user", {
            get: function () {
                return this.UserService.user;
            },
            enumerable: true,
            configurable: true
        });
        ApplicationController.prototype.logOut = function () {
            this.UserService.logOut();
            this.$state.go('Home');
        };
        return ApplicationController;
    }());
    ApplicationController.$inject = [
        'UserService',
        '$state'
    ];
    ClimbingApp.ApplicationController = ApplicationController;
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=app.controller.js.map