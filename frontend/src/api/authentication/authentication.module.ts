import { NgModule } from "@angular/core";
import { RequestBuilderModule } from "../base-http/request-builder.module";
import { AuthenticationApiService } from "./authentication.service";

@NgModule({
    imports: [ RequestBuilderModule ],
    providers: [ AuthenticationApiService ]
})
export class AuthenticationApiModule { }