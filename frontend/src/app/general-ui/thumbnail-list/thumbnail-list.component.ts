import { Component } from "@angular/core";
import { IThumbnailDetails } from "./thumbnail/thumbnail-details";

@Component({
    selector: "cf-thumbnail-list",
    templateUrl: "./thumbnail-list.template.html",
    styleUrls: ["./thumbnail-list.style.css"]
})
export class ThumbnailListComponent {

    public thumbnails: IThumbnailDetails[] = [
        {
            title: "Pizza",
            description: "Something yummy for all occasions",
            coverImageUrl: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg",
            authorName: "Nicholas Robinson",
            isFavourite: false,
            rating: 4.5,
            infoIcons: [
                { iconClass: "fa fa-history", tooltip: "Prep time", value: "15m" },
                { iconClass: "fa fa-hourglass-o", tooltip: "Cooking time", value: "2h" },
                { iconClass: "fa fa-users", tooltip: "Serves", value: "4" },
            ]
        },
        {
            title: "Hamburger and chips and something to make the title wrap over more lines",
            description: "Something good for all occasions, this this one for some reason or another has gone on a little to make this really long",
            coverImageUrl: "https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg",
            authorName: "Someone else",
            isFavourite: true,
            rating: 1,
            infoIcons: [
                { iconClass: "fa fa-history", tooltip: "Prep time", value: "15m" },
                { iconClass: "fa fa-leaf", tooltip: "Vegetarian" },
                { iconClass: "fa fa-history", tooltip: "Prep time", value: "15m" },
                { iconClass: "fa fa-leaf", tooltip: "Vegetarian" },
            ]
        },
        {
            title: "Fish dish",
            description: "Something yummy for all occasions",
            coverImageUrl: "http://majalatouki.com/content/uploads/2015/12/salamon-486x324.jpg",
            authorName: "Nicholas Robinson",
            isFavourite: false,
            rating: 4.5,
            infoIcons: [
                { iconClass: "fa fa-history", tooltip: "Prep time", value: "15m" },
                { tooltip: "Gluten free", value: "GF" },
            ]
        },
        {
            title: "Best food ever",
            description: "Something yummy for all occasions",
            coverImageUrl: "https://i.pinimg.com/736x/ba/54/54/ba54544039e1310da2bfc32881cbd00a--fluffy-kittens-baby-kittens.jpg",
            authorName: "Nicholas Robinson",
            isFavourite: false,
            rating: 4.5,
        },
        {
            title: "Best food ever",
            description: "Something yummy for all occasions",
            coverImageUrl: "https://i.pinimg.com/736x/ba/54/54/ba54544039e1310da2bfc32881cbd00a--fluffy-kittens-baby-kittens.jpg",
            authorName: "Nicholas Robinson",
            isFavourite: false,
            rating: 4.5,
        },
        {
            title: "Best food ever",
            description: "Something yummy for all occasions",
            coverImageUrl: "https://i.pinimg.com/736x/ba/54/54/ba54544039e1310da2bfc32881cbd00a--fluffy-kittens-baby-kittens.jpg",
            authorName: "Nicholas Robinson",
            isFavourite: false,
            rating: 4.5,
        },
    ];

}