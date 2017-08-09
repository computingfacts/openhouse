import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoresModule } from "../../../stores/stores.module";

import { LoginModule } from "../login/login.module";
import { SignupModule } from "../signup/signup.module";

import { BaseMenuService } from "./options/base-menu.service";

import { DrillDownMenuComponent } from "./drill-down-menu.component";
import { LoginMenuItemComponent } from "./options/login-menu-item.component";
import { SignupMenuItemComponent } from "./options/signup-menu-item.component";

@NgModule({

    imports: [
        CommonModule,
        StoresModule,
        LoginModule,
        SignupModule,
    ],

    declarations: [
        DrillDownMenuComponent,
        LoginMenuItemComponent,
        SignupMenuItemComponent,
    ],

    exports: [
        DrillDownMenuComponent,
        LoginMenuItemComponent,
        SignupMenuItemComponent,
    ],

    providers: [
        BaseMenuService,
    ]

})
export class DrillDownMenuModule {}