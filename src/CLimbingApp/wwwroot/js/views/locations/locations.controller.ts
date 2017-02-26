namespace ClimbingApp.Views.Locations {
    export class LocationsController {
        public locations: Models.Location[];
        public routes: Models.Route[];
        public newRoute: Models.Route = new Models.Route;

        static $inject = [
            'LocationsService',
            'RoutesService',
        ]

        constructor(
            private LocationsService: Services.LocationsService,
            private RoutesService: Services.RoutesService,            
        ) {
            this.locations = LocationsService.getAllLocations();
            this.routes = RoutesService.getAllRoutes();
        }

        public deleteRoute(id: number): void {
            this.RoutesService.deleteRoute(id);

            debugger;

            var index = _.findIndex(this.routes, (item) =>{ 
                return item.id === id;
            });

            this.routes.splice(index, 1)
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