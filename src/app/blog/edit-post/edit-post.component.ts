import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Notification } from '../../notifications/notification';
import { NotificationService } from '../../notifications/notification.service';
import { ChipsQuestion } from '../../shared/forms/questions/chips-question';
import { QuestionBase } from '../../shared/forms/questions/question-base';
import { TextQuestion } from '../../shared/forms/questions/text-question';
import { UploadQuestion } from '../../shared/forms/questions/upload-question';
import { WysiwygQuestion } from '../../shared/forms/questions/wysiwyg-question';
import { APIResponse } from '../../shared/interfaces/api-response';
import { BlogService } from '../blog.service';
import { Post } from '../post';

/**
 * A component which contains functionality to
 * edit posts
 *
 */
@Component({
  selector: 'rb-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  /**
   * The ID number of the post to edit
   */
  public postID: number;

  /**
   * The blog post which will be edited
   */
  public post: Post;

  /**
   * An array of questions which make up the
   * form displayed on the page.
   */
  public questions: QuestionBase<any>[];

  constructor(
    private service: BlogService,
    private notification: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * This method runs when the component is initialised.
   * It calls two other methods from this component.
   *
   * 1. getIdFromRoute
   * 2. getData
   */
  public ngOnInit() {
    this.getIDFromRoute();
    this.getData();
  }

  /**
   * This method retrieves data from the database then calls
   * [this.initForm]
   */
  public getData(): void {
    this.service.getPostByID(this.postID).subscribe((res: APIResponse) => {
      this.post = res.response.results as Post;
      this.initForm();
    });
  }

  /**
   * Retrieves the post ID from the current URL
   */
  public getIDFromRoute(): void {
    this.route.paramMap.subscribe((route: Params) => {
      this.postID = route.params.id;
    });
  }

  /**
   * Defines the questions that will be used on the
   * page
   */
  public initForm(): void {
    this.questions = [
      new UploadQuestion({
        key: 'files',
        multiple: false,
        label: 'Header Image',
        showFilePreviews: true,
        accept: 'image/*'
      }),
      new TextQuestion({
        label: 'Post Title',
        key: 'title',
        validators: [Validators.required],
        value: this.post.title
      }),
      new TextQuestion({
        label: 'Post Description',
        key: 'description',
        validators: [Validators.required],
        value: this.post.description
      }),
      new WysiwygQuestion({
        label: 'Post Content',
        key: 'content',
        validators: [Validators.required],
        value: this.post.content
      }),
      new ChipsQuestion({
        label: 'Tags',
        key: 'categories',
        removable: true,
        validators: [Validators.required],
        value: this.post.categories
      })
    ];
  }

  /**
   * Handles the submission of the form.
   * On success, a notification is displayed to
   * the user
   */
  public onSubmit(data: FormData) {
    this.service
      .updateExistingPost(this.postID, data)
      .subscribe((res: APIResponse) => {
        if (res.response.status === 'ok') {
          this.notification.addNotification(
            new Notification(
              `Post ${this.postID} successfully edited`,
              'success',
              true
            )
          );
          this.router.navigate(['/blog']);
        }
      });
  }
}
