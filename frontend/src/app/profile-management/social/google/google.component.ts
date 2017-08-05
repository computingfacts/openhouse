import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

declare const gapi: any;

interface IGoogleAuth {
    attachClickHandler(
        element: Element,
        o: Object,
        success: (user: IGoogleUser) => void,
        failure: (reason: string) => void
    ): void;
}

interface IGoogleUser {
    getBasicProfile(): IGoogleProfile;
}

interface IGoogleProfile {

}

/**<button #googleAuth class="btn btn-primary google">
            <span class="icon fa fa-google"></span>
            <span class="title">Google</span>
        </button> */

@Component({
    selector: "cf-google-auth",
    template: `
        <div id="my-signin2"></div>
    `,
    styleUrls: ["./google.style.css"]
})
export class GoogleAuthComponent implements AfterViewInit {

    private static readonly clientId = "920128576940-ht075v8i4d2udrkpiegm1m5rjqqaq105.apps.googleusercontent.com";
    private static readonly cookiePolicy = "single_host_origin";
    private static readonly scope = "profile email";

    @ViewChild("googleAuth") private googleAuth: ElementRef;

    public ngAfterViewInit(): void {
        this.attachButton();
    }

    private attachButton(): void {
        gapi.signin2.render("my-signin2", {
            scope: GoogleAuthComponent.scope,
            longtitle: true,
            theme: "light",
            onsuccess: user => this.handleGoogleUser(user.getBasicProfile()),
            onfailure: reason => this.handleFailure(reason)
        });
    }

    private handleGoogleUser(profile: IGoogleProfile): void {
        debugger;
    }

    private handleFailure(reason: string): void {
        debugger;
    }

}