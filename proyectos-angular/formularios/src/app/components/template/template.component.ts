import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario: Usuario = {
    nombre: null,
    apellido: null,
    correo: null
  };

  constructor() {
  }

  ngOnInit() {
  }

  guardar(formulario) {
    console.log('Formulario enviado');
    console.log(formulario.value);
    console.log(this.usuario);
    console.log(formulario);
  }
}
