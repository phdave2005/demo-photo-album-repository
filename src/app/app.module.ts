import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PhotoAlbumListComponent } from './components/photo-album-list/photo-album-list.component';
import { PhotoAlbumListItemComponent } from './components/photo-album-list-item/photo-album-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoAlbumListComponent,
    PhotoAlbumListItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
