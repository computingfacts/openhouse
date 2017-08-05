import { NgModule } from "@angular/core";
import { LocalStorageModule } from "../local-storage/local-storage.module";
import { UserStoreService } from "./user-store/user-store.service";
import { ProfileApiModule } from "../api/profile/profile.module";
import { AuthenticationApiModule } from "../api/authentication/authentication.module";

@NgModule({

    imports: [
        LocalStorageModule,
        AuthenticationApiModule,
        ProfileApiModule
    ],

    providers: [ UserStoreService ]
})
export class StoresModule {}