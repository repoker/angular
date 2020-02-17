import {MedicosComponent} from './medicos.component';
import {MedicosService} from './medicos.service';
import {EMPTY, from, throwError} from 'rxjs';

describe('MedicosComponent', () => {

  const servicio = new MedicosService(null);
  let componente: MedicosComponent;

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe cargar los médicos', () => {
    const medicos = ['medico1, medico2, medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe llamar al método agregarMedico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return EMPTY;
    });
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe añadir un nuevo médico al array de médicos', () => {
    const medico = {id: 1, nombre: 'Juan'};
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
    componente.agregarMedico();
    expect(componente.medicos.length).toBe(1);
  });

  it('Si falla al añadir el medico, mensajeError debe ser igual al error del servicio', () => {
    const miError = 'No se puedo agregar el médico';
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe llamar al servidor para borrar un medico', () => {

    // Evitar ventana de confirm JavaScript
    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No debe llamar al servidor para borrar un medico', () => {

    // Evitar ventana de confirm JavaScript
    spyOn(window,'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

    componente.borrarMedico('1');

    expect(espia).not.toHaveBeenCalledWith('1');
  });

});
