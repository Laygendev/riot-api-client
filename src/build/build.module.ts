import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BuildDisplayComponent } from './build-display/build-display.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    BuildDisplayComponent
  ],
  exports: [
    BuildDisplayComponent
  ],
  providers: [
  ]
})

export class BuildModule { }