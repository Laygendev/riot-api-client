import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';
import { HttpGuideService } from '@app/services/httpGuide/http-guide.service';
import { HttpUserService } from '@app/modules/user/services/http-user/http-user.service';

import { GuideEditComponent } from './guide-edit.component';
import { GuideDisplayComponent } from '@app/modules/guide/components/guide-display/guide-display.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('GuideEditComponent', () => {
  let component: GuideEditComponent;
  let fixture: ComponentFixture<GuideEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
				GuideEditComponent,
				GuideDisplayComponent
			],
			providers: [
				DataService,
				StaticDataService,
				HttpGuideService,
				HttpUserService
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
    fixture = TestBed.createComponent(GuideEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
