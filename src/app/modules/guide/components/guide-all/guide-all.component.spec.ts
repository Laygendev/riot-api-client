import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';

import { AllGuidesComponent } from './guide-all.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AllGuidesComponent', () => {
  let component: AllGuidesComponent;
  let fixture: ComponentFixture<AllGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuidesComponent ],
			providers: [
				DataService,
				StaticDataService
			],
			imports: [
				RouterTestingModule,
				HttpClientModule,
				NgbModule.forRoot()
			]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
