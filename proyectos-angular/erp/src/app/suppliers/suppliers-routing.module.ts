import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupplierListComponent} from './supplier-list/supplier-list.component';
import {SupplierRequestComponent} from './supplier-request/supplier-request.component';

const routes: Routes = [
  {path: '', component: SupplierListComponent},
  {path: 'peticion/:id', component: SupplierRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
