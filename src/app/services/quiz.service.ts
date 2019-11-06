import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quiz } from './models/quiz.model';
import { Router } from '@angular/router';
import { Result } from './models/result.model';
import { ResultService } from './result.service';

// import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizId: string;
  public newQuizId: string;
  private result: Boolean[];
  public answers;
  private quizStarted;
  quizesCollection: AngularFirestoreCollection<Quiz>;
  quizDoc: AngularFirestoreDocument<Quiz>;
  quizes: Observable<Quiz[]>;
  // quiz: Observable<Quiz>;
  public quiz: Quiz;

  public noOfQuizes;
  currentQuizeCollection: AngularFirestoreCollection<Quiz>;
  currentQuizDoc: AngularFirestoreDocument<Quiz>;
  quizDetails = new Subject();

  constructor(private afs: AngularFirestore, private router: Router, private resultService: ResultService) { 
    localStorage.setItem('1-01', '12312312');
    this.quizesCollection = this.afs.collection('quizes');
  //  this.getQuizes().subscribe(d => {
  //   this.noOfQuizes = d.length;
  //  }
  //     );
    // console.log(this.usersCollection)
  }

  getQuizes(): Observable<Quiz[]> {
    // Get clients with the id
    console.log('getting users');
    this.quizes = this.quizesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Quiz;
        data.id = action.payload.doc.id;
        // console.log('data', data);
        return data;
      });
    }));
    console.log('printing users');
    console.log(this.quizes);

    return this.quizes;
  }

  getQuiz(id: string): void {
    console.log('get quiz');
    console.log(id);
    this.quizDoc = this.afs.doc<Quiz>(`quizes/${id}`);
    this.quizDoc.snapshotChanges().subscribe(action => {
      if(action.payload.exists === false) {
        console.log('false returned');
        return null;
      } else {
        console.log('true return');
        const data = action.payload.data() as Quiz;
        data.id = action.payload.id;
        this.quizDetails.next(data);
        return data;
      }
    });
    // console.log(this.quizDetails);

    // return this.quizDetails;
  }

  startQuiz(quizId) {
    this.quizDoc = this.afs.doc<Quiz>(`quizes/${quizId}`);
    this.quizDoc.snapshotChanges().subscribe(action => {
      if(action.payload.exists === false) {
        alert("Please enter a valid Quiz Id");
        return null;
      } else {
        const data = action.payload.data() as Quiz;
        data.id = action.payload.id;
        this.quiz = data;
        this.quizStarted = true;
        this.result = [];
    for(var i=0;i < this.quiz.noOfQues;i++) {
      this.result.push(false);

    }
    this.answers = this.quiz.answerKey.split('');
    console.log('printing answers!!!!!!!!!!!!!!!!!');
    console.log(this.answers);

        console.log('inside the quiz service navigating');
        this.router.navigateByUrl('/quiz');

        console.log(this.quiz);

        return data;
      }
    });



  }

  // getClient(id: string): Observable<Client> {
  //   this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
  //   this.client = this.clientDoc.snapshotChanges().map(action => {
  //     if(action.payload.exists === false) {
  //       return null;
  //     } else {
  //       const data = action.payload.data() as Client;
  //       data.id = action.payload.id;
  //       return data;
  //     }
  //   });

  //   return this.client;
  // }

  newQuiz(quiz: Quiz) {
    console.log('quiz added');
    localStorage.removeItem('newQuizId');
    this.quizesCollection.add(quiz).then((res) => {
      console.log(res);
      localStorage.setItem('newQuizId', res.id);
      console.log('navigate');
      this.router.navigateByUrl('/create-quiz-success');
    },err => console.log('error!!!'));
  }
  
   getResult() {
     let res: Result = {};
     res.user = localStorage.getItem('userId');
     res.maxSCore = this.quiz.noOfQues;
     res.score = this.result.filter(v => v).length;
     res.quizId = this.quiz.id;
     console.log('$$$$$$$$$$$$$$$$');
     console.log(res);
     this.resultService.newResult(res);
     return this.result;
   }

  // setQuizId(s: string) {
  //   this.quizId = s;
  //   this.answers = localStorage.getItem(this.quizId).split('');
  //   const n = parseInt(localStorage.getItem('noOfQuestions'), 10);
    
  //   console.log('answers are set!!');
  //   console.log(this.answers);
  //   console.log(this.result);
  //   this.quizStarted = true;

  // }
  isQuizStarted() {
    return this.quizStarted;
  }
  evaluate(question: any, option: number) {
    console.log('evaluate**************');
    console.log(this.answers);
    console.log(question.id);
    console.log(option);
    if(option == this.answers[question.id-1]) {
      this.result[question.id-1] = true;
      console.log('correct!!!');

    }
    else {
      this.result[question.id-1] = false;

    }
  }
  final() {
    console.log(this.result);
  }


  // get(url: string) {
  //   return this.http.get(url);
  // }


  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}
