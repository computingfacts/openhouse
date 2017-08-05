import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HeaderProviderService } from "./header-provider.service";
import { RequestBuilderService } from "./request-builder.service";

import { LocalStorageModule } from "../../local-storage/local-storage.module";

@NgModule({
  imports: [HttpModule, LocalStorageModule],
  providers: [HeaderProviderService, RequestBuilderService],
})
export class RequestBuilderModule { }
