import { Component } from "@angular/core";
import { ABaseMenuItem, DrillDownMenuItemComponentDefinition } from "./base-menu-item";
import { SignupMenuItemComponent } from "./signup-menu-item.component";
import { BaseMenuService } from "./base-menu.service";

@Component(DrillDownMenuItemComponentDefinition.create({
    itemKey: LoginMenuItemComponent.itemKey,
    iconClass: "fa fa-user",
    selector: "cf-login-menu-item",
    title: `<span i18n="@@login">Login</span>`,
    openTemplate: `
        <cf-login></cf-login>
        <div class="toggle-auth">
            <span class="label" i18n="@@dontHaveAnAccount">Don't have an account?</span>
            <a class="link" (click)="openAnotherItem('signup')" i18n="@@signup">
                Sign up
            </a>
        </div>
    `
}))
export class LoginMenuItemComponent extends ABaseMenuItem {

    public static readonly itemKey = "login";

    constructor(menuService: BaseMenuService) {
        super(menuService);
    }

    protected getItemKey(): string {
        return LoginMenuItemComponent.itemKey;
    }

}