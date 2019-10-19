import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
  takeQuizForm: FormGroup;
  courseId: FormControl;


  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
    this.takeQuizForm = new FormGroup({
      courseId: new FormControl('')
    });
  }
  onSubmit() {
    localStorage.setItem('selectedQuiz', this.takeQuizForm.controls['courseId'].value);
    this.quizService.setQuizId(this.takeQuizForm.controls['courseId'].value);

    this.router.navigateByUrl('/quiz');
  }

}
