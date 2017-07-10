import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  public loginError: string;
  public email = '';
  public password = '';

  constructor(
    private as: AuthService,
    private router: Router
  ) { }

  login() {
    this.as.login(this.email, this.password)
      .then(res => {
        if(!res.emailVerified){
          this.as.logout();
          this.loginError = "Please verify your email adress";
        } else {
          this.router.navigate(['home']);
        }
      })
      .catch(err => {
        this.loginError = err.message;
      });
  }
  routeTo(path) {
      this.router.navigate([path]);
  }
  ngOnInit() { }

}

