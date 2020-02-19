import {TestBed, ComponentFixture} from '@angular/core/testing';
import {IncrementadorComponent} from './incrementador.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';


describe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('Debe mostrar leyenda', () => {
    component.leyenda = 'Progreso de carga';
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('Progreso de carga');
  });

  it('Debe mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const elem = input.nativeElement;
      expect(elem.value).toBe('55');
    });
  });

  it('Debe incremetar o decrementar en 5 con un clic en el botón', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    // Programaticamente pulsamos el primer botón (el que resta)
    // El null es porque queremos ignorar información sobre las coordenas de la pantalla
    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);
    // Programaticamente pulsamos el primer botón (el que suma)
    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('Progreso debe ser 55 si se clica una vez el boton de incrementar 5', () => {
    const botonIncrementa = fixture.debugElement.queryAll(By.css('#incrementa5'));
    // Programaticamente pulsamos el primer botón (el que resta)
    // El null es porque queremos ignorar información sobre las coordenas de la pantalla
    // Programaticamente pulsamos el primer botón (el que suma)
    botonIncrementa[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(55);
  });

});
