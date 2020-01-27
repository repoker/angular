import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

import {AppComponent} from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { OfuscatePipe } from './pipes/ofuscate.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    OfuscatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
