import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleaderComponent } from './sleader.component';

describe('SleaderComponent', () => {
  let component: SleaderComponent;
  let fixture: ComponentFixture<SleaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
