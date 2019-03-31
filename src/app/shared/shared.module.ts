import { CheckboxComponent } from './forms/form-items/checkbox/checkbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { HamburgerButtonComponent } from './components/buttons/hamburgerButton/hamburgerButton.component';
import { TinymceComponent } from './forms/form-items/tinymce/tinymce.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormComponent } from './forms/form/form.component';
import { FormItemComponent } from './forms/form-item/form-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent,
    FlexContainerComponent,
    HamburgerButtonComponent,
    TinymceComponent,
    CheckboxComponent,
    FormComponent,
    FormItemComponent
  ],
  exports: [
    CardComponent,
    FlexContainerComponent,
    HamburgerButtonComponent,
    TinymceComponent,
    CheckboxComponent,
    FormComponent
  ],
  imports: [CommonModule, EditorModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
