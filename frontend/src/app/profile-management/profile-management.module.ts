import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { StoresModule } from "../../stores/stores.module";
import { GeneralUiModule } from "../general-ui/general-ui.module";
import { SocialAuthModule } from "./social/social.module";

import { ProfileManagementComponent } from "./profile-management.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({

    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        StoresModule,
        GeneralUiModule,
        SocialAuthModule,
    ],

    declarations: [
        ProfileManagementComponent,
        LoginComponent,
        SignupComponent,
    ],

    exports: [
        ProfileManagementComponent
    ]

})
export class ProfileManagementModule { }