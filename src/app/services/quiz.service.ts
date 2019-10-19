import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class QuizService {
  private quizId: string;
  private result: Boolean[];
  private answers;
  private quizStarted;

  constructor(private http: HttpClient) {
   }
   getResult() {
     return this.result;
   }

  setQuizId(s: string) {
    this.quizId = s;
    this.answers = localStorage.getItem(this.quizId).split('');
    const n = parseInt(localStorage.getItem('noOfQuestions'), 10);
    this.result = [];
    for(var i=0;i < n;i++) {
      this.result.push(false);

    }
    console.log('answers are set!!');
    console.log(this.answers);
    console.log(this.result);
    this.quizStarted = true;

  }
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


  get(url: string) {
    return this.http.get(url);
  }


  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}
