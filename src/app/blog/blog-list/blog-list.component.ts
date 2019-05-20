import { Notification } from 'src/app/notifications/notification';
import { NotificationService } from 'src/app/notifications/notification.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
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
  constructor(
    private service: BlogService,
    private dialog: DialogService,
    private notification: NotificationService
  ) {}

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
  publishPost(id: number) {
    this.service.updateStatus(id, true).subscribe((res: APIResponse) => {
      if (res.response.status === 'ok') {
        this.notification.addNotification(
          new Notification('Post published 🚀', 'success', true)
        );
        this.getBlogPosts();
      }
    });
  }
  unPublishPost(id: number) {
    this.service.updateStatus(id, false).subscribe((res: APIResponse) => {
      if (res.response.status === 'ok') {
        this.notification.addNotification(
          new Notification('Post unpublished 🚀', 'success', true)
        );
        this.getBlogPosts();
      }
    });
  }
}
