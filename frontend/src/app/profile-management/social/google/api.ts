export interface IGoogleApi {
    load(libName: string, onLoad: Function);
    auth2: IGoogleAuth;
}

export interface IGoogleAuth {
    init(options: Object): IGoogleAuth;
    attachClickHandler(
        element: Element,
        o: Object,
        success: (user: IGoogleUser) => void,
        failure: (reason: string) => void
    ): void;
}

export interface IGoogleUser {
    getBasicProfile(): IGoogleProfile;
}

export interface IGoogleProfile {
    getId(): string;
    getName(): string;
    getGivenName(): string;
    getFamilyName(): string;
    getImageUrl(): string;
    getEmail(): string;
}