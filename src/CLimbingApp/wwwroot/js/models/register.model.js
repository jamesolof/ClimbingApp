var ClimbingApp;
(function (ClimbingApp) {
    var Models;
    (function (Models) {
        var RegisterViewModel = (function () {
            function RegisterViewModel() {
                this.email = '';
                this.password = '';
                this.confirmPassword = '';
            }
            return RegisterViewModel;
        }());
        Models.RegisterViewModel = RegisterViewModel;
    })(Models = ClimbingApp.Models || (ClimbingApp.Models = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=register.model.js.map