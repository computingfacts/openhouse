import { Component, Input } from "@angular/core";
import { IThumbnailDetails } from "./thumbnail-details";

@Component({
    selector: "cf-thumbnail",
    templateUrl: "./thumbnail.template.html",
    styleUrls: ["./thumbnail.style.css"]
})
export class ThumbnailComponent {
    public maxRating = 5;
    @Input() public thumbnailDetails: IThumbnailDetails;
}