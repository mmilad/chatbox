import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'home', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'auth', loadChildren: './../modules/auth/auth.module' },
  { path: 'chat', loadChildren: './../modules/chat/chat.module' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [],
  declarations: []
})
export class RouteModule { }
