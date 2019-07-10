import { Component, OnInit } from '@angular/core';

import { Notification } from '../../notifications/notification';
import { NotificationService } from '../../notifications/notification.service';
import { DialogService } from '../../shared/dialog/dialog.service';
import { APIResponse } from '../../shared/interfaces/api-response';
import { BlogService } from '../blog.service';
import { Post } from '../post';

/**
 * Component for the list of blog posts
 */
@Component({
  selector: 'rb-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  /**
   * An array of post items which will be retrieved
   * from the database
   */
  public posts: Post[];

  constructor(
    private service: BlogService,
    private dialog: DialogService,
    private notification: NotificationService
  ) {}

  /**
   * This method is part of the lifecycle of
   * an Angular component. The method is called
   * when the component is initialised.
   * In this case, the method makes a call to
   * the getBlogPosts method.
   */
  public ngOnInit() {
    this.getBlogPosts();
  }

  /**
   * This method subscribes to the `getAll` method
   * of the BlogService class. Results are retrieved from
   * the database and assigned to the instance member `posts`.
   */
  public getBlogPosts() {
    this.service.getAll().subscribe((res: any) => {
      this.posts = res.response.results as Post[];
    });
  }

  /**
   * This method opens up a new confirmation dialog
   * to determine whether the user definitely intends to
   * delete a blog post. If they do, a HTTP request is made
   * to the API (via the `blogService`) to delete the post.
   *
   * @param id The ID of the post to delete.
   */
  public deletePost(id: number) {
    this.dialog
      .confirm({
        content: 'Are you sure you want to delete this post?',
        title: 'Delete post?',
        confirmButtonTxt: 'Yes',
        declineButtonTxt: 'No'
      })
      .subscribe((res: boolean) => {
        if (res) {
          return this.service.deletePost(id);
        }
      });
  }

  /**
   * This method changes the status of a post to 'published'.
   * No confirmation is required for this.
   * A request is sent to the API via the `blogService` to
   * change the status.
   * @param id The ID of the post to publish
   */
  public publishPost(id: number) {
    this.service.updateStatus(id, true).subscribe((res: APIResponse) => {
      if (res.response.status === 'ok') {
        this.notification.addNotification(
          new Notification('Post published 🚀', 'success', true)
        );
        this.getBlogPosts();
      }
    });
  }

  /**
   * This method changes the status of a post to 'not published'.
   * No confirmation is required for this.
   * A request is sent to the API via the `blogService` to
   * change the status.
   * @param id The ID of the post to publish
   */
  public unPublishPost(id: number) {
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
