import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

import { HamburgerButtonComponent } from './components/buttons/hamburgerButton/hamburgerButton.component';
import { CardComponent } from './components/card/card.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormItemComponent } from './forms/form-item/form-item.component';
import { CheckboxComponent } from './forms/form-items/checkbox/checkbox.component';
import { ChipsComponent } from './forms/form-items/chips/chips.component';
import { TinymceComponent } from './forms/form-items/tinymce/tinymce.component';
import { UploadComponent } from './forms/form-items/upload/upload.component';
import { FormComponent } from './forms/form/form.component';
import { ErrorLoggingService } from './services/error-logging.service';
import { LocationService } from './services/location.service';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';

@NgModule({
  declarations: [
    CardComponent,
    FlexContainerComponent,
    HamburgerButtonComponent,
    TinymceComponent,
    CheckboxComponent,
    FormComponent,
    FormItemComponent,
    LoaderComponent,
    UploadComponent,
    ChipsComponent,
    DialogComponent
  ],
  exports: [
    CardComponent,
    FlexContainerComponent,
    HamburgerButtonComponent,
    CheckboxComponent,
    FormComponent,
    LoaderComponent,
    DialogComponent
  ],
  imports: [CommonModule, EditorModule, FormsModule, ReactiveFormsModule],
  providers: [ErrorLoggingService, LocationService, DialogService]
})
export class SharedModule {}
