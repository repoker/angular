import {MedicoComponent} from './medico.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MedicoService} from './medico.service';
import {HttpClientModule} from '@angular/common/http';

describe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule]

    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar el nombre del médico', () => {
    const nombre = 'Juan';
    const resp = component.saludarMedico(nombre);

    expect(resp).toContain(nombre);
  });

});
