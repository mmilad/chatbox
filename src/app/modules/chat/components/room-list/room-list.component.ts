import { Component, OnInit } from '@angular/core';

import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'chat-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  public roomlist;
  constructor(private cs: ChatService) {
    this.roomlist = cs.roomList;
  }

  ngOnInit() {
  }

}
