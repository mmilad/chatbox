import { Component, OnInit } from '@angular/core';

import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'chat-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public messages;
  constructor(private cs: ChatService) {
     this.messages = cs.currentChatMessages;
  }

  ngOnInit() {
  }

}
