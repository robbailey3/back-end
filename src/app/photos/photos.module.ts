import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { PhotosRootComponent } from './photos-root/photos-root.component';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
  declarations: [
    PhotosRootComponent,
    PhotoAlbumsComponent,
    PhotoAlbumComponent
  ],
  imports: [CommonModule, PhotosRoutingModule]
})
export class PhotosModule {}
