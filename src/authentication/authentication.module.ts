import { NgModule } from'@angular/core';
import { CommonModule } from'@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationRoutingModule } from './authentification-routing.module';

import { HttpUserService } from './services/httpUser/http-user.service';

import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    //SubscribeComponent,
    AuthenticationComponent,
    //AccountComponent
  ],
  providers: [
    HttpUserService
  ]
})

export class AuthenticationModule { }