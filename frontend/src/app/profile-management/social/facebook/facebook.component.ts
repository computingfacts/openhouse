import { Component } from "@angular/core";
import { IFacebookResponse, IFacebookUser, IFacebookApi } from "./api";
import { BaseSocialUserComponent, ABaseSocialComponentController } from "../base-social-user-component/base-social-user-component";

declare const FB: IFacebookApi;

@Component(BaseSocialUserComponent.create(
    FacebookAuthComponent.client,
    FacebookAuthComponent.buttonColour,
    FacebookAuthComponent.initFacebookService
))
export class FacebookAuthComponent extends ABaseSocialComponentController {

    private static hasInit = false;
    public static readonly client = "facebook";
    public static readonly buttonColour = "#3B5998";
    private static readonly appId = "252336858606968";
    private static readonly version = "v2.8";
    private static readonly scope = "public_profile,email";

    public static initFacebookService(): void {
        if (FacebookAuthComponent.hasInit) {
            return;
        }

        // FB.init({
        //     appId: FacebookAuthComponent.appId,
        //     cookie: true,
        //     xfbml: true,
        //     version: FacebookAuthComponent.version
        // });

        FacebookAuthComponent.hasInit = true;
    }

    public ngAfterViewInit(): void {
        FB.getLoginStatus(this.handleLoginStatus.bind(this));
    }

    private handleLoginStatus(response: IFacebookResponse): void {
        this.spinning = false;
        switch (response.status) {
            case "connected":
                this.handleUser(response.authResponse);
                break;
            case "not_authorized":
                this.handleLoginFail();
                break;
            case "unknown":
                break; // Don't do anything
            default:
                throw new Error("FacebookAuthComponent: unexpected response status");
        }
    }

    private handleUser(user: IFacebookUser): void {
        console.log(user);
    }

    private handleLoginFail(): void {
        debugger;
    }

    public onClick(): void {
        FB.login(
            this.handleLoginStatus.bind(this),
            { scope: FacebookAuthComponent.scope }
        );
    }
}