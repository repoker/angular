import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {PeliculasComponent} from './components/peliculas/peliculas.component';

const APP_ROUTES: Routes = [{path: 'home', component: HomeComponent}, {path: 'about', component: AboutComponent}, {
  path: 'peliculas',
  component: PeliculasComponent
}, {path: '**', pathMatch: 'full', redirectTo: 'home'}];

export const RUTAS = RouterModule.forRoot(APP_ROUTES);
