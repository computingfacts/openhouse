import { NgModule } from "@angular/core";

import { ProfilePictureComponent } from "./profile-picture/profile-picture.component";
import { OrBreakComponent } from "./or-break/or-break.component";
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({

    declarations: [
        ProfilePictureComponent,
        OrBreakComponent,
        SpinnerComponent,
    ],

    exports: [
        ProfilePictureComponent,
        OrBreakComponent,
        SpinnerComponent,
    ]

})
export class GeneralUiModule { }