import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Subject, Observable } from "rxjs";
import { RequestBuilderService } from "../base-http/request-builder.service";

@Injectable()
export class AuthenticationApiService {

    private readonly authenticationUrl = "/auth";

    constructor(
        private readonly requestBuilder: RequestBuilderService,
    ) { }

    public login(username: string, passwordString: string): Observable<Response> {
        const url = this.authenticationUrl + "/login";

        const password = this.hashPassword(passwordString);
        const loginUser = { username, password };

        return this.requestBuilder
            .createPostRequest(url, loginUser)
    }

    private hashPassword(password: string): string {
        // TODO: implement hash function
        return password;
    }

    public signup(emailAddress: string, passwordString: string, firstName: string, lastName: string): Observable<Response> {
        const url = this.authenticationUrl + "/signup";

        const password = this.hashPassword(passwordString);

        return this.requestBuilder
            .createPostRequest(url, { emailAddress, password, firstName, lastName });
    }

}

/**
 * Google:
 * ClientId: 920128576940-ht075v8i4d2udrkpiegm1m5rjqqaq105.apps.googleusercontent.com
 * Secret:   TQEyodM1jqq-pH7EbEYzwHdx
 * 
 * Facebook:
 * 
 * 
 * 
 * Twitter:
 * 
 * 
 */