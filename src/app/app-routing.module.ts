import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }    from './app.component';
import { SummonerDetailsComponent } from './components/summoner-details/summoner-details.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'summoner/:id', component: SummonerDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
