import { NgModule } from "@angular/core";

import { SocialAuthComponent } from "./social.component";
import { GoogleAuthComponent } from "./google/google.component";
import { FacebookAuthComponent } from "./facebook/facebook.component";

@NgModule({

    declarations: [
        SocialAuthComponent,
        GoogleAuthComponent,
        FacebookAuthComponent,
    ],

    exports: [
        SocialAuthComponent
    ]

})
export class SocialAuthModule { }