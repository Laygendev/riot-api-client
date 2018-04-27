import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';
import { HttpGuideService } from '@app/services/httpGuide/http-guide.service';

import { AccountComponent } from './account.component';
import { BuildDisplayComponent } from '@app/modules/build/components/build-display/build-display.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
				AccountComponent,
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
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
