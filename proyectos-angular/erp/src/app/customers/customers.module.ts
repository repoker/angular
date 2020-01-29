import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerDataComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports: [CustomerListComponent, CustomerDataComponent]
})
export class CustomersModule { }
