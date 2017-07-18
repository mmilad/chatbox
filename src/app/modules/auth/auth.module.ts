import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FormControlDirective, FormsModule } from "@angular/forms";

// import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
// import {
//   MaterialModule,
//   MdDatepickerModule,
//   MdNativeDateModule
// } from '@angular/material';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';

import { AuthService } from './auth.service';

import { RouteModule } from './route/route.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetComponent
  ],
  imports: [
    RouteModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetComponent
  ],
  providers: [
    AuthService
  ]
})

export default class AuthModule { }