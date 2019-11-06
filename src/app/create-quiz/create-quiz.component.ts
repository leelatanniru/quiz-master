import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from '../services/models/quiz.model';
import {UserService} from '../services/user.service';
import {QuizService} from '../services/quiz.service';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  quizForm: FormGroup;
  courseId: FormControl;
  noOfQuestions: FormControl;
  answerKey: FormControl;
  time: FormControl;
  public n;


  constructor(private router: Router, private userService: UserService, private quizService: QuizService) {
   }

  ngOnInit() {
    this.quizForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      noOfQuestions: new FormControl('', [Validators.required]),
      answerKey: new FormControl('', [Validators.required]),
      time: new FormControl(30, [Validators.required])
    });
  }
  isEdited() {
    console.log('is edited');
    console.log(this.quizForm.dirty);
    return this.quizForm.dirty;
  }
  isAnswerKeyValid() {
    return /^[1-4]+$/.test(this.quizForm.controls['answerKey'].value);
  }
  isValid() {
    console.log('isVAlid');
    console.log(this.quizForm.controls['answerKey'].value.length);
    if(this.quizForm.controls['answerKey'].value.length !== this.quizForm.controls['noOfQuestions'].value) {
      console.log('false');
      return false;

    }
    console.log('true');

    return true;
  }

  onSubmit() {
    console.log('form submitted');
    var t = this.quizForm.controls['time'].value;
    var myquiz: Quiz = {};
    myquiz.answerKey = this.quizForm.controls['answerKey'].value;
    myquiz.description = this.quizForm.controls['description'].value;
    myquiz.noOfQues = this.quizForm.controls['noOfQuestions'].value;
    myquiz.owner = localStorage.getItem('userId');
    myquiz.name = this.quizForm.controls['name'].value;
    myquiz.time = this.quizForm.controls['time'].value;
    // var a = t.split(':'); // split it at the colons
   this.quizService.newQuiz(myquiz);
  //  localStorage.setItem('quizId', this.quizForm.controls['courseId'].value);
  //  localStorage.setItem('noOfQuizes', (parseInt(localStorage.getItem('noOfQuizes'), 10) + 1).toString());
    console.log(this.quizForm);
    // this.userService.updateNoofQuizes();
    // localStorage.setItem('courseId', this.quizForm.controls['courseId'].value);
    // localStorage.setItem('noOfQuestions', this.quizForm.controls['noOfQuestions'].value);
    // localStorage.setItem(this.quizForm.controls['courseId'].value, this.quizForm.controls['answerKey'].value);
    
  }

}
