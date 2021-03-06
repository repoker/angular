import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CommonsModule} from './commons/commons.module';
import {CustomersModule} from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, CommonsModule, CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
