import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbRatingModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

import { ProfilePictureComponent } from "./profile-picture/profile-picture.component";
import { OrBreakComponent } from "./or-break/or-break.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { ThumbnailListComponent } from "./thumbnail-list/thumbnail-list.component";
import { ThumbnailComponent } from "./thumbnail-list/thumbnail/thumbnail.component";

@NgModule({

    imports: [
        CommonModule,
        NgbRatingModule.forRoot(),
        NgbCarouselModule.forRoot(),
    ],

    declarations: [
        ProfilePictureComponent,
        OrBreakComponent,
        SpinnerComponent,
        ThumbnailListComponent,
        ThumbnailComponent,
    ],

    exports: [
        ProfilePictureComponent,
        OrBreakComponent,
        SpinnerComponent,
        ThumbnailListComponent,
    ]

})
export class GeneralUiModule { }