import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BugRecord } from '../../bug-record';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugServiceService {

  constructor(private http: HttpClient) { }

  public API = '//localhost:8080/';
  public BUG_API = this.API + "bugs/";

  public save(bug: BugRecord) {
    return this.http.post(this.BUG_API, bug);
  }

  public getAll(): Observable<BugRecord[]>{
    return this.http.get<BugRecord[]>(this.BUG_API);
  }
}
