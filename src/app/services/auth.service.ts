import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;

  constructor() {}

  async isLoggedIn() {
    return this.user || JSON.parse(localStorage.getItem('user') || 'null');
  }

  async login(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
}
