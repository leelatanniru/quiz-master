import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailId: FormControl;
  password: FormControl;

  constructor(private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailId: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit() {
    this.authService.login(this.loginForm.controls['emailId'].value, this.loginForm.controls['password'].value)
      .then((res : any) => {
        localStorage.setItem('userId', res.user.email);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/take-quiz']);
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
  }

}
