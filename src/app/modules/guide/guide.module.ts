import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GuideDisplayComponent } from './components/guide-display/guide-display.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    GuideDisplayComponent
  ],
  exports: [
    GuideDisplayComponent
  ],
  providers: [
  ]
})

export class GuideModule { }