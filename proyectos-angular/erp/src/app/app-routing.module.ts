import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './commons/home/home.component';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {StoringListComponent} from './storing/storing-list/storing-list.component';
import {SupplierListComponent} from './suppliers/supplier-list/supplier-list.component';
import {NotFoundComponent} from './commons/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clientes', component: CustomerListComponent},
  {path: 'proveedores', component: SupplierListComponent},
  // {path: 'almacen', component: StoringListComponent},
  {
    path: 'almacen',
    loadChildren: './storing/storing.module#StoringModule'
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
