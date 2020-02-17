import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
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
    correo: null,
    pais: '',
    genero: 'M',
    adulto: true
  }

  paises = [
    {codigo: 'ES', nombre: 'España'},
    {codigo: 'AR', nombre: 'Argentina'},
    {codigo: 'UK', nombre: 'Reino Unido'}
  ];

  generos = [
    {codigo: 'M', nombre: 'Mujer'},
    {codigo: 'H', nombre: 'Hombre'},
    {codigo: 'S', nombre: 'Sin definir'}
  ];

  constructor() { }

  ngOnInit() {
  }

  guardar(formulario: NgForm) {
    console.log('Formulario enviado');
    console.log(formulario.value);
    console.log(this.usuario);
    console.log(formulario);
  }
}
