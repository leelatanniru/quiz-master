import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Result } from './models/result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  resultCollection: AngularFirestoreCollection<Result>;
  resultDoc: AngularFirestoreDocument<Result>;


  resultforQuiz$: Observable<Result[]>;
  resultforQuizCollection: AngularFirestoreCollection<Result>;
  resultforQuizDoc: AngularFirestoreDocument<Result>;

  resultforUser$: Observable<Result[]>;
  resultforUserCollection: AngularFirestoreCollection<Result>;
  resultforUserDoc: AngularFirestoreDocument<Result>;


  constructor(private afs: AngularFirestore) {
    this.resultCollection = this.afs.collection('results');

   }

   public getResultsForQuiz(id: string) {
    this.resultforQuizCollection = this.afs.collection('results', ref => ref.where('quizId', '==', id));

    this.resultforUser$ = this.resultforQuizCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Result;
        data.id = action.payload.doc.id;
        // console.log('data', data);
        return data;
      });
    }));
    console.log('printing users');
    console.log(this.resultforUser$);

    return this.resultforUser$;


   }

   public getResultsByUser(userEmail: string) {
     console.log(userEmail);
    this.resultforUserCollection = this.afs.collection('results', ref => ref.where('user', '==', userEmail));

    this.resultforQuiz$ = this.resultforUserCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Result;
        data.id = action.payload.doc.id;
        // console.log('data', data);
        return data;
      });
    }));
    console.log('printing users');
    console.log(this.resultforQuiz$);

    return this.resultforQuiz$;

   }

  public newResult(result: Result) {
    this.resultCollection.add(result);
  }

}
