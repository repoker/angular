import {mensaje} from './string';

describe('Pruebas de strings', () => {

  it('Debe devolver un string', () => {
    const resp = mensaje('Lucas'); // invocación del SUT
    expect(typeof resp).toBe('string'); // evaluación
  });

  it('Debe devolver un string conteniendo un saludo con el nombre enviado', () => {
    const resp = mensaje('Lucas'); // invocación del SUT
    expect(resp).toBe('Saludos Lucas'); // evaluación
  });


});
