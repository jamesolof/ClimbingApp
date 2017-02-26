var ClimbingApp;
(function (ClimbingApp) {
    var Services;
    (function (Services) {
        var RegistrationService = (function () {
            function RegistrationService($http) {
                this.$http = $http;
            }
            RegistrationService.prototype.registerUser = function (user) {
                return this.$http.post('api/account/register', user, {
                    cache: false
                })
                    .then(function (response) {
                    console.info('user was succesfully created.');
                    return true;
                })
                    .catch(function () {
                    console.info('user was not created');
                    return false;
                });
            };
            return RegistrationService;
        }());
        RegistrationService.$inject = [
            '$http'
        ];
        Services.RegistrationService = RegistrationService;
    })(Services = ClimbingApp.Services || (ClimbingApp.Services = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=registration.service.js.map