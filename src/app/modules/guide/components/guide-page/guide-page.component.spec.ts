import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';
import { HttpGuideService } from '@app/services/httpGuide/http-guide.service';

import { GuidePageComponent } from './guide-page.component';
import { GuideDisplayComponent } from '@app/modules/guide/components/guide-display/guide-display.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


describe('GuidePageComponent', () => {
  let component: GuidePageComponent;
  let fixture: ComponentFixture<GuidePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
				GuidePageComponent,
				GuideDisplayComponent
			],
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
    fixture = TestBed.createComponent(GuidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
