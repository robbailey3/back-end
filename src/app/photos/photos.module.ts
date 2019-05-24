import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { PhotosRootComponent } from './photos-root/photos-root.component';
import { PhotosRoutingModule } from './photos-routing.module';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { ExifPanelComponent } from './exif-panel/exif-panel.component';

@NgModule({
  declarations: [
    PhotosRootComponent,
    PhotoAlbumsComponent,
    PhotoAlbumComponent,
    UploadFormComponent,
    ExifPanelComponent
  ],
  imports: [CommonModule, PhotosRoutingModule, SharedModule, FormsModule]
})
export class PhotosModule {}
