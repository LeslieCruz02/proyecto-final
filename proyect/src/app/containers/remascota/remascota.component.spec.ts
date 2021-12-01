import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemascotaComponent } from './remascota.component';

describe('RemascotaComponent', () => {
  let component: RemascotaComponent;
  let fixture: ComponentFixture<RemascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
