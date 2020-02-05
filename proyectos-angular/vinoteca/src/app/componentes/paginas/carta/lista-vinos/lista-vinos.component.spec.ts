import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVinosComponent } from './lista-vinos.component';

describe('ListaVinosComponent', () => {
  let component: ListaVinosComponent;
  let fixture: ComponentFixture<ListaVinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
