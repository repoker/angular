import {FormularioRegister} from './formulario';
import {FormBuilder} from '@angular/forms';

describe('Formularios', () => {
  let component: FormularioRegister;
  beforeEach(() => {
    component = new FormularioRegister(new FormBuilder());
  });

  it('Debe crear un formulario con dos campos: email y password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('El email debe ser obligatorio', () => {
    const control = component.form.get('email');
    control.setValue(''); // vacío
    expect(control.valid).toBeFalsy();
  });

  it('El email debe cumplir con el formato', () => {
    const control = component.form.get('email');
    control.setValue('micorreo@gmail.com');
    expect(control.valid).toBeTruthy();
  });

});
