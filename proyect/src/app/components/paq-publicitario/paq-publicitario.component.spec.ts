import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqPublicitarioComponent } from './paq-publicitario.component';

describe('PaqPublicitarioComponent', () => {
  let component: PaqPublicitarioComponent;
  let fixture: ComponentFixture<PaqPublicitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqPublicitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqPublicitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
