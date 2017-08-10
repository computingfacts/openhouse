export interface IThumbnailDetails {
    // recipe: any;
    title: string;
    coverImageUrl?: string;
    description?: string;
    authorName: string;
    infoIcons?: IThumbnailInfoIcon[];
    isFavourite: boolean;
    rating: number;
}

export interface IThumbnailInfoIcon {
    iconClass?: string;
    tooltip: string;
    value?: number | string;
}