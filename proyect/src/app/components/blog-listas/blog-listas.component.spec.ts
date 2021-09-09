import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListasComponent } from './blog-listas.component';

describe('BlogListasComponent', () => {
  let component: BlogListasComponent;
  let fixture: ComponentFixture<BlogListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
