import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAdopcionesComponent } from './listado-adopciones.component';

describe('ListadoAdopcionesComponent', () => {
  let component: ListadoAdopcionesComponent;
  let fixture: ComponentFixture<ListadoAdopcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAdopcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAdopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
