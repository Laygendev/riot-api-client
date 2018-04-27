import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';
import { HttpGuideService } from '@app/services/httpGuide/http-guide.service';

import { AdminComponent } from './admin.component';
import { BuildDisplayComponent } from '@app/modules/build/components/build-display/build-display.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			declarations: [
				AdminComponent,
				BuildDisplayComponent
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
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
