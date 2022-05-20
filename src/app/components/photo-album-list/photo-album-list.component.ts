import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import {
  PHOTOS_BASEPATH,
  DEFAULT_CONTROL_TEXT,
  SHOW_LESS_CONTROL_TEXT,
  SHOW_MORE_CONTROL_TEXT,
  CUSTOM_CONTROL_TEXT
} from '../../constants/photo.constants';
import {
  IPhoto,
  IControlText
} from '../../interfaces/photo';

@Component({
  selector: 'app-photo-album-list',
  templateUrl: './photo-album-list.component.html',
  styleUrls: ['./photo-album-list.component.css']
})
export class PhotoAlbumListComponent implements OnInit {

  public photos: Array<any> = [];
  public basepath: string = PHOTOS_BASEPATH;
  public controlText: IControlText = {
    defaultControlText: DEFAULT_CONTROL_TEXT,
    showLessControlText: SHOW_LESS_CONTROL_TEXT,
    showMoreControlText: SHOW_MORE_CONTROL_TEXT,
    customControlText: CUSTOM_CONTROL_TEXT
  };
  public startAt = 0;
  public defaultLimit = 20;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.selectPhotos(this.defaultLimit);
  }

  public selectPhotos(limit: number): any {
    const url = this.constructUrl(limit);
    this.photosService.getPhotos(url).subscribe((response: Array<IPhoto>) => {
      this.photos = response;
    });
  }

  private constructUrl(limit: number): string {
    return this.basepath + '?_start=' + this.startAt + '&_limit=' + limit;
  }

  public setStartAt($event: any) {
    if ($event.target.value && $event.target.value.match(/^\d+$/)) {
      this.startAt = Number($event.target.value) - 1;
    } else {
      this.startAt = 0;
    }
  }
}
