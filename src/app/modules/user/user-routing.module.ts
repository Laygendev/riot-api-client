import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from'@angular/core';

import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/login' },
	{ path: 'login', component: LoginComponent },
  { path: 'subscribe', component: SubscribeComponent },
	{ path: 'account', component: AccountComponent },
	{ path: 'account/:routerActive', component: AccountComponent },
	{ path: 'admin', component: AdminComponent },
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})

export class UserRoutingModule {}
