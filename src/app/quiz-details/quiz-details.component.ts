import { Component, OnInit } from '@angular/core';
import { Quiz } from '../services/models/quiz.model';
import {QuizService} from '../services/quiz.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {
  id: string;
  quiz: Quiz;


  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // Get client
    this.quizService.getQuiz(this.id);
    this.quizService.quizDetails.subscribe(quiz => {
      this.quiz = quiz;
      console.log('quiz retrived');
      console.log(this.quiz);
    });
  }
  onSubmit() {
    this.router.navigateByUrl('results/'+this.quiz.id )
  }

}
