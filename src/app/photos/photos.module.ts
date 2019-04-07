import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { PhotosRootComponent } from './photos-root/photos-root.component';

@NgModule({
  declarations: [PhotosRootComponent, PhotoAlbumsComponent, PhotoAlbumComponent],
  imports: [
    CommonModule
  ]
})
export class PhotosModule { }
