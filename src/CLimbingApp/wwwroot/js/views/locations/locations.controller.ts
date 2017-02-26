namespace ClimbingApp.Views.Locations {
    export class LocationsController {
        public locations: Models.Location[];
        public routes: Models.Route[];
        public newRoute: Models.Route = new Models.Route;

        static $inject = [
            'LocationsService',
            'RoutesService',
            'UserService'
        ]

        constructor(
            private LocationsService: Services.LocationsService,
            private RoutesService: Services.RoutesService,
            private UserService: Services.UserService            
        ) {
            this.locations = LocationsService.getAllLocations();
            this.routes = RoutesService.getAllRoutes();
        }

        public deleteRoute(id: number): void {
            this.RoutesService.deleteRoute(id);


            var index = _.findIndex(this.routes, (item) =>{ 
                return item.id === id;
            });

            this.routes.splice(index, 1)
        }

        public canEdit():boolean {
            return this.UserService.isLoggedIn;
        }

        public sendIt(route: Models.Route): void {
            this.RoutesService.climbRoute(route)
        }

        public canDelete():boolean {
            return this.UserService.isLoggedIn
            && this.UserService.user.isAdmin;
        }
        public saveRoute(): void {
            this.RoutesService.saveRoute(this.newRoute)
                .then((route) => {
                    this.routes.push(route);
                });

            this.newRoute = new Models.Route();
        }
    }
}