import { APIResponse } from 'src/app/shared/interfaces/api-response';
import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';
import { Post } from '../post';

@Component({
  selector: 'rb-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts: Post[];
  constructor(private service: BlogService) {}

  ngOnInit() {
    this.getBlogPosts();
  }
  getBlogPosts() {
    this.service.getAll().subscribe((res: any) => {
      this.posts = res.response.results as Post[];
    });
  }
  deletePost(id: number) {
    this.service.deletePost(id).subscribe((res: APIResponse) => {
      if (res.response.status === 'ok') {
        this.getBlogPosts();
      }
    });
  }
}
