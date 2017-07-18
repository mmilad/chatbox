import { Injectable } from '@angular/core';

import { UserService } from './../shared/services/user.service'; // your  > firebase service / data service < data service from ../services
@Injectable()
export class AuthService {

  constructor(private us:UserService ) { }

  login(email, password) {
    return this.us.login(email, password);
  }

  logout() {
    this.us.logout();
  }

  register(email, password) {
    return this.us.register(email, password);
  }

  resetPassword(email) {
    return this.us.resetPassword(email);
  }
}
