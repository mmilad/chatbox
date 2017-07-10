import { Injectable } from '@angular/core';

import { FirebaseService } from './../services/firebase.service'; // your  > firebase service / data service < data service from ../services
@Injectable()
export class AuthService {

  constructor(private fs:FirebaseService) { }

  login(email, password) {
    return this.fs.login(email, password);
  }

  logout() {
    this.fs.logout();
  }

  register(email, password) {
    return this.fs.register(email, password);
  }

  resetPassword(email) {
    return this.fs.resetPassword(email);
  }
}
