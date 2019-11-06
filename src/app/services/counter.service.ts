import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Count } from './models/count.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  countCollection: AngularFirestoreCollection<Count>;
  currentCountCollection: AngularFirestoreCollection<Count>;
  countDoc: AngularFirestoreDocument<Count>;
  public n: any;

  constructor(private afs: AngularFirestore) { 
    this.countCollection = this.afs.collection('noOfUsers');
    
  }
  public getCount() {
    this.n = this.countCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Count;
        // data.id = action.payload.doc.id;
        // console.log('data', data);
        console.log('returning the count!!!');
        return data.n;
      });
    }));

  }
}
