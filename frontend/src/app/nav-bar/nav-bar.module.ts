import { NgModule } from "@angular/core";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { GeneralUiModule } from "../general-ui/general-ui.module";
import { ProfileManagementModule } from "../profile-management/profile-management.module";

import { NavBarComponent } from "./nav-bar.component";

import { LogoComponent } from "./logo/logo.component";
import { FilterCategoriesComponent } from "./filter-categories/filter-categories.component";
import { ProfileDropdownComponent } from "./profile/profile-dropdown.component";

@NgModule({

    imports: [
        NgbDropdownModule.forRoot(),
        GeneralUiModule,
        ProfileManagementModule
    ],

    declarations: [
        NavBarComponent,
        LogoComponent,
        FilterCategoriesComponent,
        ProfileDropdownComponent
    ],

    exports: [
        NavBarComponent
    ]
})
export class NavBarModule {}