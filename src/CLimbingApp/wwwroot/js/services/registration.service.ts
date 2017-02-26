namespace ClimbingApp.Services {
    export class RegistrationService {
        static $inject = [
            '$http'
        ];

        constructor(
            private $http: ng.IHttpService
        ) { }

        public registerUser(user: Models.RegisterViewModel): ng.IPromise<boolean> {
            return this.$http.post<boolean>('api/account/register', user, <ng.IRequestShortcutConfig>{
                cache: false
            })
                .then((response) => {
                    console.info('user was succesfully created.')
                    return true
                })
                .catch(() => {
                    console.info('user was not created')
                    return false
                })

        }
    }
}