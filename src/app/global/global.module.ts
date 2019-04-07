import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent, FooterComponent, HeaderComponent],
  exports: [NavigationComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class GlobalModule {}
