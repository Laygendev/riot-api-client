import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';

import { BuildDisplayComponent } from './build-display.component';

describe('BuildDisplayComponent', () => {
  let component: BuildDisplayComponent;
  let fixture: ComponentFixture<BuildDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
				BuildDisplayComponent
			],
			providers: [
				DataService,
				StaticDataService
			],
			imports: [
				RouterTestingModule,
				HttpClientModule,
				NgbModule
			]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
