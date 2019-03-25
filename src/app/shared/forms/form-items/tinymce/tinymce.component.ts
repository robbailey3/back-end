import { Component, OnInit } from '@angular/core';

declare var tinymce: any;

@Component({
  selector: 'rb-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {
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
}
