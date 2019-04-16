import { APIResponse } from 'src/app/shared/interfaces/api-response';
import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';
import { Post } from '../post';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

@Component({
  selector: 'rb-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts: Post[];
  constructor(private service: BlogService, private dialog: DialogService) {}

  ngOnInit() {
    this.getBlogPosts();
  }
  getBlogPosts() {
    this.service.getAll().subscribe((res: any) => {
      this.posts = res.response.results as Post[];
    });
  }
  deletePost(id: number) {
    this.dialog
      .confirm({
        content: 'Are you sure you want to delete this post?',
        title: 'Delete post?',
        confirmButtonTxt: 'Yes',
        declineButtonTxt: 'No'
      })
      .subscribe((res: boolean) => {
        if (res) {
          this.service.deletePost(id).subscribe((res: APIResponse) => {
            if (res.response.status === 'ok') {
              this.getBlogPosts();
            }
          });
        }
      });
  }
}
