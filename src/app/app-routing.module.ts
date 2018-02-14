import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent }    from './components/search/search.component';
import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';
import { BuildComponent } from './components/build/build.component';
import { BuildEditComponent } from './components/build-edit/build-edit.component';

const routes: Routes = [
	{ path: '', component: SearchComponent },
	{ path: 'summoner/:id', component: SummonerDetailsComponent },
	{ path: 'build', component: BuildComponent },
	{ path: 'build/:id', component: BuildComponent },
	{ path: 'build/:gameMode/:championId', component: BuildEditComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
