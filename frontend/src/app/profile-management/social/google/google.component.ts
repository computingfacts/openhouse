import { Component, ViewChild, ElementRef } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SocialUserStoreService } from "../social-user-store/social-user-store.service";
import { BaseSocialUserComponent, ABaseSocialComponentController } from "../base-social-user-component/base-social-user-component";
import { IGoogleApi, IGoogleAuth, IGoogleProfile } from "./api";

declare const gapi: IGoogleApi;

@Component(BaseSocialUserComponent.create(
    GoogleAuthComponent.client, 
    GoogleAuthComponent.buttonColour,
    GoogleAuthComponent.initGoogleAuth
))
export class GoogleAuthComponent extends ABaseSocialComponentController {

    private static hasInit = false;
    private static readonly client = "google";
    private static readonly buttonColour = "#ffffff";
    private static readonly clientId = "920128576940-ht075v8i4d2udrkpiegm1m5rjqqaq105.apps.googleusercontent.com";
    private static readonly cookiePolicy = "single_host_origin";
    private static readonly scope = "profile email";

    private static auth2: IGoogleAuth;

    @ViewChild("googleAuth") private googleAuth: ElementRef;

    constructor(
        private readonly socialUserStore: SocialUserStoreService,
    ) { super(); }

    private static initGoogleAuth(): void {
        if (GoogleAuthComponent.hasInit) {
            return;
        }

        gapi.load("auth2", () => {
            GoogleAuthComponent.auth2 = gapi.auth2.init({
                client_id: GoogleAuthComponent.clientId,
                cookiepolicy: GoogleAuthComponent.cookiePolicy,
                scope: GoogleAuthComponent.scope
            });
        });
    }

    public ngAfterViewInit(): void {
        this.attachButton(GoogleAuthComponent.auth2);
    }

    private attachButton(auth: IGoogleAuth): void {
        this.spinning = false;
        auth.attachClickHandler(
            this.googleAuth.nativeElement,
            {},
            user => this.handleGoogleUser(user.getBasicProfile()),
            reason => this.handleFailure(reason)
        );
    }

    private handleGoogleUser(profile: IGoogleProfile): void {
        this.socialUserStore.setSocialUser({
            providerId: GoogleAuthComponent.client,
            userId: profile.getId(),
            email: profile.getEmail(),
            firstName: profile.getGivenName(),
            lastName: profile.getFamilyName()
        });
    }

    private handleFailure(reason: string): void {
        this.socialUserStore.loginFailed(reason, GoogleAuthComponent.client);
    }

    public onClick(): void {
        throw new Error("This should have been overridden");
    }

}