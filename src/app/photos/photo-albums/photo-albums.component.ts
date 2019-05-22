import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { TextQuestion } from '../../shared/forms/questions/text-question';
import { APIResponse } from '../../shared/interfaces/api-response';
import { Album } from '../album';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'rb-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {
  albums: Album[];
  modalState = 'inactive';
  public questions = [
    new TextQuestion({
      label: 'Album Name',
      key: 'name',
      validators: [Validators.required]
    })
  ];
  constructor(private service: PhotoService) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getAlbums().subscribe((response: APIResponse) => {
      this.albums = response.response.results as Album[];
    });
  }
  toggleModal() {
    this.modalState === 'inactive'
      ? (this.modalState = 'active')
      : (this.modalState = 'inactive');
  }
  onSubmit(data: object) {
    this.service.createAlbum(data).subscribe((res: APIResponse) => {
      if (res.response.status === 'ok') {
        this.modalState = 'inactive';

        this.questions[0].value = '';
        this.getData();
      }
    });
  }
}
