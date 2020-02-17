import {Jugador2} from './jugador2';

describe('Jugador2 emit', () => {
  let jugador: Jugador2;

  beforeEach(() => jugador = new Jugador2());

  it('Debe emitir un evento cuando colisiona', () => {
    let nuevaPotencia = 0;
    jugador.potenciaCambia.subscribe(potencia => {
      nuevaPotencia = potencia;
    });
    jugador.colision(1000); // invocacion al SUT
    expect(nuevaPotencia).toBe(0); // evaluación
  });

  it('Debe emitir un evento cuando colisiona y sobrevivir si es menos de 100', () => {
    let nuevaPotencia = 0;
    jugador.potenciaCambia.subscribe( potencia => {
      nuevaPotencia = potencia;
    });
    jugador.colision(50); // invocacion al SUT
    expect(nuevaPotencia).toBe(50); // evaluación
  });

});
