namespace ClimbingApp.Services {
    export class UserService {
        private isUserLoggedIn: boolean = false;
        private authUser: Models.UserModel = new Models.UserModel();

        public get isLoggedIn(): boolean {
            return this.isUserLoggedIn;
        }

        public get user(): Models.UserModel {
            return this.authUser;
        }

        static $inject = [
            '$http',
            '$window'
        ];

        constructor(
            private $http: ng.IHttpService,
            private $window: ng.IWindowService
        ) {
            this.getSessionData();
        }


        private getSessionData(): void {
            let user = this.$window.sessionStorage.getItem('user');

            if (user) {
                this.authUser = <Models.UserModel>JSON.parse(user);
                this.isUserLoggedIn = true;
                return;
            }
            this.authUser = Models.UserModel.getAnonymousUser();
            this.isUserLoggedIn = false;
            return;
        }

        private clearSession() {
            this.$window.sessionStorage.clear();
            this.authUser = Models.UserModel.getAnonymousUser();
            this.isUserLoggedIn = false;
        }


        private updateSession(user: Models.UserModel): boolean {
            var encodedUser = JSON.stringify(user);
            console.info(encodedUser);

            if (encodedUser) {
                this.$window.sessionStorage.setItem('user', encodedUser);
                this.isUserLoggedIn = true;
                return true;
            }
            this.clearSession();
            return false;
        }

        public loginUser(user: Models.LoginViewModel): ng.IPromise<boolean> {
            return this.$http.post<Models.UserModel>('api/account/login', user, <ng.IRequestShortcutConfig>{
                cache: false
            })
                .then((response) => {
                    console.info('user was succesfully login.')
                    this.authUser = response.data;

                    return this.isUserLoggedIn = true
                })
                .catch(() => {
                    console.info('user was not login')
                    return this.updateSession(null);
                })

        }

        public logOut(): void {
            this.$http.post<Models.UserModel>('api/account/logout', <ng.IRequestShortcutConfig>{
                cache: false
            })
                .then((response) => {
                    console.info('user was succesfully logout.')
                    this.authUser = null
                    this.isUserLoggedIn = false
                })
                .catch(() => {
                    console.info('user was not logout')
                });
        }
    }
}