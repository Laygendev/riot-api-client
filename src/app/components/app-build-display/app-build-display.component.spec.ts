import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBuildDisplayComponent } from './app-build-display.component';

describe('AppBuildDisplayComponent', () => {
  let component: AppBuildDisplayComponent;
  let fixture: ComponentFixture<AppBuildDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBuildDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBuildDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
