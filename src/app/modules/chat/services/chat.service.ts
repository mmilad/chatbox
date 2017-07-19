import { Injectable } from '@angular/core';
import { FirebaseService } from './../../shared/services/firebase.service';

@Injectable()
export class ChatService {

  private refs: any = {};

  public currentChatMessages: any = [];
  public currentChatUsers;
  public mainChat;
  public roomList = ['public', 'private'];
  public currentRoom = undefined;
  private user;
  
  private subscriptions: Array<any> = [];
  
  constructor(private fs:FirebaseService) {

    fs.login$.subscribe(userData => {
      if(userData) {
        this.user = fs.user;
        this.enterRoom('chats/rooms/main');
        // this.refs.rooms = fs.getList('chats/room');
        // this.subscriptions.push(this.refs.rooms.subscribe(list => {
        //   console.log(list, "!");
        //   this.roomList = list
        // }));

      } else {
        this.subscriptions.forEach(s => s.unsubscribe());
      }
    });
  }

  enterRoom(room) {
    if(this.currentRoom) {
      // leave current room
    }
    this.currentRoom = room;
    this.refs.messages = this.fs.getList(room+'/messages');
    this.refs.users = this.fs.getList(room+'/users')
    this.subscriptions.push(this.refs.messages.subscribe(list => this.currentChatMessages = list));
    this.subscriptions.push(this.refs.users.subscribe(list => this.currentChatUsers = list));
    
    this.refs.users.update(this.user.uid, {
      name: this.user.displayName
    })
  }

  pushMsg(msg) {
    this.currentChatMessages.push({
      message: msg,
      uid: this.user.uid
    });
  }
}