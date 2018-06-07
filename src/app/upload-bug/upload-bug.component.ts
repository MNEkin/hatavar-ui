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
  files: Array<File> = [];
  ngOnInit() {
  }

  handleFileInput(files: FileList): void {
    console.log(files);
    this.isUploadComplete = false;
    while (this.fileCount < files.length) {
      //this.bug.files.push(files.item(this.fileCount));
      this.files.push(files.item(this.fileCount));
      this.fileCount++;
    }
    this.isUploadComplete = true;
  }
  onSubmit(): void {
    let formData: FormData = new FormData();
    for (let i = 0; i<this.files.length; i++) {
      formData.append('file[]', this.files[i], this.files[i].name);
    }
    let bugRecord = JSON.stringify(this.bug);
    formData.append("bugRecord", bugRecord);
    //formData.append("title", this.bug.title);
    //formData.append("content", this.bug.content);;
    this.bugRecordService.save(formData).subscribe(data => alert("olmuyor"));
  }
}
