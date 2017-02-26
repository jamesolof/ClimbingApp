var ClimbingApp;
(function (ClimbingApp) {
    var Models;
    (function (Models) {
        var LoginViewModel = (function () {
            function LoginViewModel() {
                this.email = '';
                this.password = '';
                this.rememberMe = false;
            }
            return LoginViewModel;
        }());
        Models.LoginViewModel = LoginViewModel;
    })(Models = ClimbingApp.Models || (ClimbingApp.Models = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=login.view.model.js.map