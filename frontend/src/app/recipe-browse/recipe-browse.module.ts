import { NgModule } from "@angular/core";
import { RecipeBrowseComponent } from "./recipe-browse.component";
import { GeneralUiModule } from "../general-ui/general-ui.module";

@NgModule({
    imports: [
        GeneralUiModule,
    ],

    declarations: [
        RecipeBrowseComponent
    ],

    exports: [
        RecipeBrowseComponent
    ]
})
export class RecipeBrowseModule { }