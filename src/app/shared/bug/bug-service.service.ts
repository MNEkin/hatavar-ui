import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BugRecord } from '../../bug-record';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data;boundary=032a1ab685934650abbe059cb45d6ff3'
  })
};

@Injectable({
  providedIn: 'root'
})

export class BugServiceService {

  constructor(private http: HttpClient) { }
  
  public API = '//localhost:8080/';
  public BUG_API = this.API + "bugs/";

  public save(bug: FormData) {
    return this.http.post(this.BUG_API, bug, httpOptions);
  }

  public getAll(): Observable<BugRecord[]> {
    return this.http.get<BugRecord[]>(this.BUG_API);
  }
}
