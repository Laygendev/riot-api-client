import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './services/http/http.service';
import { DataService } from './services/data/data.service';
import { HttpSummonerService } from './services/httpSummoner/http-summoner.service';
import { HttpSpectatorService } from './services/httpSpectator/http-spectator.service';
import { StaticDataService } from './services/staticData/static-data.service';
import { HttpGuideService } from './services/httpGuide/http-guide.service';
import { HttpStatusService } from './services/httpStatus/http-status.service';
import { HttpUserService } from './services/httpUser/http-user.service';

import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { SearchDirective } from './directives/search/search.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

import { AppComponent } from './app.component';
import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';
import { SearchComponent } from './components/search/search.component';
import { GuideComponent } from './components/guide/guide.component';
import { GuideEditComponent } from './components/guide-edit/guide-edit.component';
import { GuideDisplayComponent } from './components/guide-display/guide-display.component';
import { AppBuildDisplayComponent } from './components/app-build-display/app-build-display.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AccountComponent } from './components/account/account.component';
import { AdminComponent } from './components/admin/admin.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { AboutThisWebsiteComponent } from './components/about-this-website/about-this-website.component';
import { HelpUsComponent } from './components/help-us/help-us.component';
import { AllGuidesComponent } from './components/all-guides/all-guides.component';
import { MembersComponent } from './components/members/members.component';
import { Page404Component } from './components/page-404/page-404.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SummonerDetailsComponent,
    SearchComponent,
    GuideComponent,
    GuideEditComponent,
		GuideDisplayComponent,
    DropdownDirective,
    SearchDirective,
    TooltipDirective,
    AppBuildDisplayComponent,
    SubscribeComponent,
    AuthenticationComponent,
    AccountComponent,
    AdminComponent,
    WhoWeAreComponent,
    AboutThisWebsiteComponent,
    HelpUsComponent,
    AllGuidesComponent,
    MembersComponent,
    Page404Component
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
		HttpGuideService,
		HttpStatusService,
		HttpUserService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
