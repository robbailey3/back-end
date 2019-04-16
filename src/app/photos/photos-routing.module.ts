import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { PhotosRootComponent } from './photos-root/photos-root.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';

const routes: Routes = [
  {
    path: 'photos',
    component: PhotosRootComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PhotoAlbumsComponent
      },
      {
        path: 'album/:id',
        component: PhotoAlbumComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule {}
