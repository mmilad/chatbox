
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlDirective, FormsModule } from "@angular/forms";

import {
  MaterialModule,
  MdDatepickerModule,
  MdNativeDateModule
} from '@angular/material';

import { FirebaseService } from './../shared/services/firebase.service';
import { UserService } from './services/user.service';

import { RouteToDirective } from './directives/route-to.directive';

@NgModule({
  imports: [
    FormsModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    CommonModule
  ],
  declarations: [
    RouteToDirective
  ],
  providers: [
    FirebaseService,
    UserService
  ],
  exports: [
    RouteToDirective,
    FormsModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    CommonModule
  ]
})
export class SharedModule { }
