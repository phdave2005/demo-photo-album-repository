import { async, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: PhotosService = TestBed.get(PhotosService);
    expect(service).toBeTruthy();
  });
});
