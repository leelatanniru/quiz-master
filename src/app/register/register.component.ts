import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { User } from '../services/models/users.model';
import {UserService} from '../services/user.service';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  emailId: FormControl;
  password: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  // public n: number;


  constructor(private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private userService: UserService,
    private counterService: CounterService) {
      // this.counterService.getCount();
      // console.log(this.counterService.n);
     }

  ngOnInit() {
    this.registerForm = new FormGroup({
      emailId: new FormControl(''),
      password: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl('')

    });
    // this.userService.getUsers().subscribe(data => {
    //   console.log(data);
    //   this.n = data.length;
    //   console.log('n ', this.n);
    // });
  }

  onSubmit() {
    let user: User = {};
    user.email = this.registerForm.controls['emailId'].value;
    user.firstName = this.registerForm.controls['firstName'].value;
    user.lastName = this.registerForm.controls['lastName'].value;
    user.noOfQuizes = 0;
    this.authService.register(this.registerForm.controls['emailId'].value, this.registerForm.controls['password'].value)
      .then((res : any) => {
        localStorage.setItem('userId', res.user.email);
        // user.userId = res.user.uid;
        this.userService.newUser(user);
        this.flashMessage.show('You are now registered and logged in', {
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
