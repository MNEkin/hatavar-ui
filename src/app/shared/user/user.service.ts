import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API = '//localhost:8080/';
  public SIGNUP_API = this.API + "signup/";
  public LOGIN_API = this.API + "login/";
  constructor(private http: HttpClient) { }

  signUp(user: User) {
    return this.http.post(this.SIGNUP_API, user);
  }
  login(user: User): Observable<User> {
    return this.http.post<User>(this.LOGIN_API, user);
  }
}
