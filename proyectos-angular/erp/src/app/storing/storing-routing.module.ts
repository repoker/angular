import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoringOutgoingComponent} from './storing-outgoing/storing-outgoing.component';
import {StoringIncomingComponent} from './storing-incoming/storing-incoming.component';
import {StoringListComponent} from './storing-list/storing-list.component';

const routes: Routes = [
  {path: '', component: StoringListComponent},
  {path: 'entradas', component: StoringIncomingComponent},
  {path: 'salidas', component: StoringOutgoingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoringRoutingModule { }
