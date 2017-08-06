import { Injectable } from "@angular/core";
import { IStoreEntity, StoreEntity } from "../../../../stores/store-entity/store-entity";

export interface IBaseSocialUser {
    providerId: string;
    userId?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    isProfileComplete?: boolean;
    loginError?: string;
}

@Injectable()
export class SocialUserStoreService {

    public socialUser = new StoreEntity<IBaseSocialUser>();

    public setSocialUser(user: IBaseSocialUser): void {
        user.loginError = null;
        user.isProfileComplete = this.isProfileComplete(user);

        this.socialUser.setValue(user);
    }

    private isProfileComplete(profile: IBaseSocialUser): boolean {
        return profile.userId != null
            && profile.email != null;
    }

    public loginFailed(loginError: string, providerId: string): void {
        this.socialUser.setValue({ providerId, loginError });
    }

}