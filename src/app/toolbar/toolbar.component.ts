import { Component, OnInit } from '@angular/core';

import { UserService } from './../modules/shared/services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public user;
  constructor(private us:UserService) { 
    this.user = us.getUser();
  }

  logout() {
    this.us.logout();
  }
  ngOnInit() {
  }

}
