import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideChooseComponent } from './guide-choose.component';

describe('GuideChooseComponent', () => {
  let component: GuideChooseComponent;
  let fixture: ComponentFixture<GuideChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
