import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { UserStoreService } from "../../../stores/user-store/user-store.service";
import { SocialUserStoreService, IBaseSocialUser } from "../social/social-user-store/social-user-store.service";
import { IUser } from "../../../stores/user-store/user";

export interface ISignupFormGroup {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

@Component({
    selector: "cf-signup",
    templateUrl: "./signup.template.html",
    styleUrls: ["./signup.style.css"]
})
export class SignupComponent {

    public signupFormGroup: FormGroup;
    public pendingApproval: boolean;
    public signingUp = false;
    public errorMessage: string = null;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly userStore: UserStoreService,
        private readonly socialUserStore: SocialUserStoreService
    ) {
        this.initNormalUser();
        this.iniSocialUser();
    }

    private initNormalUser(): void {
        this.userStore.activeUser.subscribe(user => this.applyUser(user));
        const user = this.userStore.activeUser.getCurrentValue();
        this.applyUser(user);

    }

    private applyUser(user: IUser): void {
        this.pendingApproval = user != null && user.isActive === false;
        this.initialiseFormGroup();
    }

    private initialiseFormGroup(): void {
        this.signupFormGroup = this.formBuilder.group({
            email: ["", Validators.compose([Validators.required, Validators.email])],
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    private iniSocialUser(): void {
        this.socialUserStore.socialUser.subscribe(user => this.applySocialUser(user));

        const socialUser = this.socialUserStore.socialUser.getCurrentValue();
        if (socialUser != null) {
            this.applySocialUser(socialUser);
        }
    }

    private applySocialUser(socialUser: IBaseSocialUser): void {
        if (socialUser.loginError || socialUser.userId == null) {
            this.errorMessage = socialUser.loginError;
            return;
        }

        if (socialUser.isProfileComplete) {
            // TODO: Send the login request
            console.log("Sending signup for", socialUser);
            return;
        }

        this.signupFormGroup.removeControl("password");
        this.signupFormGroup.addControl("id", new FormControl(socialUser.userId));

        this.signupFormGroup.setValue({
            email: socialUser.email || "",
            firstName: socialUser.firstName || "",
            lastName: socialUser.lastName || ""
        });
    }

    public get showPassword(): boolean {
        return this.signupFormGroup.contains("password");
    }

    public signup(): void {
        if (this.signupFormGroup.invalid) {
            return;
        }

        this.signingUp = true;

        const user: ISignupFormGroup = this.signupFormGroup.value;
        this.userStore.signupUser(user.email, user.password, user.firstName, user.lastName)
            .subscribe(success => {
                this.signingUp = false;
                this.pendingApproval = success;
            });
    }

}