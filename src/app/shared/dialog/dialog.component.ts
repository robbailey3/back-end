import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from './dialog.service';
import { Dialog } from './dialog';
import { fadeInDown } from '../animations';

@Component({
  selector: 'rb-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public open = false;
  public options?: Dialog;
  constructor(private service: DialogService) {}
  ngOnInit() {
    this.service.dialogOptions.subscribe((opt: Dialog) => {
      this.options = opt;
      if (this.options) {
        this.open = true;
      }
    });
  }
  confirm() {
    this.service.handleUserResponse(true);
    this.open = false;
    this.options = undefined;
  }
  decline() {
    this.service.handleUserResponse(false);
    this.open = false;
    this.options = undefined;
  }
}
