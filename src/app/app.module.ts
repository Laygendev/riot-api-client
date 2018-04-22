import { BrowserModule, Title } from '@angular/platform-browser';

import { isPlatformBrowser } from '@angular/common';

import { NgModule, LOCALE_ID, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthenticationModule } from '@app/modules/authentication/authentication.module';
import { BuildModule } from '@app/modules/build/build.module';
import { GuideModule } from '@app/modules/guide/guide.module';

import { HttpService } from './services/http/http.service';
import { DataService } from './services/data/data.service';
import { HttpSummonerService } from './services/httpSummoner/http-summoner.service';
import { HttpSpectatorService } from './services/httpSpectator/http-spectator.service';
import { StaticDataService } from './services/staticData/static-data.service';
import { HttpGuideService } from './services/httpGuide/http-guide.service';

import { TitleService } from './services/title/title.service';

import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { SearchDirective } from './directives/search/search.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

import { AppComponent } from './app.component';
import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';
import { SearchComponent } from './components/search/search.component';
import { AdminComponent } from './components/admin/admin.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { AboutThisWebsiteComponent } from './components/about-this-website/about-this-website.component';
import { HelpUsComponent } from './components/help-us/help-us.component';
import { MembersComponent } from './components/members/members.component';
import { Page404Component } from './components/page-404/page-404.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'guideslol.com'
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    SummonerDetailsComponent,
    SearchComponent,
    DropdownDirective,
    SearchDirective,
    TooltipDirective,
    AdminComponent,
    WhoWeAreComponent,
    AboutThisWebsiteComponent,
    HelpUsComponent,
    MembersComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'riot-api-client' }),
		ReactiveFormsModule,
		HttpModule,
		HttpClientModule,
    AppRoutingModule,
    BuildModule,
    GuideModule,
		NgbModule.forRoot(),
		NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [
		HttpService,
		HttpSummonerService,
		HttpSpectatorService,
		DataService,
		StaticDataService,
		HttpGuideService,
		TitleService,
		Title
	],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
