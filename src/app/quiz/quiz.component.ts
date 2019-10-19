import { Component, OnInit } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';
import * as CryptoJS from 'crypto-js';
import { timingSafeEqual } from 'crypto';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  // providers: [QuizService]
})
export class QuizComponent implements OnInit {
  public arr: any[];
  public score;
  public ansKey = null;
  public evaluatedAns;
  public n;
  questions: any[];
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 5400,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('is quiz started??? '+ this.quizService.isQuizStarted());

    // const encryptAns = CryptoJS.AES.encrypt('1,1,1,1,1,1,1,1,1,1', 'this.encryptSecretKey').toString();
    // console.log('encryptAns    ',encryptAns);
    
    this.quizes = this.quizService.getAll();
    
    // console.log('quizes',this.quizes);
    
    // console.log(this.quizes);
    this.quizName = this.quizes[1].id;
    this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName: string) {
    let n = 10;
    this.questions = [];

    for(var i=0;i<n;i++) {
      const a = {};
      a['id'] = i+1;
      a['name'] = 'Question ' + (i+1);
      a['options'] = [{
        id: 1,
        name: 'Option 1'
      },
      {
        id: 2,
        name: 'Option 2'
      },
      {
        id: 3,
        name: 'Option 3'
      },
      {
        id: 4,
        name: 'Option 4'
      }];
      this.questions.push(a);
    }
    console.log('questions****');
    console.log(this.questions);
    this.pager.count = this.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    // this.quizService.get(quizName).subscribe(res => {
    //   console.log('responce*********');
    //   console.log(res);
    //   this.quiz = new Quiz(res);
    //   console.log('loaded quiz', this.quiz);

      
    // });
    
    this.mode = 'quiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    // updated
    return (this.questions) ?
      this.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    console.log('onSelect');
    console.log(question);
    console.log(question.options);
    this.quizService.evaluate(question, option.id);
    // if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id)
        {
          x.selected = false;
          console.log(x);

        }  });
    // }

    console.log(this.questions);
    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
    console.log('isAnswered');
    console.log(question.options);
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(val: boolean) {
    return val? 'correct' : 'incorrect';
  };

  onSubmit() {
    // let answers = [];
    // this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    this.evaluatedAns = this.quizService.getResult();
    console.log(this.evaluatedAns);
    this.score = this.evaluatedAns.filter(v => v).length
    this.n = this.evaluatedAns.length;
    // this.quizService.evaluate(this.quiz.questions);
    this.mode = 'result';
    console.log('is quiz started??? '+ this.quizService.isQuizStarted());
  }
}
