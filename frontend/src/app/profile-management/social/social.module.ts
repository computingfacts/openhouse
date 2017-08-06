import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GeneralUiModule } from "../../general-ui/general-ui.module";

import { SocialUserStoreService } from "./social-user-store/social-user-store.service";

import { SocialAuthComponent } from "./social.component";
import { GoogleAuthComponent } from "./google/google.component";
import { FacebookAuthComponent } from "./facebook/facebook.component";

import { GoogleAuthIconComponent } from "./base-social-user-component/google-icon.component";
import { FacebookAuthIconComponent } from "./base-social-user-component/facebook-icon.component";

@NgModule({

    imports: [
        CommonModule,
        GeneralUiModule
    ],

    declarations: [
        SocialAuthComponent,
        GoogleAuthComponent,
        FacebookAuthComponent,
        
        GoogleAuthIconComponent,
        FacebookAuthIconComponent,
    ],

    providers: [
        SocialUserStoreService,
    ],

    exports: [
        SocialAuthComponent
    ]

})
export class SocialAuthModule {}