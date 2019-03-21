import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NavigationComponent, FooterComponent, HeaderComponent],
  exports: [NavigationComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule]
})
export class GlobalModule {}
