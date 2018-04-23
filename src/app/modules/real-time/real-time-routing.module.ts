import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from'@angular/core';

import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';

const routes: Routes = [
];

@NgModule({
	imports:[RouterModule.forChild(routes)],
	exports: [ RouterModule ]
})

export class RealTimeRoutingModule {}
