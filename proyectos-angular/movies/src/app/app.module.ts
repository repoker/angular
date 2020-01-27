import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {PeliculasComponent} from './components/peliculas/peliculas.component';

// Rutas
import {RUTAS} from './app.routes';

// Servicios
import {PeliculasService} from './services/peliculas.service';

// Pipes
import {SmartTruncatePipe} from './pipes/smart-truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PeliculasComponent,
    SmartTruncatePipe
  ],
  imports: [
    BrowserModule, RUTAS
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
