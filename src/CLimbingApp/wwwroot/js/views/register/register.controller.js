var ClimbingApp;
(function (ClimbingApp) {
    var Views;
    (function (Views) {
        var Register;
        (function (Register) {
            var RegisterController = (function () {
                function RegisterController(RegistrationService, $state) {
                    this.RegistrationService = RegistrationService;
                    this.$state = $state;
                    this.formData = new ClimbingApp.Models.RegisterViewModel;
                }
                RegisterController.prototype.registerUser = function () {
                    var _this = this;
                    //TODO: conplete reg proscess
                    console.log("testing registration", this.formData);
                    this.RegistrationService
                        .registerUser(this.formData)
                        .then(function (result) {
                        if (result) {
                            _this.$state.go('Login');
                        }
                    });
                };
                return RegisterController;
            }());
            RegisterController.$inject = [
                'RegistrationService',
                '$state'
            ];
            Register.RegisterController = RegisterController;
        })(Register = Views.Register || (Views.Register = {}));
    })(Views = ClimbingApp.Views || (ClimbingApp.Views = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=register.controller.js.map