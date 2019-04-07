import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogRootComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BlogListComponent
      },
      {
        path: 'create',
        component: NewPostComponent
      },
      {
        path: 'edit/:id',
        component: EditPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
