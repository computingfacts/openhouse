import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SocialAuthModule } from "../social/social.module";
import { SignupComponent } from "./signup.component";
import { GeneralUiModule } from "../../general-ui/general-ui.module";

@NgModule({
    imports: [ReactiveFormsModule, CommonModule, SocialAuthModule, GeneralUiModule],
    declarations: [SignupComponent],
    exports: [SignupComponent]
})
export class SignupModule { }