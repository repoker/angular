import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})

export class PromesasComponent {
  constructor() {
    this.contarTres()
      .then((mensaje) => console.log('Promesa finalizada', ' - ', mensaje))
      .catch(error => console.error('Error en la promesa'));
  };


  contarTres(): Promise<any> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador === 3) {
          resolve('Todo ok');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

  ngOnInit() {
  }

}
