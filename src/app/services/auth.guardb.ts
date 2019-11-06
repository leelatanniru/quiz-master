import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';


import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardb implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(auth => {
      if(!auth) {
        return true;
      } else {
        this.router.navigate(['/create-quiz']);
        return false;
      }
    }));
  }
}