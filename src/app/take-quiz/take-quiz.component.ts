import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
  takeQuizForm: FormGroup;
  quizId: FormControl;


  constructor(private router: Router, private quizService: QuizService, private flashMessage: FlashMessagesService,) { }

  ngOnInit() {
    this.takeQuizForm = new FormGroup({
      quizId: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    // localStorage.setItem('selectedQuiz', this.takeQuizForm.controls['courseId'].value);
    this.flashMessage.show('Processing request, please wait:)', {
      cssClass: 'alert-success', timeout: 2000
    });
    this.quizService.startQuiz(this.takeQuizForm.controls['quizId'].value);

    // this.router.navigateByUrl('/quiz');
  }

}
