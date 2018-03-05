import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';
import { GuideComponent } from './components/guide/guide.component';
import { GuideEditComponent } from './components/guide-edit/guide-edit.component';
import { AccountComponent } from './components/account/account.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
	{ path: '', component: SearchComponent },
	{ path: 'subscribe', component: SubscribeComponent },
	{ path: 'authentication', component: AuthenticationComponent },
	{ path: 'summoner/:region/:id', component: SummonerDetailsComponent },
	{ path: 'guide', component: GuideComponent },
	{ path: 'guide/:guideId', component: GuideEditComponent },
	{ path: 'guide/:gameMode/:championId', component: GuideEditComponent },
	{ path: 'account', component: AccountComponent },
	{ path: 'admin', component: AdminComponent },
];

@NgModule({
	imports:[RouterModule.forRoot(routes,{useHash:true})],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
