var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClimbingApp;
(function (ClimbingApp) {
    var Services;
    (function (Services) {
        var ResourceService = (function () {
            function ResourceService() {
                this.updateResourceAction = {
                    'update': { method: 'PUT' }
                };
            }
            return ResourceService;
        }());
        Services.ResourceService = ResourceService;
        var RoutesService = (function (_super) {
            __extends(RoutesService, _super);
            function RoutesService($resource, $http) {
                var _this = _super.call(this) || this;
                _this.$http = $http;
                _this.RoutesResource = $resource('api/routes/:id', null, _this.updateResourceAction);
                return _this;
            }
            //get all Locations
            RoutesService.prototype.getAllRoutes = function () {
                return this.RoutesResource.query();
            };
            //save a new route
            RoutesService.prototype.saveRoute = function (movie) {
                return this.$http.post("api/routes/", movie)
                    .then(function (response) {
                    return response.data;
                });
            };
            RoutesService.prototype.deleteRoute = function (id) {
                debugger;
                this.RoutesResource.delete({ id: id });
            };
            return RoutesService;
        }(ResourceService));
        RoutesService.$inject = [
            '$resource',
            '$http'
        ];
        Services.RoutesService = RoutesService;
    })(Services = ClimbingApp.Services || (ClimbingApp.Services = {}));
})(ClimbingApp || (ClimbingApp = {}));
//# sourceMappingURL=routes.service.js.map