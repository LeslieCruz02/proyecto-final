import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublicidadComponent } from './add-publicidad.component';

describe('AddPublicidadComponent', () => {
  let component: AddPublicidadComponent;
  let fixture: ComponentFixture<AddPublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPublicidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
