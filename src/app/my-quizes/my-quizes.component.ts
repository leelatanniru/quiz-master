import { Component, OnInit, OnDestroy } from '@angular/core';
import {QuizService} from '../services/quiz.service';
import { Quiz } from '../services/models/quiz.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-quizes',
  templateUrl: './my-quizes.component.html',
  styleUrls: ['./my-quizes.component.css']
})
export class MyQuizesComponent implements OnInit, OnDestroy {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  public myQuizes: Quiz[];
  public subscription;
  public currentUser;
  public dataSource: any[];
  // public displayedColumns: string[] =['Quiz Name', 'Quiz Id', 'Description', 'Max Score', 'Answer Key', 'Duration'];
  public displayedColumns: string[] =['Quiz Name'];

  constructor(private quizService: QuizService, private router: Router) { 
    this.currentUser = localStorage.getItem('userId');
    console.log(this.currentUser);
    this.subscription = this.quizService.getQuizes().subscribe(
      (data) => {
        this.dataSource = data.filter(d => {
          console.log(d.time);
          console.log(this.currentUser);
          console.log('*****');
          return d.owner == this.currentUser;
        });
        // console.log('console.log(this.myQuizes);');
        // this.di
        // console.log(this.myQuizes);
      }
    );
  }
  getQuiz(row: any) {
    console.log('row', row.id);
    this.router.navigateByUrl('quizes/'+row.id);
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
