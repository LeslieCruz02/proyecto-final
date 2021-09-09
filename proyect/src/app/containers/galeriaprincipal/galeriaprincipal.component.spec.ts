import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaprincipalComponent } from './galeriaprincipal.component';

describe('GaleriaprincipalComponent', () => {
  let component: GaleriaprincipalComponent;
  let fixture: ComponentFixture<GaleriaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
