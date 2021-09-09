import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMascota1Component } from './reg-mascota1.component';

describe('RegMascota1Component', () => {
  let component: RegMascota1Component;
  let fixture: ComponentFixture<RegMascota1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegMascota1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegMascota1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
