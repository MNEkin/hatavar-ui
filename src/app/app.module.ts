import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UploadBugComponent } from './upload-bug/upload-bug.component';
import { HttpClientModule } from '@angular/common/http';
import { BugServiceService } from './shared/bug/bug-service.service';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UploadBugComponent
  },
  {
    path: 'new-bug',
    component: UploadBugComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadBugComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    BugServiceService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
