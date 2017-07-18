import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat.component';

import { RouteModule } from './route/route.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouteModule,
    SharedModule
  ],
  declarations: [
    RoomsComponent,
    UsersComponent,
    ChatComponent
  ],
  exports: [
    RoomsComponent,
    UsersComponent,
    ChatComponent
  ]  
})
export default class ChatModule { }
