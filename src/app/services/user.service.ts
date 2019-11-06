import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './models/users.model';

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  currentUserCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;
  public noOfQuizesUser: any;
  public loggedInUser: any;

  constructor(private afs: AngularFirestore) { 
    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('lastName', 'asc'));
    console.log(this.usersCollection)
  }

  getUsers(): Observable<User[]> {
    // Get clients with the id
    console.log('getting users');
    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as User;
        data.id = action.payload.doc.id;
        console.log('data', data);
        return data;
      });
    }));
    console.log('printing users');
    console.log(this.users);

    return this.users;
  }

  newUser(client: User) {
    this.usersCollection.add(client);
  }

  

  setLoggedInUser(email: string): any {
    console.log('set logged in user');
    localStorage.setItem('userId', email);
    // this.currentUserCollection = this.afs.collection('users', ref => ref.where('email', '==', email));

    // this.noOfQuizesUser = this.currentUserCollection.snapshotChanges().pipe(map(changes => {
    //   return changes.map(action => {
    //     const data = action.payload.doc.data() as User;
    //     // data.id = action.payload.doc.id;
    //     console.log('data', data);
    //     console.log('data.noOfQuizes', data.noOfQuizes);

    //     return data.noOfQuizes;
    //   });
    // }));

  }

  // getUser(email: string): Observable<User> {
  //   // this.clientDoc = this.afs.doc<User>(`clients/${id}`);
  //   // this.user = this.clientDoc.snapshotChanges().map(action => {
  //   //   if(action.payload.exists === false) {
  //   //     return null;
  //   //   } else {
  //   //     const data = action.payload.data() as User;
  //   //     data.id = action.payload.id;
  //   //     return data;
  //   //   }
  //   // });

  //   console.log('getting users');
  //   this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
  //     return changes.map(action => {
  //       const data = action.payload.doc.data() as User;
  //       data.id = action.payload.doc.id;
  //       console.log('data', data);
  //       return data;
  //     });
  //   }));
  //   console.log('printing users');
  //   console.log(this.users);
  //   this.user = this.users.filter(x => {
  //     if(x.email == email) {
  //       return x;
  //     }
  //   })

  //   return this.user;
  // }

  updateNoofQuizes() {
    this.loggedInUser.noOfQuizes += 1;
    this.userDoc = this.afs.doc(`users/${this.loggedInUser.id}`);
    this.userDoc.update(this.loggedInUser);
  }

  // deleteClient(client: Client) {
  //   this.clientDoc = this.afs.doc(`clients/${client.id}`);
  //   this.clientDoc.delete();
  // }

}
