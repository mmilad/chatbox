import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared/services/user.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'chat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public user;
  public newMessage;
  public messages;
  constructor(
    private us: UserService,
    private cs: ChatService
  ) { 
    this.user = us.getUser();
    this.messages = cs.currentChatMessages
  }

  handleKeyboardEvent(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
        console.log('shifted enter!');
        event.preventDefault();
        event.target.style.height = "auto";
        this.sendMsg();
    }
  }

  sendMsg() {
    this.cs.pushMsg(this.newMessage);
    console.log(this.messages)
    console.log(this.cs.currentChatMessages)
    this.newMessage = "";
  }

  ngOnInit() {

  }

}
