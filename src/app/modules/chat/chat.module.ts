import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';

import { RouteModule } from './route/route.module';
import { SharedModule } from './../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RoomListComponent } from './components/room-list/room-list.component';

import { ChatService } from './services/chat.service';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  imports: [
    CommonModule,
    RouteModule,
    SharedModule
  ],
  providers: [
    ChatService
  ],
  declarations: [
    ChatComponent,
    UserListComponent,
    RoomListComponent,
    SidebarComponent,
    HistoryComponent
  ],
  exports: [
    ChatComponent
  ]  
})
export default class ChatModule { }
