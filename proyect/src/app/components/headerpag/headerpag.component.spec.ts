import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpagComponent } from './headerpag.component';

describe('HeaderpagComponent', () => {
  let component: HeaderpagComponent;
  let fixture: ComponentFixture<HeaderpagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderpagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
