namespace ClimbingApp.Views.Login {
    export class LoginController {
        public formData: Models.LoginViewModel = new Models.LoginViewModel;

        static $inject = [
            'UserService',
            '$state'
        ];

        constructor(
            private UserService: Services.UserService,
            private $state: ng.ui.IStateService
        ) {
        }

        public loginUser(): void {
            //TODO: conplete reg proscess
            console.log("testing login");

            this.UserService
                .loginUser(this.formData)
                .then((result: boolean) => {
                    if (result) {
                        this.$state.go('Home');
                    }
                })
        }
    }
}