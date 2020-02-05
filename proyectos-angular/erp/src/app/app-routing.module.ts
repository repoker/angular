import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './commons/home/home.component';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {SupplierListComponent} from './suppliers/supplier-list/supplier-list.component';
import {StoringListComponent} from './storing/storing-list/storing-list.component';
import {NotFoundComponent} from './commons/not-found/not-found.component';
import {CustomerDataComponent} from './customers/customer-data/customer-data.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clientes', component: CustomerListComponent},
  {path: 'ver-cliente/:id', component: CustomerDataComponent},
  /*{path: 'proveedores', component: SupplierListComponent},*/
  {
    path: 'proveedores',
    /*loadChildren: './suppliers/suppliers.module#SuppliersModule'*/
    loadChildren: () => import('./suppliers/suppliers.module').then(m => m.SuppliersModule)
  },
  /*{path: 'almacen', component: StoringListComponent},*/
  {
    path: 'almacen',
    loadChildren: './storing/storing.module#StoringModule'
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
