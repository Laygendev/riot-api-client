import { NgModule }             from '@angular/core';
import { RouterModule, Routes, LoadChildren } from '@angular/router';

import { SearchComponent } from './components/search/search.component';

import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { AboutThisWebsiteComponent } from './components/about-this-website/about-this-website.component';
import { HelpUsComponent } from './components/help-us/help-us.component';
import { MembersComponent } from './components/members/members.component';
import { Page404Component } from './components/page-404/page-404.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: SearchComponent },
	{ path: 'auth', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' },
	{ path: 'summoner/:region/:id', component: SummonerDetailsComponent },
	{ path: 'admin', component: AdminComponent },
	{ path: 'who-we-are', component: WhoWeAreComponent },
	{ path: 'about-this-website', component: AboutThisWebsiteComponent },
	{ path: 'help-us', component: HelpUsComponent },
	{ path: 'members', component: MembersComponent },
	{ path: '404', component: Page404Component },
	{ path: '**', component: Page404Component }
];

@NgModule({
	imports:[RouterModule.forRoot(routes,{useHash:false})],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
