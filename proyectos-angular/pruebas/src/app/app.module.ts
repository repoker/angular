import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MedicosComponent} from './intermedias/espias/medicos.component';
import { MedicoComponent } from './intermedias2/medico/medico.component';
import {HttpClientModule} from '@angular/common/http';
import { HospitalComponent } from './intermedias2/hospital/hospital.component';
import {IncrementadorComponent} from './intermedias2/incrementador/incrementador.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
