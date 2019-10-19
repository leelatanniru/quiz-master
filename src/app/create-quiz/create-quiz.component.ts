import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private router: Router) { }

  ngOnInit() {
    this.quizForm = new FormGroup({
      courseId: new FormControl(''),
      noOfQuestions: new FormControl(''),
      answerKey: new FormControl(''),
      time: new FormControl('00:30')
    });
  }

  onSubmit() {
    console.log('form submitted');
    var t = this.quizForm.controls['time'].value;
    // var a = t.split(':'); // split it at the colons
    var seconds = t;
    console.log('secondsssssssss');
    console.log(seconds);
    console.log(this.quizForm);
    localStorage.setItem('courseId', this.quizForm.controls['courseId'].value);
    localStorage.setItem('noOfQuestions', this.quizForm.controls['noOfQuestions'].value);
    localStorage.setItem(this.quizForm.controls['courseId'].value, this.quizForm.controls['answerKey'].value);
    this.router.navigateByUrl('/create-quiz-success');
    console.log('navigate');
  }

}
