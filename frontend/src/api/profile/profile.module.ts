import { NgModule } from "@angular/core";
import { RequestBuilderModule } from "../base-http/request-builder.module";
import { ProfileApiService } from "./profile.service";

@NgModule({
    imports: [ RequestBuilderModule ],
    providers: [ ProfileApiService ]
})
export class ProfileApiModule { }