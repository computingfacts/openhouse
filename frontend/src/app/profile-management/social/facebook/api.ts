export type TFacebookResponseCallback = (response: IFacebookResponse) => void;

export interface IFacebookApi {
    init(settings: IFacebookSettings);
    login(callback: TFacebookResponseCallback, options: { scope: string });
    logout(callback: TFacebookResponseCallback);
    getLoginStatus(callback: TFacebookResponseCallback);
}

export interface IFacebookSettings {
    appId: string;
    cookie: boolean;
    xfbml: boolean;
    version: string;
}

export interface IFacebookResponse {
    status: "connected" | "not_authorized" | "unknown";
    authResponse: IFacebookUser;
}

export interface IFacebookUser {
    accessToken: string;
    expiresIn: string;
    signedRequest: string;
    userID: string;
}