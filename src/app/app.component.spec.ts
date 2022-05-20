import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PhotoAlbumListComponent } from './components/photo-album-list/photo-album-list.component';

describe('AppComponent', () => {
  const component = AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PhotoAlbumListComponent
      ],
      providers: [
        HttpClient,
        HttpHandler
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'My Photo Album'`, () => {
    const fixture = TestBed.createComponent(component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My Photo Album');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('My Photo Album');
  });
});
