import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './/app-routing.module';

import { HttpService } from './services/http/http.service';
import { DataService } from './services/data/data.service';
import { HttpSummonerService } from './services/httpSummoner/http-summoner.service';
import { HttpSpectatorService } from './services/httpSpectator/http-spectator.service';
import { StaticDataService } from './services/staticData/static-data.service';
import { HttpBuildService } from './services/httpBuild/http-build.service';
import { HttpStatusService } from './services/httpStatus/http-status.service';

import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { SearchDirective } from './directives/search/search.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

import { AppComponent } from './app.component';
import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';
import { SearchComponent } from './components/search/search.component';
import { BuildComponent } from './components/build/build.component';
import { BuildEditComponent } from './components/build-edit/build-edit.component';
import { GuideDisplayComponent } from './components/guide-display/guide-display.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SummonerDetailsComponent,
    SearchComponent,
    BuildComponent,
    BuildEditComponent,
		GuideDisplayComponent,
    DropdownDirective,
    SearchDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
		ReactiveFormsModule,
		HttpModule,
		HttpClientModule,
		AppRoutingModule,
		NgbModule.forRoot()
  ],
  providers: [
		HttpService,
		HttpSummonerService,
		HttpSpectatorService,
		DataService,
		StaticDataService,
		HttpBuildService,
		HttpStatusService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
