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
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { AboutThisWebsiteComponent } from './components/about-this-website/about-this-website.component';
import { HelpUsComponent } from './components/help-us/help-us.component';
import { AllGuidesComponent } from './components/all-guides/all-guides.component';
import { MembersComponent } from './components/members/members.component';
import { Page404Component } from './components/page-404/page-404.component';

const routes: Routes = [
	{ path: '', component: SearchComponent },
	{ path: 'subscribe', component: SubscribeComponent },
	{ path: 'authentication', component: AuthenticationComponent },
	{ path: 'summoner/:region/:id', component: SummonerDetailsComponent },
	{ path: 'guide', component: GuideComponent },
	{ path: 'guide/:gameMode/:championId', component: GuideComponent },
	{ path: 'guide-edit/:guideId', component: GuideEditComponent },
	{ path: 'guide-edit/:gameMode/:championId', component: GuideEditComponent },
	{ path: 'account', component: AccountComponent },
	{ path: 'account/:routerActive', component: AccountComponent },
	{ path: 'admin', component: AdminComponent },
	{ path: 'who-we-are', component: WhoWeAreComponent },
	{ path: 'about-this-website', component: AboutThisWebsiteComponent },
	{ path: 'help-us', component: HelpUsComponent },
	{ path: 'all-guides', component: AllGuidesComponent },
	{ path: 'members', component: MembersComponent },
	{ path: '404', component: Page404Component },
];

@NgModule({
	imports:[RouterModule.forRoot(routes,{useHash:true})],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
