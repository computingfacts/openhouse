import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfilePictureComponent } from "./profile-picture/profile-picture.component";
import { OrBreakComponent } from "./or-break/or-break.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { ThumbnailListComponent } from "./thumbnail-list/thumbnail-list.component";

@NgModule({

    imports: [
        CommonModule,
    ],

    declarations: [
        ProfilePictureComponent,
        OrBreakComponent,
        SpinnerComponent, 
        ThumbnailListComponent,
    ],

    exports: [
        ProfilePictureComponent,
        OrBreakComponent,
        SpinnerComponent,
        ThumbnailListComponent,
    ]

})
export class GeneralUiModule { }