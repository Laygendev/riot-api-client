import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';
import { HttpGuideService } from '@app/services/httpGuide/http-guide.service';

import { GuideDisplayComponent } from './guide-display.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('GuideDisplayComponent', () => {
  let component: GuideDisplayComponent;
  let fixture: ComponentFixture<GuideDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideDisplayComponent ],
			providers: [
				DataService,
				StaticDataService,
				HttpGuideService
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
    fixture = TestBed.createComponent(GuideDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
