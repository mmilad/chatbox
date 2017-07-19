import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
interface bookingType {
    [key: string]: any
}

@Injectable()
export class UserService {

  public user = {
    id: "",
    email: ""  
  };
  
  constructor(private fs:FirebaseService, private router:Router) {
    fs.login$.subscribe(userData => {
      this.updateUser(userData);
    });
  }

  updateUser(userData) {
    if(userData) {
      this.user.id = userData.uid;
      this.user.email = userData.email;
    } else {
      this.user.id = "";
      this.user.email = "";
      this.router.navigate(['auth/login']);
    }
  }
  getUser() {
    return this.user;
  }
  
  getLoginInfo() {
    return this.fs.login$;
  }

  login(email, password) {
    return this.fs.login(email, password);
  }

  register(email, password) {
    return this.fs.getAuth().auth.createUserWithEmailAndPassword(email, password)
  }

  resetPassword(email) {
    return this.fs.getAuth().auth.sendPasswordResetEmail(email)
  }
  logout() {
    this.fs.logout();
  }
  
}
