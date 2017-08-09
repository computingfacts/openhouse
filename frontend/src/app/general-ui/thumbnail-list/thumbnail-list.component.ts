import { Component } from "@angular/core";

@Component({
    selector: "cf-thumbnail-list",
    templateUrl: "./thumbnail-list.template.html",
    styleUrls: ["./thumbnail-list.style.css"]
})
export class ThumbnailListComponent {

    public list = [];
    public displayItems = [];   

    constructor() {
        for (let i = 0; i < 5000; ++i) {
            this.list.push("Item number" + (i + 1));
        }
    }

    public loadMore(): void {
        console.log('Loading more');
    }

    public setDisplay(items): void {
        console.log('This is happening', items)
        this.displayItems = items;
    }

}