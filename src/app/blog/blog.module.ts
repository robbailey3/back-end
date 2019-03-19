import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [BlogRootComponent, BlogListComponent, NewPostComponent, EditPostComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
