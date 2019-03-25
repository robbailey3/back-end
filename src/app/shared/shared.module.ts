import { CheckboxComponent } from './forms/form-items/checkbox/checkbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { HamburgerButtonComponent } from './components/buttons/hamburgerButton/hamburgerButton.component';
import { TinymceComponent } from './forms/form-items/tinymce/tinymce.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    CardComponent,
    FlexContainerComponent,
    HamburgerButtonComponent,
    TinymceComponent,
    CheckboxComponent
  ],
  exports: [
    CardComponent,
    FlexContainerComponent,
    HamburgerButtonComponent,
    TinymceComponent,
    CheckboxComponent
  ],
  imports: [CommonModule, EditorModule]
})
export class SharedModule {}
