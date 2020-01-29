import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.parent.paramMap.subscribe(parametros => {
      console.log('RUTA HIJA');
      console.log(parametros);
    });
  }

  ngOnInit() {
  }

}
