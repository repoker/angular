import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import {RUTAS} from './app.routes';
import { SmartTruncatePipe } from './pipes/smart-truncate.pipe';
import { PeliculaComponent } from './components/peliculas/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PeliculasComponent,
    SmartTruncatePipe,
    PeliculaComponent
  ],
  imports: [
    BrowserModule, RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
