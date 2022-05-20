import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DOWNLOAD_TEXT, OPEN_PHOTO_TEXT } from '../../constants/photo.constants';
import { IPhoto } from '../../interfaces/photo';

@Component({
  selector: 'app-photo-album-list-item',
  templateUrl: './photo-album-list-item.component.html',
  styleUrls: ['./photo-album-list-item.component.css']
})
export class PhotoAlbumListItemComponent implements OnInit, OnChanges {

  @Input() photo: IPhoto;

  public albumId: number;
  public id: number;
  public title: string;
  public url: string;
  public thumbnailUrl: string;

  public downloadText = DOWNLOAD_TEXT;
  public openText = OPEN_PHOTO_TEXT;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.albumId = this.photo.albumId;
    this.id = this.photo.id;
    this.title = this.photo.title;
    this.url = this.photo.url;
    this.thumbnailUrl = this.photo.thumbnailUrl;
  }
}
