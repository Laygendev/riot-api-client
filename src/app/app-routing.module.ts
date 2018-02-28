import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';
import { GuideComponent } from './components/guide/guide.component';
import { GuideEditComponent } from './components/guide-edit/guide-edit.component';

const routes: Routes = [
	{ path: '', component: SearchComponent },
	{ path: 'subscribe', component: SubscribeComponent },
	{ path: 'summoner/:id', component: SummonerDetailsComponent },
	{ path: 'guide', component: GuideComponent },
	{ path: 'guide/:guideId', component: GuideEditComponent },
	{ path: 'guide/:gameMode/:championId', component: GuideEditComponent },
];

@NgModule({
	imports:[RouterModule.forRoot(routes,{useHash:true})],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
