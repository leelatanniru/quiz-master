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
import {FlashMessagesModule} from 'angular2-flash-messages';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { 
  QuizGuardService as QuizGuard 
} from './services/quiz-guard.service';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthGuard } from './services/auth.guard';
import { AuthGuardb } from './services/auth.guardb';

import {UserService} from './services/user.service';
import { MyQuizesComponent } from './my-quizes/my-quizes.component';
import {MatTableModule} from '@angular/material/table';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { MyResultsComponent } from './my-results/my-results.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: CreateQuizComponent, canActivate:[AuthGuard]},
  { path: 'create-quiz', component: CreateQuizComponent, canActivate:[AuthGuard] },
  { path: 'create-quiz-success', component: CreateQuizSuccessComponent, canActivate:[AuthGuard] },
  { path: 'take-quiz', component: TakeQuizComponent, canActivate:[AuthGuard] },
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard, QuizGuard] },
  {path: 'quizes/:id', component: QuizDetailsComponent, canActivate:[AuthGuard]},
  {path: 'results/:id', component: QuizResultComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'my-quizes', component: MyQuizesComponent, canActivate:[AuthGuard] },
  { path: 'my-results', component: MyResultsComponent, canActivate:[AuthGuard] },
  { path: '**', component: PageNotFoundComponent }




];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CreateQuizComponent,
    CreateQuizSuccessComponent,
    TakeQuizComponent,
    RegisterComponent,
    LoginComponent,
    MyQuizesComponent,
    QuizDetailsComponent,
    QuizResultComponent,
    MyResultsComponent,
    PageNotFoundComponent
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
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlashMessagesModule,
    MatProgressSpinnerModule
  ],
  providers: [QuizService, QuizGuard, AuthService, FlashMessagesService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
