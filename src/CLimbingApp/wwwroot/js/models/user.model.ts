namespace ClimbingApp.Models {
    export class UserModel {
        public userName: string = '';
        public isAdmin: boolean = false;

        public static getAnonymousUser(): Models.UserModel {
            let user = new Models.UserModel();
            user.userName = 'Anonymous';
            return user;
        }
    }
}