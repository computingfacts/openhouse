import { Component } from "@angular/core";
import { ABaseMenuItem, DrillDownMenuItemComponentDefinition } from "./base-menu-item";
import { LoginMenuItemComponent } from "./login-menu-item.component";
import { BaseMenuService } from "./base-menu.service";

@Component(DrillDownMenuItemComponentDefinition.create({
    iconClass: "fa fa-user-plus",
    itemKey: SignupMenuItemComponent.itemKey,
    selector: "cf-signup-menu-item",
    title: `<span i18n="@@signup">Sign up</span>`,
    openTemplate: `
        <cf-signup></cf-signup>
        <div class="toggle-auth">
            <span class="label" i18n="@@alreadyHaveAndAccount">Already have an account?</span>
            <a class="link" (click)="openAnotherItem('login')" i18n="@@login">Login</a>
        </div>
    `
}))
export class SignupMenuItemComponent extends ABaseMenuItem {
    public static readonly itemKey = "signup";

    constructor(menuService: BaseMenuService) {
        super(menuService);
    }

    protected getItemKey(): string {
        return SignupMenuItemComponent.itemKey;
    }
}