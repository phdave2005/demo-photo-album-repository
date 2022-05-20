import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PhotoAlbumListItemComponent } from './photo-album-list-item.component';

describe('PhotoAlbumListItemComponent', () => {
  let component: PhotoAlbumListItemComponent;
  let fixture: ComponentFixture<PhotoAlbumListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAlbumListItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.albumId = 1;
    component.id = 1;
    component.title = 'accusamus beatae ad facilis cum similique qui sunt';
    component.url =  'https://via.placeholder.com/600/92c952';
    component.thumbnailUrl = 'https://via.placeholder.com/150/92c952';
    expect(component).toBeTruthy();
  });
});
