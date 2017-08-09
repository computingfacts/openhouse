import { Component } from "@angular/core";
import { ABaseSocialComponentController, BaseSocialUserComponent } from "../base-social-user-component/base-social-user-component";
import { RequestBuilderService } from "../../../../api/base-http/request-builder.service";

@Component(BaseSocialUserComponent.create(
    TwitterAuthComponent.client,
    TwitterAuthComponent.buttonColour,
))
export class TwitterAuthComponent extends ABaseSocialComponentController {

    public static readonly client = "twitter";
    public static readonly buttonColour = "pink";

    constructor(
        private readonly http: RequestBuilderService
    ) { super(); }

    public ngOnInit(): void {
        super.ngOnInit();
        this.http.createPostRequest("https://api.twitter.com/oauth/request_token", {
            oauth_callback: "http://localhost:4200"
        }).subscribe(a => console.log(a));
    }

    public ngAfterViewInit(): void {
        
    }

    public onClick(): void {
        
    }

}