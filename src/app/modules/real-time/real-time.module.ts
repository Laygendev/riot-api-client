import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RealTimeRoutingModule } from './real-time-routing.module';
import { GuideModule } from './../guide/guide.module';

import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RealTimeRoutingModule,
    GuideModule
  ],
  declarations: [
    SummonerDetailsComponent
  ],
  exports: [],
  providers: []
})

export class RealTimeModule { }
