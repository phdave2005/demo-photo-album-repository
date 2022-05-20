import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PhotosService } from 'src/app/services/photos.service';
import { PhotoAlbumListComponent } from './photo-album-list.component';
import { IPhoto } from '../../interfaces/photo';

class MockPhotosService {
  getPhotos() {
    const res: Array<IPhoto> = [
      {
        albumId: 1,
        id: 1,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952'
      }
    ];

    return of(res);
  }
}

describe('PhotoAlbumListComponent', () => {
  let component: PhotoAlbumListComponent;
  let fixture: ComponentFixture<PhotoAlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAlbumListComponent ],
      providers: [
        { provide: PhotosService, useClass: MockPhotosService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
