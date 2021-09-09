import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpagComponent } from './footerpag.component';

describe('FooterpagComponent', () => {
  let component: FooterpagComponent;
  let fixture: ComponentFixture<FooterpagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterpagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterpagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
