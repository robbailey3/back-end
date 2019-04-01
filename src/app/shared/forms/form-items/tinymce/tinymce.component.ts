import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class TinymceComponent implements OnInit, ControlValueAccessor {
  @Input() value: string;
  @Input() inline = false;
  val: string;
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
  ngOnInit() {}
  onChange() {
    console.log(this.value);
    this.propagateChange(this.value);
  }
  writeValue(value: string) {
    if (value) {
      this.val = value;
    }
  }
  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
