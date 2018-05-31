import { Component, OnInit } from '@angular/core';
import { BugServiceService } from '../shared/bug/bug-service.service';
import { BugRecord } from '../bug-record';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bugServcie: BugServiceService) { }

  bugs: Array<BugRecord>;

  ngOnInit() {
    this.bugServcie.getAll().subscribe(data => {
      this.bugs = data;
    });
  }

}
