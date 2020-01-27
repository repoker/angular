import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Lucas';
  miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  ratio = 0.234;
  sueldo = 1234.5;
  info = {
    nombre: 'Juan',
    clave: 'jkg',
    edad: 26,
    direccion: {
      calle: 'Principal',
      numero: 2
    }
  };
  laPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Han llegado los datos'), 3500);
  });
  usuario = 'juan garcia'; // 'Garcia, Juan'
  contrasena = true;
  video = 'DD0JjcYv6Sg';
}
