import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIniComponent } from './footer-ini.component';

describe('FooterIniComponent', () => {
  let component: FooterIniComponent;
  let fixture: ComponentFixture<FooterIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterIniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
