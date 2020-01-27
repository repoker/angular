import {Component, OnInit} from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {Pelicula} from '../../models/peliculas/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];


  constructor(private peliculasService: PeliculasService) {
  }

  ngOnInit() {
    console.log(this.peliculas = this.peliculasService.getPeliculas());
  }

}
