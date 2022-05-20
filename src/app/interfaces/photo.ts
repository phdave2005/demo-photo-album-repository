export interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface IControlText {
    defaultControlText: string;
    showLessControlText: string;
    showMoreControlText: string;
    customControlText: string;
}
