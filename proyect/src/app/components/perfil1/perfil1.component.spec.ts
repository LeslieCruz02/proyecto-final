import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil1Component } from './perfil1.component';

describe('Perfil1Component', () => {
  let component: Perfil1Component;
  let fixture: ComponentFixture<Perfil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Perfil1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
