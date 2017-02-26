namespace ClimbingApp.Services {

    export class ResourceService {
        protected updateResourceAction: ng.resource.IActionHash = {
            'update': { method: 'PUT' }
        }
    }

    export class RoutesService extends ResourceService {

        public RoutesResource: ng.resource.IResourceClass<Models.Route>;

        static $inject = [
            '$resource',
            '$http'
        ];

        constructor(
            $resource: ng.resource.IResourceService,
            private $http: ng.IHttpService
        ) {
            super();
            this.RoutesResource = $resource<Models.Route, IRouteResourceClass>
                ('api/routes/:id', null, this.updateResourceAction);

        }



        //get all Locations
        public getAllRoutes(): Models.Route[] {
            return this.RoutesResource.query();
        }

        //save a new route
        public saveRoute(route: Models.Route): ng.IPromise<Models.Route> {

            return this.$http.post<Models.Route>(`api/routes/`, route)
                .then((response) => {
                    return response.data
                });

        }

        public climbRoute(route: Models.Route) {
            if (route.wasClimbed) {
                route.wasClimbed = false;
                return this.$http.put<Models.Route>(`api/routes`, route)
                    .then((response) => {
                        return response.data
                    });
            }
            if (!route.wasClimbed) {
                route.wasClimbed = true;
                return this.$http.put<Models.Route>(`api/routes`, route)
                    .then((response) => {
                        return response.data
                    });
            }
        }

        public deleteRoute(id: number): void {
            debugger
            this.RoutesResource.delete({ id: id });
         }



    }


    interface IRouteResourceClass extends IUpdatableResourceClass<Models.Route> {

    }

    interface IUpdatableResourceClass<T> extends ng.resource.IResourceClass<T> {
        Update(): T;
        update(params: Object): T;
        update(success: Function, error?: Function): T;
        update(params: Object, success: Function, error?: Function): T;
        update(params: Object, data: Object, success?: Function, error?: Function): T;

    }
}

