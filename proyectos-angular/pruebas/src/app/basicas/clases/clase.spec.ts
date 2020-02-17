import {Jugador} from './clase';

describe('Pruebas de clase', () => {

  const jugador = new Jugador();
  beforeEach(() => {
    jugador.potencia = 100;
  });


  it('Debe devolver 80 de potencia si recibe 20 de colision', () => {
    const jugador = new Jugador(); // preparacion
    const resp = jugador.colision(20); // invocacion al SUT
    expect(resp).toBe(80); // evaluación
  });

  it('Debe devolver 50 de potencia si recibe 50 de colision', () => {
    const jugador = new Jugador();
    const resp = jugador.colision(50); // invocacion al SUT
    expect(resp).toBe(50); // evaluación
  });

});
