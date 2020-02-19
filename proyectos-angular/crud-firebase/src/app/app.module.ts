import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ProductoService} from './servicios/producto.service';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ListaProductosComponent } from './componentes/productos/lista-productos/lista-productos.component';
import { ProductoComponent } from './componentes/productos/producto/producto.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListaProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyADnbcArW8cw_NQHj_gLRQPEeVBmg4cIck",
      authDomain: "crud-firebase-4c942.firebaseapp.com",
      databaseURL: "https://crud-firebase-4c942.firebaseio.com",
      projectId: "crud-firebase-4c942",
      storageBucket: "crud-firebase-4c942.appspot.com",
      messagingSenderId: "484328989711",
      appId: "1:484328989711:web:1ae087e3a30a388cc02f7a"
    }),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
