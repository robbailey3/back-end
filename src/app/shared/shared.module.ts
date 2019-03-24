import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';

@NgModule({
  declarations: [CardComponent, FlexContainerComponent],
  exports: [CardComponent, FlexContainerComponent],
  imports: [CommonModule]
})
export class SharedModule {}
