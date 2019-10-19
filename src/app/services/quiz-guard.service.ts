// src/app/auth/role-guard.service.ts
import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { QuizService } from './quiz.service';
@Injectable()
export class QuizGuardService implements CanActivate {
  constructor(public quiz: QuizService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    // const tokenPayload = decode(token);
    console.log('inside quiz guard');
    console.log(this.quiz.isQuizStarted());
    if (
      !this.quiz.isQuizStarted()
    ) {
      this.router.navigate(['take-quiz']);
      return false;
    }
    return true;
  }
}