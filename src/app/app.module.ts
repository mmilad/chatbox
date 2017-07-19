import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { RouteModule } from './route/route.module';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseConfig } from  './config/firebase-config';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { SharedModule } from './modules/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    RouteModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
