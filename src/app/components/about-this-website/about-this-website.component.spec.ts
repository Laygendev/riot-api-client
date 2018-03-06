import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThisWebsiteComponent } from './about-this-website.component';

describe('AboutThisWebsiteComponent', () => {
  let component: AboutThisWebsiteComponent;
  let fixture: ComponentFixture<AboutThisWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutThisWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutThisWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
