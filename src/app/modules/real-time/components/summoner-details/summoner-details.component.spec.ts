import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';
import { HttpGuideService } from '@app/services/httpGuide/http-guide.service';
import { HttpSpectatorService } from '@app/services/httpSpectator/http-spectator.service';
import { HttpSummonerService } from '@app/services/httpSummoner/http-summoner.service';

import { SummonerDetailsComponent } from './summoner-details.component';
import { GuideDisplayComponent } from '@app/modules/guide/components/guide-display/guide-display.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('SummonerDetailsComponent', () => {
  let component: SummonerDetailsComponent;
  let fixture: ComponentFixture<SummonerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
				SummonerDetailsComponent,
				GuideDisplayComponent
			],
			providers: [
				DataService,
				StaticDataService,
				HttpGuideService,
				HttpSpectatorService,
				HttpSummonerService
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
    fixture = TestBed.createComponent(SummonerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
