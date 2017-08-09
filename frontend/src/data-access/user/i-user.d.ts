export interface IUser {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    token: string;
    isLoggedIn: boolean;
    detailsLoading: boolean;
    avatarHash: string,
    creationDate: string    ;
    isActive: boolean;
    profileImageUrl: string;
    profileType: string;
    userId: number;
}