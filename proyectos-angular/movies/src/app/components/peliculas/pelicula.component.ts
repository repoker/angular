import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Pelicula} from '../../models/peliculas/pelicula';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: Pelicula = {id: 0, titulo: '', sinopsis: '', img: '', anio: 0, direccion: ''};

  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params.id);
      this.pelicula = this.peliculasService.getPelicula(params.id);
    });

  }

  ngOnInit() {
  }

}
