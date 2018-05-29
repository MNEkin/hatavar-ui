import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API = '//localhost:8080/';
  public SIGNUP_API = this.API + "signup/";
  constructor(private http: HttpClient) { }

  signUp(user: User) {
    return this.http.post(this.SIGNUP_API, user);
  }
}
