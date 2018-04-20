import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from'@angular/core';

import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
	{ path: '', component: AuthenticationComponent }
  //  { path: 'subscribe', component: SubscribeComponent },
   // { path: 'account', component: AccountComponent },
	//{ path: 'account/:routerActive', component: AccountComponent }
];

@NgModule({
	imports:[RouterModule.forChild(routes)],
	exports: [ RouterModule ]
})

export class AuthenticationRoutingModule {}