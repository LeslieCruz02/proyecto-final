import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagadoptionComponent } from './pagadoption.component';

describe('PagadoptionComponent', () => {
  let component: PagadoptionComponent;
  let fixture: ComponentFixture<PagadoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagadoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagadoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
