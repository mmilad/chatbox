import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './../chat.component';

const routes: Routes = [
  { path: '', component: ChatComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: []
})
export class RouteModule { }
