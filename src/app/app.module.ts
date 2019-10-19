import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {QuizService} from './services/quiz.service';
import {MatCardModule} from '@angular/material/card';
import { CreateQuizSuccessComponent } from './create-quiz-success/create-quiz-success.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { 
  QuizGuardService as QuizGuard 
} from './services/quiz-guard.service';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';

const appRoutes: Routes = [
  { path: '', component: CreateQuizComponent },
  { path: 'create-quiz', component: CreateQuizComponent },
  { path: 'create-quiz-success', component: CreateQuizSuccessComponent },
  { path: 'take-quiz', component: TakeQuizComponent },
  { path: 'quiz', component: QuizComponent, canActivate: [QuizGuard] }

];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CreateQuizComponent,
    CreateQuizSuccessComponent,
    TakeQuizComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [QuizService, QuizGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
