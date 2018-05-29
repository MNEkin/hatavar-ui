import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from '../password-validation'
import { UserService } from '../shared/user/user.service';

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
  constructor(private userService: UserService) { }
  user: User = new User();
  ngOnInit() {
  }

  onSubmit(): void {
    if (this.user.password != this.user.passwordRep) {
      alert("Password Missmatch!");
    }
    else {
      this.userService.signUp(this.user).subscribe(data => {
        alert("saved")
      });
    }
  }

}
