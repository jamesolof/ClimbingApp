var ClimbingApp;
(function (ClimbingApp) {
    var Models;
    (function (Models) {
        var UserModel = (function () {
            function UserModel() {
                this.userName = '';
            }
            UserModel.getAnonymousUser = function () {
                var user = new Models.UserModel();
                user.userName = 'Anonymous';
                return user;
            };
            return UserModel;
        }());
        Models.UserModel = UserModel;
    })(Models = ClimbingApp.Models || (ClimbingApp.Models = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=user.model.js.map