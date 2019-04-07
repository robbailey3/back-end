import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
      wordcount imagetools textpattern help`,
    toolbar: `formatselect | bold italic strikethrough underline
      | link image media codesample | alignleft aligncenter
      alignright alignjustify  | numlist bullist outdent indent | removeformat`,
    image_caption: true,
    images_upload_url: 'postAcceptor.php',
    automatic_uploads: true,
    file_picker_types: 'image'
  };
  constructor() {}
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}

  change($event) {
    Debug.log($event);
    this.onChange(this.value);
  }
}
