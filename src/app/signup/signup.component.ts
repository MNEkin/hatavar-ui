import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from '../password-validation'
import { UserService } from '../shared/user/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';
import { error } from 'protractor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  /*form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      password: ['', Validators.required],
      passwordRep: ['', Validators.required]
    }, {
      Validators: PasswordValidation.MatchPassword
    })
   }*/
  constructor(
    private userService: UserService,
    private router: Router,
    private alertservice: AlertService) { }

  user: User = new User();
  ngOnInit() {
  }

  onSubmit(): void {
    if (this.user.password != this.user.passwordRep) {
      alert("Password Missmatch!");
    }
    else {
      this.userService.signUp(this.user).subscribe(
        data => {
        this.alertservice.success('Signed up ', true);
        this.router.navigate(['/login']);
      },
      error=>{
        this.alertservice.error(error);
        
      });
    }
  }

}
