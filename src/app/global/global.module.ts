import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavigationComponent, FooterComponent, HeaderComponent],
  exports: [NavigationComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class GlobalModule {}
