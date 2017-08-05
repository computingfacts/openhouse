import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { UserStoreService } from "../../../stores/user-store/user-store.service";
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

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly userStore: UserStoreService
    ) {
        const user = userStore.activeUser.getCurrentValue();
        this.initialise(user);

        userStore.activeUser.subscribe(user => this.initialise(user));
    }

    private initialise(user: IUser): void {
        console.log(user);
        if (user != null && user.isActive === false) this.pendingApproval = true;
        else this.initialiseFormGroup();
    }

    private initialiseFormGroup(): void {
        this.signupFormGroup = this.formBuilder.group({
            email: ["", Validators.compose([Validators.required, Validators.email])],
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            password: ["", Validators.required]
        });
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