import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdmonComponent } from './panel-admon.component';

describe('PanelAdmonComponent', () => {
  let component: PanelAdmonComponent;
  let fixture: ComponentFixture<PanelAdmonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAdmonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAdmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
