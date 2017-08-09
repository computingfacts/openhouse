import { Component, Input } from "@angular/core";
import { UserStoreService } from "../../../stores/user-store/user-store.service";
import { ABaseMenuItem } from "./options/base-menu-item";
import { IUser } from "../../../data-access/user/i-user";

@Component({
    selector: "cf-drill-down-menu",
    templateUrl: "./drill-down-menu.template.html",
    styleUrls: ["./drill-down-menu.style.css"],
})
export class DrillDownMenuComponent {
    @Input() public title?: string;
}