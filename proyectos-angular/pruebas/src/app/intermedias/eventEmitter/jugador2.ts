import {EventEmitter} from '@angular/core';

export class Jugador2 {
  potencia: number;
  potenciaCambia = new EventEmitter<number>(); // TIPO EMISOR EVENTOS

  constructor() {
    this.potencia = 100;
  }

  colision(valor: number) {
    if (valor >= this.potencia) {
      this.potencia = 0;
    } else {
      this.potencia = this.potencia - valor;
    }

    this.potenciaCambia.emit(this.potencia); // AQUÍ SE EMITE EL EVENTO
  }
}
