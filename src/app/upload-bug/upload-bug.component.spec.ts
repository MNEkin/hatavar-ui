import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBugComponent } from './upload-bug.component';

describe('UploadBugComponent', () => {
  let component: UploadBugComponent;
  let fixture: ComponentFixture<UploadBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
