import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../shared/user/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService) { }

  user: User = new User();
  ngOnInit() {
  }

  onSubmit(): void {
    this.userService.login(this.user).subscribe(
      data => {
        if (data) {
          let self = this;
          this.alertService.success('Login Successful', true);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
        }
        else {
          this.alertService.error('Hatalı kullanıcı adı/şifre');
        }
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

}
