import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  public email = '';
  public resetError = '';

  constructor(
    private as: AuthService
  ) { }

  reset() {
    this.as.resetPassword(this.email)
      .then(res => {
        console.log(res);
        console.log("resetting password email sent");
      })
      .catch(err => this.resetError = err.message);
  }

  ngOnInit() {

  }

}
