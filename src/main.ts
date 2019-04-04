import { Debug } from './app/global/debug';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
Debug.log({ APIUrl: environment.apiURL });
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
