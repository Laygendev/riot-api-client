import { NgModule } from'@angular/core';
import { CommonModule } from'@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BuildModule } from './../build/build.module';

import { UserRoutingModule } from './user-routing.module';

import { HttpUserService } from './services/http-user/http-user.service';

import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    BuildModule
  ],
  declarations: [
    SubscribeComponent,
    LoginComponent,
    AccountComponent,
    AdminComponent
  ],
  providers: [
    HttpUserService
  ]
})

export class UserModule { }
