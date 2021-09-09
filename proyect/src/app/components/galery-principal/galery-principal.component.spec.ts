import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryPrincipalComponent } from './galery-principal.component';

describe('GaleryPrincipalComponent', () => {
  let component: GaleryPrincipalComponent;
  let fixture: ComponentFixture<GaleryPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
