import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaggaleryComponent } from './paggalery.component';

describe('PaggaleryComponent', () => {
  let component: PaggaleryComponent;
  let fixture: ComponentFixture<PaggaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaggaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaggaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
