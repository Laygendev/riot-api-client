import { NgModule }             from '@angular/core';
import { RouterModule, Routes, LoadChildren } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { MembersComponent } from './components/members/members.component';
import { Page404Component } from './components/page-404/page-404.component';

export const user = './modules/user/user.module#UserModule';
export const guide = './modules/guide/guide.module#GuideModule';
export const summoner = './modules/real-time/real-time.module#RealTimeModule';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: SearchComponent },
	{ path: 'user', loadChildren: user },
	{ path: 'guide', loadChildren: guide },
	{ path: 'summoner', loadChildren: summoner },
	{ path: 'who-we-are', component: WhoWeAreComponent },
	{ path: 'members', component: MembersComponent },
	{ path: '404', component: Page404Component },
	{ path: '**', component: Page404Component }
];

@NgModule({
	imports:[RouterModule.forRoot(routes,{useHash:false})],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
