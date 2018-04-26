import { BrowserModule, Title } from '@angular/platform-browser';

import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgModule, LOCALE_ID, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { UserModule } from '@app/modules/user/user.module';
import { BuildModule } from '@app/modules/build/build.module';
import { GuideModule } from '@app/modules/guide/guide.module';
import { RealTimeModule } from '@app/modules/real-time/real-time.module';

import { DataService } from './services/data/data.service';
import { HttpSummonerService } from './services/httpSummoner/http-summoner.service';
import { HttpSpectatorService } from './services/httpSpectator/http-spectator.service';
import { StaticDataService } from './services/staticData/static-data.service';
import { HttpGuideService } from './services/httpGuide/http-guide.service';

import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { SearchDirective } from './directives/search/search.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { MembersComponent } from './components/members/members.component';
import { Page404Component } from './components/page-404/page-404.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

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
    SearchComponent,
    DropdownDirective,
    SearchDirective,
    TooltipDirective,
    WhoWeAreComponent,
    MembersComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'riot-api-client' }),
		RouterModule,
		ReactiveFormsModule,
		HttpModule,
		HttpClientModule,
    AppRoutingModule,
    UserModule,
    BuildModule,
    GuideModule,
    RealTimeModule,
		NgbModule.forRoot(),
		NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [
		HttpSummonerService,
		HttpSpectatorService,
		DataService,
		StaticDataService,
		HttpGuideService,
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
