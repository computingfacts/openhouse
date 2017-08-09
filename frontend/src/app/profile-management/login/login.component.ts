import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { UserStoreService } from "../../../stores/user-store/user-store.service";

export interface ILoginFormGroup {
    username: string;
    password: string;
}

@Component({
    selector: "cf-login",
    templateUrl: "./login.template.html",
    styleUrls: ["./login.style.css"]
})
export class LoginComponent {

    public loginFormGroup: FormGroup;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly userStore: UserStoreService
    ) {
        this.initialiseFormGroup();
    }

    private initialiseFormGroup(): void {
        this.loginFormGroup = this.formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    public login(): void {
        if (this.loginFormGroup.invalid) {
            return;
        }

        const user: ILoginFormGroup = this.loginFormGroup.value;
        this.userStore.loginUser(user.username, user.password);
    }

}