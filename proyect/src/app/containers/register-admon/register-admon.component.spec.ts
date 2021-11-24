import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdmonComponent } from './register-admon.component';

describe('RegisterAdmonComponent', () => {
  let component: RegisterAdmonComponent;
  let fixture: ComponentFixture<RegisterAdmonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAdmonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
