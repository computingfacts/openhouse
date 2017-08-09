import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { StoresModule } from "../../stores/stores.module";
import { DrillDownMenuModule } from "./drill-down-menu/drill-down-menu.module";

import { ProfileManagementComponent } from "./profile-management.component";

@NgModule({

    imports: [
        BrowserModule,
        CommonModule,
        StoresModule,
        DrillDownMenuModule,
    ],

    declarations: [
        ProfileManagementComponent,
    ],

    exports: [
        ProfileManagementComponent
    ]

})
export class ProfileManagementModule { }