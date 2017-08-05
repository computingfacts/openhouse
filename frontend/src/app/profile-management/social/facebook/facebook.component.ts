import { Component, AfterViewInit } from "@angular/core";

declare const initFB: () => void;
declare const FB: IFacebookApi;

interface IFacebookApi {
    login(callback: (response) => void, options: { scope: string });
    logout(callback: (response) => void);
    getLoginStatus(callback: (response) => void);
}

interface IFacebookLoginResponse {
    status: string;
}

@Component({
    selector: "cf-facebook-auth",
    template: `
        <div class="fb-login-button" 
             data-max-rows="1"
             data-size="large" 
             data-button-type="continue_with" 
             data-show-faces="false" 
             data-auto-logout-link="false" 
             data-use-continue-as="false">
        </div>
    `,
    styleUrls: ["./facebook.style.css"]
})
export class FacebookAuthComponent implements AfterViewInit {
    
      public ngAfterViewInit(): void {
          initFB();
      }
}