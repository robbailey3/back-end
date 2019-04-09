import { TextQuestion } from 'src/app/shared/forms/questions/text-question';
import { WysiwygQuestion } from 'src/app/shared/forms/questions/wysiwyg-question';

import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UploadQuestion } from 'src/app/shared/forms/questions/upload-question';
import { BlogService } from '../blog.service';
import { APIResponse } from 'src/app/shared/interfaces/api-response';
import { ChipsQuestion } from 'src/app/shared/forms/questions/chips-question';

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
  constructor(private service: BlogService) {}

  ngOnInit() {}
  onSubmit(data: FormData) {
    this.service.createNewPost(data).subscribe((res: APIResponse) => {
      console.log(res);
    });
  }
}
