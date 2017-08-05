import { Component, TemplateRef } from "@angular/core";

@Component({
    selector: "cf-profile-management",
    templateUrl: "./profile-management.template.html",
    styleUrls: ["./profile-management.style.css"]
})
export class ProfileManagementComponent {

    public viewTemplate: TemplateRef<any>;

    public setTemplate(template: TemplateRef<any>): void {
        this.viewTemplate = template;
    }

    public cleanTemplate(): void {
        this.viewTemplate = null;
    }

    public userAuthenticated(): boolean {
        // TODO: Plumb in a service to get this
        return false;
    }

}