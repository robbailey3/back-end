import { ChipsQuestion } from 'src/app/shared/forms/questions/chips-question';
import { TextQuestion } from 'src/app/shared/forms/questions/text-question';
import { UploadQuestion } from 'src/app/shared/forms/questions/upload-question';
import { WysiwygQuestion } from 'src/app/shared/forms/questions/wysiwyg-question';

import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { QuestionBase } from '../../shared/forms/questions/question-base';
import { APIResponse } from '../../shared/interfaces/api-response';
import { BlogService } from '../blog.service';
import { Post } from '../post';

@Component({
  selector: 'rb-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  public postID: number;
  public post: Post;
  public questions: QuestionBase<any>[];
  constructor(
    private service: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getIDFromRoute();
    this.getData();
  }
  getData() {
    this.service.getPostByID(this.postID).subscribe((res: APIResponse) => {
      this.post = res.response.results as Post;
      this.initForm();
    });
  }
  getIDFromRoute() {
    this.route.paramMap.subscribe((route: Params) => {
      this.postID = route.params.id;
    });
  }
  initForm() {
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
    console.log(this.questions);
  }
  onSubmit(data: FormData) {
    this.service
      .updateExistingPost(this.postID, data)
      .subscribe((res: APIResponse) => {
        if (res.response.status === 'ok') {
          this.router.navigate(['/blog']);
        }
      });
  }
}
