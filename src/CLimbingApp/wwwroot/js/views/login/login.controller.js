var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Login;
        (function (Login) {
            var LoginController = (function () {
                function LoginController(UserService, $state) {
                    this.UserService = UserService;
                    this.$state = $state;
                    this.formData = new ClimbingApp.Models.LoginViewModel;
                }
                LoginController.prototype.loginUser = function () {
                    var _this = this;
                    //TODO: conplete reg proscess
                    console.log("testing login");
                    this.UserService
                        .loginUser(this.formData)
                        .then(function (result) {
                        if (result) {
                            _this.$state.go('Home');
                        }
                    });
                };
                return LoginController;
            }());
            LoginController.$inject = [
                'UserService',
                '$state'
            ];
            Login.LoginController = LoginController;
        })(Login = Views.Login || (Views.Login = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=login.controller.js.map