import { Component, Input } from "@angular/core";

@Component({
    selector: "cf-profile-picture",
    template: `<i class="profile-picture fa fa-user-o"></i>`,
    styleUrls: ["./profile-picture.style.css"]
})
export class ProfilePictureComponent {

    @Input() public pictureHash: string;

    // TODO: Get the profile picture using the hash

}