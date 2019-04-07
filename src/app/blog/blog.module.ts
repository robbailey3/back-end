import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogRoutingModule } from './blog-routing.module';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    BlogRootComponent,
    BlogListComponent,
    NewPostComponent,
    EditPostComponent
  ],
  imports: [CommonModule, BlogRoutingModule, SharedModule]
})
export class BlogModule {}
