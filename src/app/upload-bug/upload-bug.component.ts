import { Component, OnInit } from '@angular/core';
import { BugRecord } from '../bug-record';
import { BugServiceService } from '../shared/bug/bug-service.service';

@Component({
  selector: 'app-upload-bug',
  templateUrl: './upload-bug.component.html',
  styleUrls: ['./upload-bug.component.css']
})
export class UploadBugComponent implements OnInit {

  constructor(private bugRecordService: BugServiceService) { }
  isUploadComplete: boolean = true;
  bug: BugRecord = new BugRecord();
  fileCount: number = 0;
  ngOnInit() {
  }

  handleFileInput(files: FileList): void {
    this.isUploadComplete = false;
    while (this.fileCount < files.length) {
      this.bug.files.push(files.item(this.fileCount));
      this.fileCount++;
    }
    this.isUploadComplete = true;
  }
  onSubmit(): void {
    this.bugRecordService.save(this.bug).subscribe(data => alert("olmuyor"));
  }
}
