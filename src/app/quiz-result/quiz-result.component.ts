import { Component, OnInit } from '@angular/core';
import {ResultService} from '../services/result.service';
import { Result } from '../services/models/result.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  id: string;
  dataSource: Result[];
  public displayedColumns: string[] =['User', 'Score'];


  constructor(private resultService: ResultService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.resultService.getResultsForQuiz(this.id).subscribe((data) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }
}
