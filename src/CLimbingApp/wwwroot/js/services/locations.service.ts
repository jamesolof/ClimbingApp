namespace ClimbingApp.Services {
    export class LocationsService {

        public LocationsResource: ng.resource.IResourceClass<Models.Location>;



        static $inject = [
            '$resource'
        ];


        constructor(
            $resource: ng.resource.IResourceService
        ) {
            this.LocationsResource = $resource<Models.Location>('api/locations');
        }

        //get all Locations
        public getAllLocations(): Models.Location[] {
            return this.LocationsResource.query();
        }

    }

}