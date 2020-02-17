import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuarioReactive} from '../../models/usuario-reactive';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  formulario: FormGroup;
  usuario: UsuarioReactive = {
    nombreCompleto: {
      nombre: 'Juan Luis',
      apellido: 'Garcia'
    },
    correo: 'juan.garcia@gmail.com',
    aficiones: ['']
  }

  constructor() {
    this.formulario = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
        apellido: new FormControl('', Validators.required)
      }),
      correo: new FormControl('', [ Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      aficiones: new FormArray([new FormControl('',
        [Validators.required, this.valAficion])]),
      nick: new FormControl('', Validators.required, this.valExisteNick)

    });
    // this.formulario.setValue(this.usuario);

    this.formulario.get('nombreCompleto.nombre').valueChanges.subscribe( datos => {
        console.log(datos);
      });

  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.formulario.value);
    console.log(this.formulario);
  }

  reiniciar() {
    this.formulario.reset(this.usuario);
  }

  nuevaAficion() {
    (this.formulario.get('aficiones') as FormArray)
        .push(new FormControl('', [Validators.required, this.valAficion]));
  }

  valAficion(control: FormControl) {
    if (control.value === 'programar') {
      return {
        retorno: true // No validado
      };
    }
    return null; // Validado
  }

  valExisteNick(control: FormControl): Promise<any>|Observable<any> {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'angular') {
            resolve({ existe: true });
          } else {
            resolve(null);
          }
        }, 3000);
      });
  }

}
