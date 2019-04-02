import { Component, OnInit } from '@angular/core';
import { TextQuestion } from 'src/app/shared/forms/questions/text-question';
import { Validators } from '@angular/forms';
import { WysiwygQuestion } from 'src/app/shared/forms/questions/wysiwyg-question';

@Component({
  selector: 'rb-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  public questions = [
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
    })
  ];
  constructor() {}

  ngOnInit() {}
}
