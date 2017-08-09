import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SocialAuthModule } from "../social/social.module";
import { LoginComponent } from "./login.component";
import { GeneralUiModule } from "../../general-ui/general-ui.module";

@NgModule({
    imports: [ReactiveFormsModule, SocialAuthModule, GeneralUiModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }