import { Component, OnInit, OnDestroy } from '@angular/core';
import { Result } from '../services/models/result.model';
import {ResultService} from '../services/result.service';

@Component({
  selector: 'app-my-results',
  templateUrl: './my-results.component.html',
  styleUrls: ['./my-results.component.css']
})
export class MyResultsComponent implements OnInit, OnDestroy {
  public currentUser;
  public subscription;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  public dataSource: any[];
  public displayedColumns: string[] =['Quiz Id', 'Score', 'Max Score'];


  constructor(private resultService: ResultService) {
    this.currentUser = localStorage.getItem('userId');
    this.subscription = this.resultService.getResultsByUser(localStorage.getItem('userId')).subscribe(
      (data) => {
        this.dataSource = data;
        console.log(this.dataSource);
        // console.log('console.log(this.myQuizes);');
        // this.di
        // console.log(this.myQuizes);
      }
    );



   }
   ngOnDestroy() {
    this.subscription.unsubscribe();

  }

  ngOnInit() {
  }

}
