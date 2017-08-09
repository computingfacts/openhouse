import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IUser } from "../../data-access/user/i-user";
import { StoreEntity } from "../store-entity/store-entity";
import { LocalStorageService, ELocalStorageKeys } from "../../local-storage/local-storage.service";
import { AuthenticationApiService } from "../../api/authentication/authentication.service";
import { ProfileApiService } from "../../api/profile/profile.service";

@Injectable()
export class UserStoreService {

    public activeUser = new StoreEntity<IUser>();

    constructor(
        readonly localStorageService: LocalStorageService,
        private readonly authService: AuthenticationApiService,
        private readonly profileService: ProfileApiService,

    ) {
        localStorageService.registerStoreEntity(ELocalStorageKeys.ActiveUser, this.activeUser);
    }

    public signupUser(emailAddress: string, password: string, firstName: string, lastName: string): Subject<boolean> {
        const subject = new Subject<boolean>();

        this.authService.signup(emailAddress, password, firstName, lastName)
            .subscribe(userInfoResponse => {
                if (userInfoResponse.status !== 201) {
                    subject.next(false);
                    return;
                }

                this.applyToUser({ isActive: false });
                subject.next(true);
            });

        return subject;
    }

    public loginUser(usernameOrEmail: string, password: string): void {
        const username = usernameOrEmail.split("@")[0];
        this.authService.login(username, password)
            .subscribe(userResponse => {
                const user: IUser = userResponse.json();
                this.setUserSession(user.token, username);
                this.loadUserDetails();
            });
    }

    public logoutUser(): void {
        this.setUserSession(null);
    }

    private setUserSession(token: string | null, username?: string): void {
        if (token == null) {
            this.activeUser.setValue({ isLoggedIn: false } as IUser);
            return;
        }

        this.applyToUser({ token, username, isLoggedIn: true })
    }

    public loadUserDetails(): void {
        const user = this.getActiveUser();

        if (user.username == null) {
            return;
        }

        user.detailsLoading = true;
        this.activeUser.setValue(user);

        this.profileService.getUserDetails(user.username)
            .subscribe(userDetailsResponse => {
                const userDetails: Partial<IUser> = userDetailsResponse.json();
                userDetails.detailsLoading = false;
                this.applyToUser(userDetails);
            });
    }

    private applyToUser(extension: Partial<IUser>): void {
        const user = this.getActiveUser();
        const newUser = Object.assign(user, extension);
        console.log(newUser);
        this.activeUser.setValue(newUser);
    }

    private getActiveUser(): IUser {
        return this.activeUser.getCurrentValue() || {} as IUser;
    }
}