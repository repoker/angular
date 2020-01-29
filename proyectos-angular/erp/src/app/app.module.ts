import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CommonsModule} from './commons/commons.module';
import {AppRoutingModule} from './app-routing.module';
import {CustomersModule} from './customers/customers.module';
import {SuppliersModule} from './suppliers/suppliers.module';
import {StoringModule} from './storing/storing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    CustomersModule,
    SuppliersModule,
    StoringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
