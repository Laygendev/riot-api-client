import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GuideRoutingModule } from './guide-routing.module';
import { BuildModule } from '@app/modules/build/build.module';

import { AllGuidesComponent } from './components/guide-all/guide-all.component';
import { GuideChooseComponent } from './components/guide-choose/guide-choose.component';
import { GuideDisplayComponent } from './components/guide-display/guide-display.component';
import { GuideEditComponent } from './components/guide-edit/guide-edit.component';
import { GuidePageComponent } from './components/guide-page/guide-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    GuideRoutingModule,
    BuildModule
  ],
  declarations: [
    AllGuidesComponent,
    GuideChooseComponent,
    GuideDisplayComponent,
    GuideEditComponent,
    GuidePageComponent
  ],
  exports: [
    GuideDisplayComponent
  ],
  providers: []
})

export class GuideModule { }