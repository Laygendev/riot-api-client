import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildEditComponent } from './build-edit.component';

describe('BuildEditComponent', () => {
  let component: BuildEditComponent;
  let fixture: ComponentFixture<BuildEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
