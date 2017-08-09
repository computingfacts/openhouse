import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Subject, Observable } from "rxjs";
import { RequestBuilderService } from "../base-http/request-builder.service";

@Injectable()
export class ProfileApiService {

    private readonly profileUrl = "/profile";

    constructor(
        private readonly requestBuilder: RequestBuilderService,
    ) { }

    public getUserDetails(username: string): Observable<Response> {
        const userDetailsUrl = this.profileUrl + "/user?username=" + username;
        return this.requestBuilder.createGetRequest(userDetailsUrl);
    }
}