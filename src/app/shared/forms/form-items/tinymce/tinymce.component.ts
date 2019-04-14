import { APIResponse } from 'src/app/shared/interfaces/api-response';

import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { BlogService } from '../../../../blog/blog.service';
import { Debug } from '../../../../global/debug';

declare var tinymce: any;

@Component({
  selector: 'rb-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TinymceComponent),
      multi: true
    }
  ]
})
export class TinymceComponent implements ControlValueAccessor {
  @Input() inline = false;
  @Input() value: string;
  onChange;
  public settings = {
    height: 400,
    plugins: `print preview searchreplace autolink directionality emoticons
      visualblocks visualchars fullscreen image link template codesample table
    charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists
      wordcount imagetools textpattern help code`,
    toolbar: `formatselect | bold italic strikethrough underline
      | link image media codesample | alignleft aligncenter
      alignright alignjustify  | numlist bullist outdent indent | removeformat code`,
    image_caption: true,
    style_formats: [
      { title: 'code', block: 'pre', inline: 'code', classes: 'prettyprint' }
    ],
    style_formats_merge: true,
    images_upload_handler: (blobInfo, success, error) => {
      const formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      this.blogService.postBlogImage(formData).subscribe(
        (res: APIResponse) => {
          success(res.response.results['uploads'][0]);
        },
        (err: any) => {
          error(err);
        }
      );
    },
    automatic_uploads: true,
    file_picker_types: 'image'
  };
  constructor(private blogService: BlogService) {}
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}

  change($event) {
    this.onChange(this.value);
  }
}
