import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quiz-success',
  templateUrl: './create-quiz-success.component.html',
  styleUrls: ['./create-quiz-success.component.css']
})
export class CreateQuizSuccessComponent implements OnInit {
  public quizId;

  constructor() {
    this.quizId = localStorage.getItem('newQuizId');
  }

  ngOnInit() {
  }
  copy() {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (this.quizId));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

}
