import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRootComponent } from './photos-root/photos-root.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';

@NgModule({
  declarations: [PhotosRootComponent, PhotoAlbumsComponent, PhotoAlbumComponent],
  imports: [
    CommonModule
  ]
})
export class PhotosModule { }
