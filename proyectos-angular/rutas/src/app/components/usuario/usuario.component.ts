import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({selector: 'app-usuario', templateUrl: './usuario.component.html', styleUrls: ['./usuario.component.css']})
export class UsuarioComponent {
  constructor(private router: ActivatedRoute) {
    this.router.paramMap.subscribe(parametros => {
      console.log('RUTA PADRE');
      console.log(parametros);
    });
  }
}
