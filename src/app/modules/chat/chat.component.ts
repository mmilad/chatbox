import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public user;
  constructor(private us:UserService) { 
    this.user = us.getUser();
  }

  ngOnInit() {
  }

}
