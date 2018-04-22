import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from'@angular/core';

import { AllGuidesComponent } from './components/guide-all/guide-all.component';
import { GuideChooseComponent } from './components/guide-choose/guide-choose.component';
import { GuideDisplayComponent } from './components/guide-display/guide-display.component';
import { GuideEditComponent } from './components/guide-edit/guide-edit.component';
import { GuidePageComponent } from './components/guide-page/guide-page.component';

const routes: Routes = [
	{ path: '', component: AllGuidesComponent },
	{ path: 'create', component: GuideChooseComponent },
    { path: 'create/:gameMode/:championId', component: GuideChooseComponent },
	{ path: ':gameMode/current/:championName', component: GuidePageComponent },
	{ path: 'edit/:guideId', component: GuideEditComponent },
	{ path: 'edit/:gameMode/:championId', component: GuideEditComponent }
];

@NgModule({
	imports:[RouterModule.forChild(routes)],
	exports: [ RouterModule ]
})

export class GuideRoutingModule {}