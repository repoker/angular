export class Jugador {
  potencia: number;

  constructor() {
    this.potencia = 100;
  }

  colision(valor: number) {
    if (valor >= this.potencia) {
      this.potencia = 0;
    } else {
      this.potencia = this.potencia - valor;
    }
    return this.potencia;
  }
}
