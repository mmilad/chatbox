import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "./../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerError: string;
  public email = '';
  public password = '';
  public user_name = '';

  constructor(
    private as: AuthService,
    private router: Router
  ) { }

  register() {
    this.as.register(this.email, this.password)

      .then((res) => {

        res.sendEmailVerification()
          .then(sended => {
            console.log("varification email sent")
          })
          .catch(err => console.log(err))

        res.updateProfile({
          displayName: this.user_name,
          photoURL: "assets/dummy-profile-pic.jpg"
        }).then(() => {
          this.as.logout();
          this.router.navigate(['home']);
        })
        .catch(err => console.log(err))

      })
      .catch(err => {
        this.registerError = err.message;
      })
  }

  ngOnInit() {

  }

}
