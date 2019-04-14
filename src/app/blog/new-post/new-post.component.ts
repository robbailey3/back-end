import { ChipsQuestion } from 'src/app/shared/forms/questions/chips-question';
import { TextQuestion } from 'src/app/shared/forms/questions/text-question';
import { UploadQuestion } from 'src/app/shared/forms/questions/upload-question';
import { WysiwygQuestion } from 'src/app/shared/forms/questions/wysiwyg-question';
import { APIResponse } from 'src/app/shared/interfaces/api-response';

import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BlogService } from '../blog.service';

@Component({
  selector: 'rb-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  public questions = [
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
      validators: [Validators.required]
    }),
    new TextQuestion({
      label: 'Post Description',
      key: 'description',
      validators: [Validators.required]
    }),
    new WysiwygQuestion({
      label: 'Post Content',
      key: 'content',
      validators: [Validators.required]
    }),
    new ChipsQuestion({
      label: 'Tags',
      key: 'categories',
      removable: true,
      validators: [Validators.required]
    })
  ];
  constructor(private service: BlogService, private router: Router) {}

  ngOnInit() {}
  onSubmit(data: FormData) {
    this.service.createNewPost(data).subscribe((res: APIResponse) => {
      if (res.response.status === 'ok') {
        this.router.navigate(['/blog']);
      }
    });
  }
}
