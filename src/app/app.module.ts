import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './services/http/http.service';
import { HttpSummonerService } from './services/httpSummoner/http-summoner.service';

import { AppComponent } from './app.component';
import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SummonerDetailsComponent
  ],
  imports: [
    BrowserModule,
		HttpModule,
		HttpClientModule,
		AppRoutingModule
  ],
  providers: [
		HttpService,
		HttpSummonerService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
