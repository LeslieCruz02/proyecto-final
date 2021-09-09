import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIniComponent } from './header-ini.component';

describe('HeaderIniComponent', () => {
  let component: HeaderIniComponent;
  let fixture: ComponentFixture<HeaderIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
