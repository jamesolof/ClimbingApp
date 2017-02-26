var ClimbingApp;
(function (ClimbingApp) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($http, $window) {
                this.$http = $http;
                this.$window = $window;
                this.isUserLoggedIn = false;
                this.authUser = new ClimbingApp.Models.UserModel();
                this.getSessionData();
            }
            Object.defineProperty(UserService.prototype, "isLoggedIn", {
                get: function () {
                    return this.isUserLoggedIn;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UserService.prototype, "user", {
                get: function () {
                    return this.authUser;
                },
                enumerable: true,
                configurable: true
            });
            UserService.prototype.getSessionData = function () {
                var user = this.$window.sessionStorage.getItem('user');
                if (user) {
                    this.authUser = JSON.parse(user);
                    this.isUserLoggedIn = true;
                    return;
                }
                this.authUser = ClimbingApp.Models.UserModel.getAnonymousUser();
                this.isUserLoggedIn = false;
                return;
            };
            UserService.prototype.clearSession = function () {
                this.$window.sessionStorage.clear();
                this.authUser = ClimbingApp.Models.UserModel.getAnonymousUser();
                this.isUserLoggedIn = false;
            };
            UserService.prototype.updateSession = function (user) {
                var encodedUser = JSON.stringify(user);
                console.info(encodedUser);
                if (encodedUser) {
                    this.$window.sessionStorage.setItem('user', encodedUser);
                    this.isUserLoggedIn = true;
                    return true;
                }
                this.clearSession();
                return false;
            };
            UserService.prototype.loginUser = function (user) {
                var _this = this;
                return this.$http.post('api/account/login', user, {
                    cache: false
                })
                    .then(function (response) {
                    console.info('user was succesfully login.');
                    _this.authUser = response.data;
                    return _this.isUserLoggedIn = true;
                })
                    .catch(function () {
                    console.info('user was not login');
                    return _this.updateSession(null);
                });
            };
            UserService.prototype.logOut = function () {
                var _this = this;
                this.$http.post('api/account/logoff', {
                    cache: false
                })
                    .then(function (response) {
                    console.info('user was succesfully logout.');
                    _this.authUser = null;
                    _this.isUserLoggedIn = false;
                })
                    .catch(function () {
                    console.info('user was not logout');
                });
            };
            return UserService;
        }());
        UserService.$inject = [
            '$http',
            '$window'
        ];
        Services.UserService = UserService;
    })(Services = ClimbingApp.Services || (ClimbingApp.Services = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=user.service.js.map