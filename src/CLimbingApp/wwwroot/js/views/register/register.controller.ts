namespace ClimbingApp.Views.Register {
    export class RegisterController {
        public formData: Models.RegisterViewModel = new Models.RegisterViewModel;

        static $inject = [
            'RegistrationService',
            '$state'
        ];

        constructor(
            private RegistrationService: Services.RegistrationService,
            private $state: ng.ui.IStateService
        ) {
        }

        public registerUser(): void {
            //TODO: conplete reg proscess
            console.log("testing registration", this.formData);

            this.RegistrationService
                .registerUser(this.formData)
                .then((result: boolean) => {
                    if (result) {
                        this.$state.go('Login');
                    }
                });
        }
    }
}