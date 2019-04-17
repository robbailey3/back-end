import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ErrorLogModule } from './error-log/error-log.module';
import { GlobalModule } from './global/global.module';
import { LoginComponent } from './login/login.component';
import { NotificationsModule } from './notifications/notifications.module';
import { PhotosModule } from './photos/photos.module';
import { JWTInterceptor } from './shared/http/jwt-interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    GlobalModule,
    BlogModule,
    ErrorLogModule,
    PhotosModule,
    HttpClientModule,
    FormsModule,
    NotificationsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
