import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MedicosComponent} from './intermedias/espias/medicos.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MedicosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
