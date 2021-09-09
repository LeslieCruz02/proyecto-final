import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comentarios1Component } from './comentarios1.component';

describe('Comentarios1Component', () => {
  let component: Comentarios1Component;
  let fixture: ComponentFixture<Comentarios1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comentarios1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comentarios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
