(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\r\n    <mat-toolbar color=\"primary\">\r\n            <a href=\"#\" *ngIf=\"!isLoggedIn\" ><button mat-flat-button color=\"primary\"> <h1>The Quiz Master</h1> </button></a>\r\n\r\n        <a href=\"#\" *ngIf=\"isLoggedIn\" routerLink=\"/create-quiz\"><button mat-flat-button color=\"primary\"> <h1>Create Quiz</h1> </button></a>\r\n        <a href=\"#\" *ngIf=\"isLoggedIn\" routerLink=\"/take-quiz\"><button mat-flat-button color=\"primary\"> <h1>Take Quiz</h1> </button></a>\r\n        <a href=\"#\" *ngIf=\"isLoggedIn\" routerLink=\"/my-quizes\"><button mat-flat-button color=\"primary\"> <h1>My Quizes</h1> </button></a>\r\n        <a href=\"#\" *ngIf=\"isLoggedIn\" routerLink=\"/my-results\"><button mat-flat-button color=\"primary\"> <h1>My Results</h1> </button></a>\r\n        <div class=\"flex-spacer\"></div>\r\n        <div style=\"float:right\">\r\n            <a href=\"#\" *ngIf=\"!isLoggedIn\" routerLink=\"/login\"><button mat-flat-button color=\"primary\"> <h1>Log In</h1> </button></a>\r\n            <a href=\"#\" *ngIf=\"!isLoggedIn\" routerLink=\"/register\"><button mat-flat-button color=\"primary\"> <h1>Register</h1> </button></a>\r\n\r\n            <a href=\"#\" *ngIf=\"isLoggedIn\"><button mat-flat-button color=\"primary\" (click)=\"onLogoutClick()\"> <h1>Log out</h1> </button></a>\r\n\r\n        </div>\r\n\r\n      </mat-toolbar>\r\n      <flash-messages></flash-messages>\r\n      <router-outlet></router-outlet>\r\n  <!-- <app-quiz></app-quiz> -->\r\n<!-- </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-quiz-success/create-quiz-success.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-quiz-success/create-quiz-success.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-div\">\n        <mat-card>\n                <mat-card-title>Quiz created successfully!</mat-card-title>\n                <br/>\n                <mat-card-content>\n                <div class=\"example-container\">\n                        <p></p>\n                    </div>\n                </mat-card-content>\n        </mat-card>\n        </div> -->\n\n\n        <div class=\"example-card main-div\">\n                <div *ngIf=\"quizId; else notShow\">\n              <h2>Quiz created successfully!</h2>\n              <br/>\n                <!-- <mat-card-content> -->\n                  <p>\n                        Please share the quizId <b>{{quizId}}</b> with the people who want to take the Quiz\n                  </p>\n                  <button mat-stroked-button color=\"primary\" (click)=\"copy()\">click here</button> to copy the Quiz Id.\n                </div>\n                <ng-template #notShow>\n                                <mat-spinner></mat-spinner>\n\n                                <p>\n                                  Creating quiz.Please wait:)\n                                </p>\n                              </ng-template>\n                <!-- </mat-card-content> -->\n                </div>\n              \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-quiz/create-quiz.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-quiz/create-quiz.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n<mat-card>\n\t\t<mat-card-title>Configure your Quiz</mat-card-title>\n\t\t<mat-card-content>\n\t\t<div class=\"example-container\">\n\t\t\t\t<form class=\"example-container\" [formGroup]=\"quizForm\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<!-- <label>Course Id</label> -->\n\t\t\t\t\t\t<input formControlName=\"name\" matInput placeholder=\"Quiz name\">\n\t\t\t\t\t\t<mat-error *ngIf=\"quizForm.controls['name'].hasError('required')\">Quiz name is required</mat-error>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<!-- <label>Number of questions</label> -->\n\t\t\t\t\t\t\t<input formControlName=\"description\" matInput placeholder=\"description\">\n\t\t\t\t\t\t<mat-error *ngIf=\"quizForm.controls['description'].hasError('required')\">Quiz description is required</mat-error>\n\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<!-- <label>Number of questions</label> -->\n\t\t\t\t\t\t\t<input formControlName=\"noOfQuestions\" matInput type=\"number\" placeholder=\"Number of questions\" >\n\t\t\t\t\t\t<mat-error *ngIf=\"quizForm.controls['noOfQuestions'].hasError('required')\">No Of questions is required</mat-error>\n\t\t\t\t\t\t<!-- <mat-error *ngIf=\"isValid()\">No of Questions and answer key length should match</mat-error> -->\n\t\t\t\t\t\t\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t\t\t<textarea formControlName=\"answerKey\" matInput placeholder=\"Enter answer key\" ></textarea>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<mat-error *ngIf=\"quizForm.controls['answerKey'].hasError('required')\">Answer key is required</mat-error>\n\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t\t\t\t<input formControlName=\"time\" matInput type=\"number\" placeholder=\"Enter quiz duration in minutes\">\n\t\t\t\t\t\t<mat-error *ngIf=\"quizForm.controls['time'].hasError('required')\">Quiz duration is required</mat-error>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t<div class=\"button\">\n\t\t\t\t\t\t\t\t<button mat-flat-button color=\"primary\" [disabled]=\"!quizForm.valid || !isValid() || !isAnswerKeyValid()\" (click)=\"onSubmit()\"> Create Quiz </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t</form>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t</mat-card-content>\n\t\t<mat-card-footer class=\"note\">\n\t\t\t\t<div *ngIf=\"isEdited() && (isValid() !== true || isAnswerKeyValid() !== true)\">\n\t\t\t\t\t\t<span class=\"mat-error mat-form-field-subscript-wrapper\">Please check the answer key you entered.</span>\n\t\t\t\t</div>\n\t\t\t\t<!-- <br/>\n\t\t\t\t<div *ngIf=\"isAnswerKeyValid() !== true\">\n\t\t\t\t\t\t<span class=\"mat-error mat-form-field-subscript-wrapper\">  Enter valid answer key example: 123124</span>\n\t\t\t\t</div> -->\n\t\t</mat-card-footer>\n</mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n    <mat-card>\n            <mat-card-title>Log In</mat-card-title>\n            <mat-card-content>\n            <div class=\"example-container\">\n                    <form class=\"example-container\" [formGroup]=\"loginForm\">\n                        <mat-form-field>\n                            <!-- <label>Course Id</label> -->\n                            <input formControlName=\"emailId\" matInput placeholder=\"Email Id\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <!-- <label>Course Id</label> -->\n                            <input type=\"password\" formControlName=\"password\" matInput placeholder=\"password\" required>\n                        </mat-form-field>\n                        \n                            \n                            <div class=\"button\">\n                                    <button mat-flat-button color=\"primary\" (click)=\"onSubmit()\"> Login </button>\n                            </div>\n                            \n                    </form>\n                    \n                </div>\n            </mat-card-content>\n    </mat-card>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-quizes/my-quizes.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-quizes/my-quizes.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataSource ; else notShow\" class=\"container\">\n    <div class=\"no-results\" *ngIf=\"dataSource.length == 0\">\n        No Quizes to show </div>\n        <table *ngIf=\"dataSource.length != 0\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!--- Note that these columns can be defined in any order.\n                      The actual rendered columns are set as a property on the row definition\" -->\n              \n                <!-- Quiz Name Column -->\n                <ng-container matColumnDef=\"Quiz Name\">\n                  <th mat-header-cell *matHeaderCellDef> Quiz Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n              \n                <!-- <ng-container matColumnDef=\"Quiz Id\">\n                  <th mat-header-cell *matHeaderCellDef> Quiz Id </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n                </ng-container>\n              \n                <ng-container matColumnDef=\"Description\">\n                  <th mat-header-cell *matHeaderCellDef> Description </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n                </ng-container>\n              \n                <ng-container matColumnDef=\"Max Score\">\n                  <th mat-header-cell *matHeaderCellDef> Max Score </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.noOfQues}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"Answer Key\">\n                        <th mat-header-cell *matHeaderCellDef> Answer Key </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.answerKey}} </td>\n                      </ng-container>\n                \n                <ng-container matColumnDef=\"Duration\">\n                        <th mat-header-cell *matHeaderCellDef> Duration </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\n                      </ng-container> -->\n\n\n                \n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"example-element-row\" (click)=\"getQuiz(row)\"></tr>\n              </table>\n          </div>\n          <ng-template #notShow class=\"example-container\">\n                <!-- <mat-spinner></mat-spinner>\n\n\n                <span>\n                please wait\n                </span> -->\n\n\n                <div class=\"spinner-wrapper\">\n                        <span>Loading, please wait</span>\n                  \n                        <mat-progress-spinner\n                          [color]=\"color\"\n                          [mode]=\"mode\"\n                          [diameter]=\"14 \"\n                          [value]=\"value\">\n                        </mat-progress-spinner>\n                      </div>\n              </ng-template>\n<!-- </mat-card-content> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-results/my-results.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-results/my-results.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataSource ; else notShow\" class=\"container\">\n    <div class=\"no-results\" *ngIf=\"dataSource.length == 0\">\n        No Results to show </div>\n        <table *ngIf=\"dataSource.length != 0\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!--- Note that these columns can be defined in any order.\n                      The actual rendered columns are set as a property on the row definition\" -->\n              \n                <!-- Quiz Id Column -->\n                <ng-container matColumnDef=\"Quiz Id\">\n                  <th mat-header-cell *matHeaderCellDef> Quiz Id </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.quizId}} </td>\n                </ng-container>\n\n                <!-- Score Column -->\n                <ng-container matColumnDef=\"Score\">\n                        <th mat-header-cell *matHeaderCellDef> Score </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.score}} </td>\n                      </ng-container>\n\n                 <!-- Max Score Column -->\n                 <ng-container matColumnDef=\"Max Score\">\n                        <th mat-header-cell *matHeaderCellDef> Max Score </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.maxSCore}} </td>\n                      </ng-container>      \n              \n                <!-- <ng-container matColumnDef=\"Quiz Id\">\n                  <th mat-header-cell *matHeaderCellDef> Quiz Id </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n                </ng-container>\n              \n                <ng-container matColumnDef=\"Description\">\n                  <th mat-header-cell *matHeaderCellDef> Description </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n                </ng-container>\n              \n                <ng-container matColumnDef=\"Max Score\">\n                  <th mat-header-cell *matHeaderCellDef> Max Score </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.noOfQues}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"Answer Key\">\n                        <th mat-header-cell *matHeaderCellDef> Answer Key </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.answerKey}} </td>\n                      </ng-container>\n                \n                <ng-container matColumnDef=\"Duration\">\n                        <th mat-header-cell *matHeaderCellDef> Duration </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\n                      </ng-container> -->\n\n\n                \n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"example-element-row\" (click)=\"getQuiz(row)\"></tr>\n              </table>\n          </div>\n          <ng-template #notShow class=\"example-container\">\n                <!-- <mat-spinner></mat-spinner>\n\n\n                <span>\n                please wait\n                </span> -->\n\n\n                <div class=\"spinner-wrapper\">\n                        <span>Loading, please wait</span>\n                  \n                        <mat-progress-spinner\n                          [color]=\"color\"\n                          [mode]=\"mode\"\n                          [diameter]=\"14 \"\n                          [value]=\"value\">\n                        </mat-progress-spinner>\n                      </div>\n              </ng-template>\n<!-- </mat-card-content> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-not-found\">Page not found</h3>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-details/quiz-details.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-details/quiz-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"quiz ; else notShow\" class=\"main-div\">\n        <mat-card>\n                <mat-card-content>\n                    <span><h4>Quiz Name:</h4><p class=\"quizDetails\">{{quiz.name}}</p></span>\n                    <span><h4>Quiz Id:</h4><p class=\"quizDetails\">{{quiz.id}}</p></span>\n                    <span><h4>Description: </h4><p class=\"quizDetails\">{{quiz.description}}</p></span>\n                    <span><h4>No of Questions</h4><p class=\"quizDetails\">{{quiz.noOfQues}}</p></span>\n                    <span><h4>Duration in minutes</h4><p class=\"quizDetails\">{{quiz.time}}</p></span>\n                    <span><h4>Answer Key</h4><p class=\"quizDetails\">{{quiz.answerKey}}</p></span>\n                    <div class=\"button\">\n                            <button mat-flat-button color=\"primary\" (click)=\"onSubmit()\"> Show Results </button>\n                    </div>\n\n                    </mat-card-content>\n                    </mat-card>\n                    </div>\n                    <ng-template #notShow class=\"example-container\">\n\n                    <div class=\"spinner-wrapper\">\n                            <span>Loading, please wait</span>\n                      \n                            <mat-progress-spinner\n                              [color]=\"color\"\n                              [mode]=\"mode\"\n                              [diameter]=\"14 \"\n                              [value]=\"value\">\n                            </mat-progress-spinner>\n                          </div>\n                  </ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-result/quiz-result.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-result/quiz-result.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataSource ; else notShow\" class=\"container\">\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!--- Note that these columns can be defined in any order.\n                      The actual rendered columns are set as a property on the row definition\" -->\n              \n                <!-- User Column -->\n                <ng-container matColumnDef=\"User\">\n                  <th mat-header-cell *matHeaderCellDef> User </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.user}} </td>\n                </ng-container>\n\n                <!-- User Column -->\n                <ng-container matColumnDef=\"Score\">\n                        <th mat-header-cell *matHeaderCellDef> Score </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.score}} </td>\n                      </ng-container>\n              \n                <!-- <ng-container matColumnDef=\"Quiz Id\">\n                  <th mat-header-cell *matHeaderCellDef> Quiz Id </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n                </ng-container>\n              \n                <ng-container matColumnDef=\"Description\">\n                  <th mat-header-cell *matHeaderCellDef> Description </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n                </ng-container>\n              \n                <ng-container matColumnDef=\"Max Score\">\n                  <th mat-header-cell *matHeaderCellDef> Max Score </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.noOfQues}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"Answer Key\">\n                        <th mat-header-cell *matHeaderCellDef> Answer Key </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.answerKey}} </td>\n                      </ng-container>\n                \n                <ng-container matColumnDef=\"Duration\">\n                        <th mat-header-cell *matHeaderCellDef> Duration </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\n                      </ng-container> -->\n\n\n                \n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n          </div>\n          <ng-template #notShow class=\"example-container\">\n                <!-- <mat-spinner></mat-spinner>\n\n\n                <span>\n                please wait\n                </span> -->\n\n\n                <div class=\"spinner-wrapper\">\n                        <span>Loading, please wait</span>\n                  \n                        <mat-progress-spinner\n                          [color]=\"color\"\n                          [mode]=\"mode\"\n                          [diameter]=\"14 \"\n                          [value]=\"value\">\n                        </mat-progress-spinner>\n                      </div>\n              </ng-template>\n<!-- </mat-card-content> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz/quiz.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz/quiz.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"quiz\">\r\n  <hr />\r\n\r\n  <div *ngIf=\"mode=='quiz' && quiz\">\r\n    <div class=\"main-div\"> \r\n    <mat-card>\r\n    <div *ngFor=\"let question of filteredQuestions;\">\r\n      <div class=\"badge badge-info\">Question {{pager.index + 1}} of {{pager.count}}.</div>\r\n      <div *ngIf=\"config.duration\" class=\"badge badge-info float-right\">Time: {{ellapsedTime}} / {{duration}}</div>\r\n      <h3 class=\"font-weight-normal\">{{pager.index + 1}}.\r\n        <span [innerHTML]=\"question.name\"></span>\r\n      </h3>\r\n      <div class=\"row text-left options\">\r\n        <div class=\"col-6\" *ngFor=\"let option of question.options\">\r\n          <div class=\"option\">\r\n            <label class=\"font-weight-normal\" [attr.for]=\"option.id\">\r\n              <input mat-input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\" (change)=\"onSelect(question, option);\" /> {{option.name}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n    <hr />\r\n    <div class=\"text-center\">\r\n      <button mat-button color=\"'#EC8015'\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button>\r\n      <button mat-button color=\"EC8015\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Prev</button>\r\n      <button mat-button color=\"0EBA27\" (click)=\"goTo(pager.index + 1);\">Next</button>\r\n      <button mat-button color=\"0EBA27\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last</button>\r\n      <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"mode=='review'\">\r\n    <!-- updated -->\r\n    <button class=\"btn\" (click)=\"mode = 'quiz'\">Back to Quiz</button>\r\n    <div class=\"row text-center\">\r\n    <div class=\"col-4 cursor-pointer\" *ngFor=\"let question of questions; let index = index;\">\r\n      <div (click)=\"goTo(index)\" class=\"p-3 mb-2 {{ isAnswered(question) == 'Answered'? 'bg-info': 'bg-warning' }}\">{{index + 1}}. {{ isAnswered(question) }}</div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"result\" *ngIf=\"mode=='result'\">\r\n    <h2>Quiz Result {{score}}/{{n}}</h2>\r\n    <!-- updated -->\r\n    <div *ngFor=\"let question of questions; let index = index\">\r\n      <div class=\"result-question\">\r\n        <h5>{{index + 1}}. {{question.name}}</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\" *ngFor=\"let Option of question.options\">\r\n            <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\r\n          </div>\r\n        </div>\r\n        <div class=\"p-1 m-2 alert {{ evaluatedAns[question.id - 1]? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(evaluatedAns[question.id - 1])}}.</div>\r\n        <div *ngIf=\"!evaluatedAns[question.id - 1]\" class=\"p-1 m-2 alert alert-success\">Correct answer is <b>Option {{getCorrectAns(question.id - 1)}}</b>.</div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <div *ngIf=\"mode!='result' && mode!='review'\">\r\n      <div class=\"text-center\">\r\n    <button mat-button  color='warn' (click)=\"mode = 'review'\">Review</button>\r\n    <!-- <br/> -->\r\n    <!-- <input type=\"text\" placeholder=\"Enter the key here to submit the quiz\" [(ngModel)]=\"ansKey\"/> -->\r\n    <!-- <br/> -->\r\n    <button mat-button mat-raised-button color='accent' (click)=\"onSubmit();\">Submit Quiz </button>\r\n      </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n    <mat-card>\n            <mat-card-title>Sign Up</mat-card-title>\n            <mat-card-content>\n            <div class=\"example-container\">\n                    <form class=\"example-container\" [formGroup]=\"registerForm\">\n                            <mat-form-field>\n                                    <!-- <label>Course Id</label> -->\n                                    <input formControlName=\"firstName\" matInput placeholder=\"First Name\" required>\n                                </mat-form-field>\n                            <mat-form-field>\n                                    <!-- <label>Course Id</label> -->\n                                    <input formControlName=\"lastName\" matInput placeholder=\"Last Name\" required>\n                                </mat-form-field>\n                        <mat-form-field>\n                            <!-- <label>Course Id</label> -->\n                            <input formControlName=\"emailId\" matInput placeholder=\"Email Id\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <!-- <label>Course Id</label> -->\n                            <input formControlName=\"password\" type=\"password\" matInput placeholder=\"password\" required>\n                        </mat-form-field>\n                        \n                            \n                            <div class=\"button\">\n                                    <button mat-flat-button color=\"primary\" (click)=\"onSubmit()\"> Register </button>\n                            </div>\n                            \n                    </form>\n                    \n                </div>\n            </mat-card-content>\n    </mat-card>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/take-quiz/take-quiz.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/take-quiz/take-quiz.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n\t<mat-card>\n\t\t<mat-card-title>Enter Quiz Id to continue</mat-card-title>\n\t\t<mat-card-content>\n\t\t\t<div class=\"example-container\">\n\t\t\t\t<form class=\"example-container\" [formGroup]=\"takeQuizForm\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<!-- <label>Course Id</label> -->\n\t\t\t\t\t\t<input formControlName=\"quizId\" matInput placeholder=\"Course Id\" required>\n\t\t\t\t\t\t<mat-error *ngIf=\"takeQuizForm.controls['quizId'].hasError('required')\">Quiz Id is\n\t\t\t\t\t\t\trequired</mat-error>\n\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<div class=\"button\">\n\t\t\t\t\t\t<button mat-flat-button color=\"accent\" (click)=\"onSubmit()\"> START </button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</mat-card-content>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-spacer {\r\n    flex-grow: 1;\r\n}\r\napp-navbar {\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LXNwYWNlciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuYXBwLW5hdmJhciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AppComponent = class AppComponent {
    constructor(authService, router, flashMessage, userService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.userService = userService;
    }
    ngOnInit() {
        this.authService.getAuth().subscribe(auth => {
            if (auth) {
                this.isLoggedIn = true;
                console.log('calling set logged in user');
            }
            else {
                this.isLoggedIn = false;
            }
        });
    }
    onLogoutClick() {
        this.authService.logout();
        this.flashMessage.show('You are now logged out', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-quiz/create-quiz.component */ "./src/app/create-quiz/create-quiz.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _create_quiz_success_create_quiz_success_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-quiz-success/create-quiz-success.component */ "./src/app/create-quiz-success/create-quiz-success.component.ts");
/* harmony import */ var _take_quiz_take_quiz_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./take-quiz/take-quiz.component */ "./src/app/take-quiz/take-quiz.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _services_quiz_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/quiz-guard.service */ "./src/app/services/quiz-guard.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _my_quizes_my_quizes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./my-quizes/my-quizes.component */ "./src/app/my-quizes/my-quizes.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _quiz_details_quiz_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./quiz-details/quiz-details.component */ "./src/app/quiz-details/quiz-details.component.ts");
/* harmony import */ var _quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./quiz-result/quiz-result.component */ "./src/app/quiz-result/quiz-result.component.ts");
/* harmony import */ var _my_results_my_results_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./my-results/my-results.component */ "./src/app/my-results/my-results.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































const appRoutes = [
    { path: '', component: _create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_9__["CreateQuizComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'create-quiz', component: _create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_9__["CreateQuizComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'create-quiz-success', component: _create_quiz_success_create_quiz_success_component__WEBPACK_IMPORTED_MODULE_15__["CreateQuizSuccessComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'take-quiz', component: _take_quiz_take_quiz_component__WEBPACK_IMPORTED_MODULE_16__["TakeQuizComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"], _services_quiz_guard_service__WEBPACK_IMPORTED_MODULE_19__["QuizGuardService"]] },
    { path: 'quizes/:id', component: _quiz_details_quiz_details_component__WEBPACK_IMPORTED_MODULE_31__["QuizDetailsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'results/:id', component: _quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_32__["QuizResultComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"] },
    { path: 'my-quizes', component: _my_quizes_my_quizes_component__WEBPACK_IMPORTED_MODULE_29__["MyQuizesComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'my-results', component: _my_results_my_results_component__WEBPACK_IMPORTED_MODULE_33__["MyResultsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_34__["PageNotFoundComponent"] }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"],
            _create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_9__["CreateQuizComponent"],
            _create_quiz_success_create_quiz_success_component__WEBPACK_IMPORTED_MODULE_15__["CreateQuizSuccessComponent"],
            _take_quiz_take_quiz_component__WEBPACK_IMPORTED_MODULE_16__["TakeQuizComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            _my_quizes_my_quizes_component__WEBPACK_IMPORTED_MODULE_29__["MyQuizesComponent"],
            _quiz_details_quiz_details_component__WEBPACK_IMPORTED_MODULE_31__["QuizDetailsComponent"],
            _quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_32__["QuizResultComponent"],
            _my_results_my_results_component__WEBPACK_IMPORTED_MODULE_33__["MyResultsComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_34__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"]
        ],
        providers: [_services_quiz_service__WEBPACK_IMPORTED_MODULE_13__["QuizService"], _services_quiz_guard_service__WEBPACK_IMPORTED_MODULE_19__["QuizGuardService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesService"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"], _services_user_service__WEBPACK_IMPORTED_MODULE_28__["UserService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/create-quiz-success/create-quiz-success.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/create-quiz-success/create-quiz-success.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-title,\r\nmat-card,\r\nmat-card-content {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.example-container > * {\r\n    width: 100%;\r\n  }\r\n.main-div{\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n:host {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n.example-card {\r\n    max-width: 400px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXF1aXotc3VjY2Vzcy9jcmVhdGUtcXVpei1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXF1aXotc3VjY2Vzcy9jcmVhdGUtcXVpei1zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC10aXRsZSxcclxubWF0LWNhcmQsXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTAwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/create-quiz-success/create-quiz-success.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/create-quiz-success/create-quiz-success.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateQuizSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuizSuccessComponent", function() { return CreateQuizSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CreateQuizSuccessComponent = class CreateQuizSuccessComponent {
    constructor() {
        this.quizId = localStorage.getItem('newQuizId');
    }
    ngOnInit() {
    }
    copy() {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (this.quizId));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
};
CreateQuizSuccessComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create-quiz-success',
        template: __webpack_require__(/*! raw-loader!./create-quiz-success.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-quiz-success/create-quiz-success.component.html"),
        styles: [__webpack_require__(/*! ./create-quiz-success.component.css */ "./src/app/create-quiz-success/create-quiz-success.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CreateQuizSuccessComponent);



/***/ }),

/***/ "./src/app/create-quiz/create-quiz.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-quiz/create-quiz.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .main-div{\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .answerKey{\r\n    padding-bottom: 20px;\r\n  }\r\n  \r\n  .note {\r\n    margin-bottom: 10px;\r\n    margin-left: 40px;\r\n  }\r\n  \r\n  :host {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    width: 100%;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  mat-card-title,\r\n  mat-card-content {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .button {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXF1aXovY3JlYXRlLXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7O0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXF1aXovY3JlYXRlLXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYWluLWRpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hbnN3ZXJLZXl7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLm5vdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQtdGl0bGUsXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/create-quiz/create-quiz.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-quiz/create-quiz.component.ts ***!
  \******************************************************/
/*! exports provided: CreateQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuizComponent", function() { return CreateQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let CreateQuizComponent = class CreateQuizComponent {
    constructor(router, userService, quizService) {
        this.router = router;
        this.userService = userService;
        this.quizService = quizService;
    }
    ngOnInit() {
        this.quizForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            noOfQuestions: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            answerKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](30, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    isEdited() {
        console.log('is edited');
        console.log(this.quizForm.dirty);
        return this.quizForm.dirty;
    }
    isAnswerKeyValid() {
        return /^[1-4]+$/.test(this.quizForm.controls['answerKey'].value);
    }
    isValid() {
        console.log('isVAlid');
        console.log(this.quizForm.controls['answerKey'].value.length);
        if (this.quizForm.controls['answerKey'].value.length !== this.quizForm.controls['noOfQuestions'].value) {
            console.log('false');
            return false;
        }
        console.log('true');
        return true;
    }
    onSubmit() {
        console.log('form submitted');
        var t = this.quizForm.controls['time'].value;
        var myquiz = {};
        myquiz.answerKey = this.quizForm.controls['answerKey'].value;
        myquiz.description = this.quizForm.controls['description'].value;
        myquiz.noOfQues = this.quizForm.controls['noOfQuestions'].value;
        myquiz.owner = localStorage.getItem('userId');
        myquiz.name = this.quizForm.controls['name'].value;
        myquiz.time = this.quizForm.controls['time'].value;
        // var a = t.split(':'); // split it at the colons
        this.quizService.newQuiz(myquiz);
        //  localStorage.setItem('quizId', this.quizForm.controls['courseId'].value);
        //  localStorage.setItem('noOfQuizes', (parseInt(localStorage.getItem('noOfQuizes'), 10) + 1).toString());
        console.log(this.quizForm);
        // this.userService.updateNoofQuizes();
        // localStorage.setItem('courseId', this.quizForm.controls['courseId'].value);
        // localStorage.setItem('noOfQuestions', this.quizForm.controls['noOfQuestions'].value);
        // localStorage.setItem(this.quizForm.controls['courseId'].value, this.quizForm.controls['answerKey'].value);
    }
};
CreateQuizComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"] }
];
CreateQuizComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create-quiz',
        template: __webpack_require__(/*! raw-loader!./create-quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-quiz/create-quiz.component.html"),
        styles: [__webpack_require__(/*! ./create-quiz.component.css */ "./src/app/create-quiz/create-quiz.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"]])
], CreateQuizComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .main-div{\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .mat-card-title {\r\n      justify-content: center;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    width: 100%;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  :host {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n  \r\n  mat-card-title,\r\n  mat-card-content {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .button {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBQ0E7TUFDSSx1QkFBdUI7RUFDM0I7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBQ0E7O0lBRUUsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcclxuICB9XHJcbiAgbWF0LWNhcmQtdGl0bGUsXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let LoginComponent = class LoginComponent {
    constructor(authService, flashMessage, router, userService) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    onSubmit() {
        this.authService.login(this.loginForm.controls['emailId'].value, this.loginForm.controls['password'].value)
            .then((res) => {
            localStorage.setItem('userId', res.user.email);
            this.flashMessage.show('You are now logged in', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/take-quiz']);
        })
            .catch(err => {
            this.flashMessage.show(err.message, {
                cssClass: 'alert-danger', timeout: 4000
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Option, Question, Quiz, QuizConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./src/app/models/option.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _option__WEBPACK_IMPORTED_MODULE_0__["Option"]; });

/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/models/question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _question__WEBPACK_IMPORTED_MODULE_1__["Question"]; });

/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz */ "./src/app/models/quiz.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return _quiz__WEBPACK_IMPORTED_MODULE_2__["Quiz"]; });

/* harmony import */ var _quiz_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-config */ "./src/app/models/quiz-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizConfig", function() { return _quiz_config__WEBPACK_IMPORTED_MODULE_3__["QuizConfig"]; });







/***/ }),

/***/ "./src/app/models/option.ts":
/*!**********************************!*\
  !*** ./src/app/models/option.ts ***!
  \**********************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
class Option {
    constructor(data) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
}
Option.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/models/question.ts":
/*!************************************!*\
  !*** ./src/app/models/question.ts ***!
  \************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./src/app/models/option.ts");

class Question {
    constructor(data) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new _option__WEBPACK_IMPORTED_MODULE_0__["Option"](o));
        });
    }
}
Question.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/models/quiz-config.ts":
/*!***************************************!*\
  !*** ./src/app/models/quiz-config.ts ***!
  \***************************************/
/*! exports provided: QuizConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizConfig", function() { return QuizConfig; });
class QuizConfig {
    constructor(data) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
    }
}
QuizConfig.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/models/quiz.ts":
/*!********************************!*\
  !*** ./src/app/models/quiz.ts ***!
  \********************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question */ "./src/app/models/question.ts");

class Quiz {
    constructor(data) {
        if (data) {
            // this.id = data.id;
            // this.name = data.name;
            // this.description = data.description;
            // this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new _question__WEBPACK_IMPORTED_MODULE_0__["Question"](q));
            });
        }
    }
}
Quiz.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/my-quizes/my-quizes.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-quizes/my-quizes.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    justify-content: center;\r\n    display: flex;\r\n\r\n  }\r\n  .example-container {\r\n    display: block;\r\n    flex-direction: row;\r\n  }\r\n  .container {\r\n      width: 500px;\r\n  }\r\n  .spinner-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 100px;\r\n    font-size: 24px;\r\n\r\n  }\r\n  th.mat-header-cell {\r\n    text-align: center;\r\n}\r\n  td.mat-cell {\r\n    text-align: center;\r\n}\r\n  table {\r\n      margin-top: 40px;\r\n      /* margin-left: 100px;\r\n      margin-right: 100px; */\r\n\r\n    width: 100%;\r\n  }\r\n  .no-results {\r\n    align-items: center; \r\n    justify-content: center;\r\n    margin-top: 100px;\r\n    font-size: 35px;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n  }\r\n  tr.example-element-row:hover {\r\n    background: rgb(201, 214, 241);\r\n    cursor: pointer;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcXVpemVzL215LXF1aXplcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7O0VBRWY7RUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7RUFDQTtNQUNJLFlBQVk7RUFDaEI7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlOztFQUVqQjtFQUVBO0lBQ0Usa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7RUFFRTtNQUNJLGdCQUFnQjtNQUNoQjs0QkFDc0I7O0lBRXhCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFHQTtJQUNFLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbXktcXVpemVzL215LXF1aXplcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICB9XHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5zcGlubmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICB9XHJcblxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGQubWF0LWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gIHRhYmxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgLyogbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4OyAqL1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubm8tcmVzdWx0cyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgfVxyXG5cclxuXHJcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAxLCAyMTQsIDI0MSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/my-quizes/my-quizes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-quizes/my-quizes.component.ts ***!
  \**************************************************/
/*! exports provided: MyQuizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQuizesComponent", function() { return MyQuizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MyQuizesComponent = class MyQuizesComponent {
    constructor(quizService, router) {
        this.quizService = quizService;
        this.router = router;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        // public displayedColumns: string[] =['Quiz Name', 'Quiz Id', 'Description', 'Max Score', 'Answer Key', 'Duration'];
        this.displayedColumns = ['Quiz Name'];
        this.currentUser = localStorage.getItem('userId');
        console.log(this.currentUser);
        this.subscription = this.quizService.getQuizes().subscribe((data) => {
            this.dataSource = data.filter(d => {
                console.log(d.time);
                console.log(this.currentUser);
                console.log('*****');
                return d.owner == this.currentUser;
            });
            // console.log('console.log(this.myQuizes);');
            // this.di
            // console.log(this.myQuizes);
        });
    }
    getQuiz(row) {
        console.log('row', row.id);
        this.router.navigateByUrl('quizes/' + row.id);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
MyQuizesComponent.ctorParameters = () => [
    { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MyQuizesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-my-quizes',
        template: __webpack_require__(/*! raw-loader!./my-quizes.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-quizes/my-quizes.component.html"),
        styles: [__webpack_require__(/*! ./my-quizes.component.css */ "./src/app/my-quizes/my-quizes.component.css")]
    }),
    __metadata("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MyQuizesComponent);



/***/ }),

/***/ "./src/app/my-results/my-results.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-results/my-results.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    justify-content: center;\r\n    display: flex;\r\n\r\n  }\r\n  .no-results {\r\n    align-items: center; \r\n    justify-content: center;\r\n    margin-top: 100px;\r\n    font-size: 35px;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n  }\r\n  .example-container {\r\n    display: block;\r\n    flex-direction: row;\r\n  }\r\n  .container {\r\n      width: 500px;\r\n  }\r\n  .spinner-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 100px;\r\n    font-size: 24px;\r\n  }\r\n  th.mat-header-cell {\r\n    text-align: center;\r\n}\r\n  td.mat-cell {\r\n    text-align: center;\r\n}\r\n  table {\r\n      margin-top: 40px;\r\n      /* margin-left: 100px;\r\n      margin-right: 100px; */\r\n\r\n    width: 100%;\r\n  }\r\n  tr.example-element-row:hover {\r\n    background: rgb(201, 214, 241);\r\n    cursor: pointer;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcmVzdWx0cy9teS1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTs7RUFFZjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7RUFDQTtNQUNJLFlBQVk7RUFDaEI7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0VBRUE7SUFDRSxrQkFBa0I7QUFDdEI7RUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtFQUVFO01BQ0ksZ0JBQWdCO01BQ2hCOzRCQUNzQjs7SUFFeEIsV0FBVztFQUNiO0VBR0E7SUFDRSw4QkFBOEI7SUFDOUIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL215LXJlc3VsdHMvbXktcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICB9XHJcbiAgLm5vLXJlc3VsdHMge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIH1cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG5cclxuICB0aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRkLm1hdC1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgIC8qIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDsgKi9cclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDEsIDIxNCwgMjQxKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/my-results/my-results.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-results/my-results.component.ts ***!
  \****************************************************/
/*! exports provided: MyResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyResultsComponent", function() { return MyResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_result_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/result.service */ "./src/app/services/result.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MyResultsComponent = class MyResultsComponent {
    constructor(resultService) {
        this.resultService = resultService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.displayedColumns = ['Quiz Id', 'Score', 'Max Score'];
        this.currentUser = localStorage.getItem('userId');
        this.subscription = this.resultService.getResultsByUser(localStorage.getItem('userId')).subscribe((data) => {
            this.dataSource = data;
            console.log(this.dataSource);
            // console.log('console.log(this.myQuizes);');
            // this.di
            // console.log(this.myQuizes);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
    }
};
MyResultsComponent.ctorParameters = () => [
    { type: _services_result_service__WEBPACK_IMPORTED_MODULE_1__["ResultService"] }
];
MyResultsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-my-results',
        template: __webpack_require__(/*! raw-loader!./my-results.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-results/my-results.component.html"),
        styles: [__webpack_require__(/*! ./my-results.component.css */ "./src/app/my-results/my-results.component.css")]
    }),
    __metadata("design:paramtypes", [_services_result_service__WEBPACK_IMPORTED_MODULE_1__["ResultService"]])
], MyResultsComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-not-found {\r\n    margin-top:40px;\r\n    margin-left: 40%;\r\n    margin-right: 40%;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1ub3QtZm91bmQge1xyXG4gICAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/quiz-details/quiz-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/quiz-details/quiz-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quizDetails {\r\n    font-size: 24px;\r\n}\r\n.button {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n.main-div{\r\n    height: 100%;\r\n    width: 50%;\r\n    /* display: flex; */\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 40px;\r\n    margin-left: 25%;\r\n    margin-right: 25%;\r\n  }\r\n.spinner-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 100px;\r\n    font-size: 24px;\r\n\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1kZXRhaWxzL3F1aXotZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7O0VBRWpCIiwiZmlsZSI6InNyYy9hcHAvcXVpei1kZXRhaWxzL3F1aXotZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXpEZXRhaWxzIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYWluLWRpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5zcGlubmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/quiz-details/quiz-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quiz-details/quiz-details.component.ts ***!
  \********************************************************/
/*! exports provided: QuizDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizDetailsComponent", function() { return QuizDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let QuizDetailsComponent = class QuizDetailsComponent {
    constructor(quizService, route, router) {
        this.quizService = quizService;
        this.route = route;
        this.router = router;
    }
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
        this.router.navigateByUrl('results/' + this.quiz.id);
    }
};
QuizDetailsComponent.ctorParameters = () => [
    { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
QuizDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-quiz-details',
        template: __webpack_require__(/*! raw-loader!./quiz-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-details/quiz-details.component.html"),
        styles: [__webpack_require__(/*! ./quiz-details.component.css */ "./src/app/quiz-details/quiz-details.component.css")]
    }),
    __metadata("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], QuizDetailsComponent);



/***/ }),

/***/ "./src/app/quiz-result/quiz-result.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quiz-result/quiz-result.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    justify-content: center;\r\n    display: flex;\r\n\r\n  }\r\n  .example-container {\r\n    display: block;\r\n    flex-direction: row;\r\n  }\r\n  .container {\r\n      width: 500px;\r\n  }\r\n  .spinner-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 100px;\r\n    font-size: 24px;\r\n\r\n  }\r\n  th.mat-header-cell {\r\n    text-align: center;\r\n}\r\n  td.mat-cell {\r\n    text-align: center;\r\n}\r\n  table {\r\n      margin-top: 40px;\r\n      /* margin-left: 100px;\r\n      margin-right: 100px; */\r\n\r\n    width: 100%;\r\n  }\r\n  tr.example-element-row:hover {\r\n    background: rgb(201, 214, 241);\r\n    cursor: pointer;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1yZXN1bHQvcXVpei1yZXN1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhOztFQUVmO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7TUFDSSxZQUFZO0VBQ2hCO0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTs7RUFFakI7RUFFQTtJQUNFLGtCQUFrQjtBQUN0QjtFQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0VBRUU7TUFDSSxnQkFBZ0I7TUFDaEI7NEJBQ3NCOztJQUV4QixXQUFXO0VBQ2I7RUFHQTtJQUNFLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcXVpei1yZXN1bHQvcXVpei1yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgfVxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAuc3Bpbm5lci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuXHJcbiAgfVxyXG5cclxuICB0aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRkLm1hdC1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgIC8qIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDsgKi9cclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDEsIDIxNCwgMjQxKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/quiz-result/quiz-result.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quiz-result/quiz-result.component.ts ***!
  \******************************************************/
/*! exports provided: QuizResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultComponent", function() { return QuizResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_result_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/result.service */ "./src/app/services/result.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let QuizResultComponent = class QuizResultComponent {
    constructor(resultService, route, router) {
        this.resultService = resultService;
        this.route = route;
        this.router = router;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.displayedColumns = ['User', 'Score'];
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.resultService.getResultsForQuiz(this.id).subscribe((data) => {
            this.dataSource = data;
            console.log(this.dataSource);
        });
    }
};
QuizResultComponent.ctorParameters = () => [
    { type: _services_result_service__WEBPACK_IMPORTED_MODULE_1__["ResultService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
QuizResultComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-quiz-result',
        template: __webpack_require__(/*! raw-loader!./quiz-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-result/quiz-result.component.html"),
        styles: [__webpack_require__(/*! ./quiz-result.component.css */ "./src/app/quiz-result/quiz-result.component.css")]
    }),
    __metadata("design:paramtypes", [_services_result_service__WEBPACK_IMPORTED_MODULE_1__["ResultService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], QuizResultComponent);



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div{\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .badge-info {\r\n      \r\n      color: black;\r\n      background-color: goldenrod;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7O01BRUksWUFBWTtNQUNaLDJCQUEyQjtFQUMvQiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5iYWRnZS1pbmZvIHtcclxuICAgICAgXHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/index */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let QuizComponent = class QuizComponent {
    constructor(quizService) {
        this.quizService = quizService;
        this.ansKey = null;
        this.quiz = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Quiz"](null);
        this.mode = 'quiz';
        this.config = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false,
            'duration': 5400,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': false,
            'shuffleOptions': false,
            'showClock': false,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
        this.timer = null;
        this.ellapsedTime = '00:00';
        this.duration = '';
    }
    ngOnInit() {
        console.log('ngOnInit');
        console.log('is quiz started??? ' + this.quizService.isQuizStarted());
        console.log(this.quizService.quiz);
        this.loadQuiz();
        // const encryptAns = CryptoJS.AES.encrypt('1,1,1,1,1,1,1,1,1,1', 'this.encryptSecretKey').toString();
        // console.log('encryptAns    ',encryptAns);
        // this.quizes = this.quizService.getAll();
        // console.log('quizes',this.quizes);
        // console.log(this.quizes);
        // this.quizName = this.quizes[1].id;
        // this.loadQuiz(this.quizName);
    }
    loadQuiz() {
        let n = this.quizService.quiz.noOfQues;
        this.questions = [];
        this.quizDuration = this.quizService.quiz.time * 60;
        for (var i = 0; i < n; i++) {
            const a = {};
            a['id'] = i + 1;
            a['name'] = 'Question ' + (i + 1);
            a['options'] = [{
                    id: 1,
                    name: 'Option 1'
                },
                {
                    id: 2,
                    name: 'Option 2'
                },
                {
                    id: 3,
                    name: 'Option 3'
                },
                {
                    id: 4,
                    name: 'Option 4'
                }];
            this.questions.push(a);
        }
        console.log('questions****');
        console.log(this.questions);
        this.pager.count = this.questions.length;
        this.startTime = new Date();
        this.ellapsedTime = '00:00';
        this.timer = setInterval(() => { this.tick(); }, 1000);
        this.duration = this.parseTime(this.quizDuration);
        // this.quizService.get(quizName).subscribe(res => {
        //   console.log('responce*********');
        //   console.log(res);
        //   this.quiz = new Quiz(res);
        //   console.log('loaded quiz', this.quiz);
        // });
        this.mode = 'quiz';
    }
    tick() {
        const now = new Date();
        const diff = (now.getTime() - this.startTime.getTime()) / 1000;
        if (diff >= this.quizDuration) {
            this.onSubmit();
        }
        this.ellapsedTime = this.parseTime(diff);
    }
    parseTime(totalSeconds) {
        let mins = Math.floor(totalSeconds / 60);
        let secs = Math.round(totalSeconds % 60);
        mins = (mins < 10 ? '0' : '') + mins;
        secs = (secs < 10 ? '0' : '') + secs;
        return `${mins}:${secs}`;
    }
    get filteredQuestions() {
        // updated
        return (this.questions) ?
            this.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
    }
    onSelect(question, option) {
        console.log('onSelect');
        console.log(question);
        console.log(question.options);
        this.quizService.evaluate(question, option.id);
        // if (question.questionTypeId === 1) {
        question.options.forEach((x) => {
            if (x.id !== option.id) {
                x.selected = false;
                console.log(x);
            }
        });
        // }
        console.log(this.questions);
        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    }
    goTo(index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    }
    isAnswered(question) {
        console.log('isAnswered');
        console.log(question.options);
        return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
    }
    ;
    isCorrect(val) {
        return val ? 'correct' : 'incorrect';
    }
    ;
    onSubmit() {
        // let answers = [];
        // this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));
        // Post your data to the server here. answers contains the questionId and the users' answer.
        console.log(this.quiz.questions);
        this.ans = this.quizService.answers;
        this.evaluatedAns = this.quizService.getResult();
        console.log(this.evaluatedAns);
        this.score = this.evaluatedAns.filter(v => v).length;
        this.n = this.evaluatedAns.length;
        // this.quizService.evaluate(this.quiz.questions);
        this.mode = 'result';
        console.log('is quiz started??? ' + this.quizService.isQuizStarted());
    }
    getCorrectAns(id) {
        return this.ans[id];
    }
};
QuizComponent.ctorParameters = () => [
    { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] }
];
QuizComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-quiz',
        template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz/quiz.component.html"),
        styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
    }),
    __metadata("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])
], QuizComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .main-div{\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .mat-card-title {\r\n      justify-content: center;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    width: 100%;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  :host {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n  \r\n  mat-card-title,\r\n  mat-card-content {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .button {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBQ0E7TUFDSSx1QkFBdUI7RUFDM0I7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBQ0E7O0lBRUUsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcclxuICB9XHJcbiAgbWF0LWNhcmQtdGl0bGUsXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/counter.service */ "./src/app/services/counter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let RegisterComponent = class RegisterComponent {
    // public n: number;
    constructor(authService, flashMessage, router, userService, counterService) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.userService = userService;
        this.counterService = counterService;
        // this.counterService.getCount();
        // console.log(this.counterService.n);
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        // this.userService.getUsers().subscribe(data => {
        //   console.log(data);
        //   this.n = data.length;
        //   console.log('n ', this.n);
        // });
    }
    onSubmit() {
        let user = {};
        user.email = this.registerForm.controls['emailId'].value;
        user.firstName = this.registerForm.controls['firstName'].value;
        user.lastName = this.registerForm.controls['lastName'].value;
        user.noOfQuizes = 0;
        this.authService.register(this.registerForm.controls['emailId'].value, this.registerForm.controls['password'].value)
            .then((res) => {
            localStorage.setItem('userId', res.user.email);
            // user.userId = res.user.uid;
            this.userService.newUser(user);
            this.flashMessage.show('You are now registered and logged in', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/take-quiz']);
        })
            .catch(err => {
            this.flashMessage.show(err.message, {
                cssClass: 'alert-danger', timeout: 4000
            });
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_counter_service__WEBPACK_IMPORTED_MODULE_6__["CounterService"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _services_counter_service__WEBPACK_IMPORTED_MODULE_6__["CounterService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AuthGuard = class AuthGuard {
    constructor(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    canActivate() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(auth => {
            if (!auth) {
                this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Observable } from 'rxjs/Observable';
let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    register(email, password) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    getAuth() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(auth => auth));
    }
    logout() {
        this.afAuth.auth.signOut();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
];
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/counter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/counter.service.ts ***!
  \*********************************************/
/*! exports provided: CounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterService", function() { return CounterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CounterService = class CounterService {
    constructor(afs) {
        this.afs = afs;
        this.countCollection = this.afs.collection('noOfUsers');
    }
    getCount() {
        this.n = this.countCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                // data.id = action.payload.doc.id;
                // console.log('data', data);
                console.log('returning the count!!!');
                return data.n;
            });
        }));
    }
};
CounterService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
CounterService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
], CounterService);



/***/ }),

/***/ "./src/app/services/quiz-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/quiz-guard.service.ts ***!
  \************************************************/
/*! exports provided: QuizGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizGuardService", function() { return QuizGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz.service */ "./src/app/services/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// src/app/auth/role-guard.service.ts



let QuizGuardService = class QuizGuardService {
    constructor(quiz, router) {
        this.quiz = quiz;
        this.router = router;
    }
    canActivate(route) {
        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.expectedRole;
        const token = localStorage.getItem('token');
        // decode the token to get its payload
        // const tokenPayload = decode(token);
        console.log('inside quiz guard');
        console.log(this.quiz.isQuizStarted());
        if (!this.quiz.isQuizStarted()) {
            this.router.navigate(['take-quiz']);
            return false;
        }
        return true;
    }
};
QuizGuardService.ctorParameters = () => [
    { type: _quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
QuizGuardService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], QuizGuardService);



/***/ }),

/***/ "./src/app/services/quiz.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _result_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result.service */ "./src/app/services/result.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { timingSafeEqual } from 'crypto';
let QuizService = class QuizService {
    constructor(afs, router, resultService) {
        this.afs = afs;
        this.router = router;
        this.resultService = resultService;
        this.quizDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        localStorage.setItem('1-01', '12312312');
        this.quizesCollection = this.afs.collection('quizes');
        //  this.getQuizes().subscribe(d => {
        //   this.noOfQuizes = d.length;
        //  }
        //     );
        // console.log(this.usersCollection)
    }
    getQuizes() {
        // Get clients with the id
        console.log('getting users');
        this.quizes = this.quizesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                // console.log('data', data);
                return data;
            });
        }));
        console.log('printing users');
        console.log(this.quizes);
        return this.quizes;
    }
    getQuiz(id) {
        console.log('get quiz');
        console.log(id);
        this.quizDoc = this.afs.doc(`quizes/${id}`);
        this.quizDoc.snapshotChanges().subscribe(action => {
            if (action.payload.exists === false) {
                console.log('false returned');
                return null;
            }
            else {
                console.log('true return');
                const data = action.payload.data();
                data.id = action.payload.id;
                this.quizDetails.next(data);
                return data;
            }
        });
        // console.log(this.quizDetails);
        // return this.quizDetails;
    }
    startQuiz(quizId) {
        this.quizDoc = this.afs.doc(`quizes/${quizId}`);
        this.quizDoc.snapshotChanges().subscribe(action => {
            if (action.payload.exists === false) {
                alert("Please enter a valid Quiz Id");
                return null;
            }
            else {
                const data = action.payload.data();
                data.id = action.payload.id;
                this.quiz = data;
                this.quizStarted = true;
                this.result = [];
                for (var i = 0; i < this.quiz.noOfQues; i++) {
                    this.result.push(false);
                }
                this.answers = this.quiz.answerKey.split('');
                console.log('printing answers!!!!!!!!!!!!!!!!!');
                console.log(this.answers);
                console.log('inside the quiz service navigating');
                this.router.navigateByUrl('/quiz');
                console.log(this.quiz);
                return data;
            }
        });
    }
    // getClient(id: string): Observable<Client> {
    //   this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
    //   this.client = this.clientDoc.snapshotChanges().map(action => {
    //     if(action.payload.exists === false) {
    //       return null;
    //     } else {
    //       const data = action.payload.data() as Client;
    //       data.id = action.payload.id;
    //       return data;
    //     }
    //   });
    //   return this.client;
    // }
    newQuiz(quiz) {
        console.log('quiz added');
        localStorage.removeItem('newQuizId');
        this.quizesCollection.add(quiz).then((res) => {
            console.log(res);
            localStorage.setItem('newQuizId', res.id);
            console.log('navigate');
            this.router.navigateByUrl('/create-quiz-success');
        }, err => console.log('error!!!'));
    }
    getResult() {
        let res = {};
        res.user = localStorage.getItem('userId');
        res.maxSCore = this.quiz.noOfQues;
        res.score = this.result.filter(v => v).length;
        res.quizId = this.quiz.id;
        console.log('$$$$$$$$$$$$$$$$');
        console.log(res);
        this.resultService.newResult(res);
        return this.result;
    }
    // setQuizId(s: string) {
    //   this.quizId = s;
    //   this.answers = localStorage.getItem(this.quizId).split('');
    //   const n = parseInt(localStorage.getItem('noOfQuestions'), 10);
    //   console.log('answers are set!!');
    //   console.log(this.answers);
    //   console.log(this.result);
    //   this.quizStarted = true;
    // }
    isQuizStarted() {
        return this.quizStarted;
    }
    evaluate(question, option) {
        console.log('evaluate**************');
        console.log(this.answers);
        console.log(question.id);
        console.log(option);
        if (option == this.answers[question.id - 1]) {
            this.result[question.id - 1] = true;
            console.log('correct!!!');
        }
        else {
            this.result[question.id - 1] = false;
        }
    }
    final() {
        console.log(this.result);
    }
    // get(url: string) {
    //   return this.http.get(url);
    // }
    getAll() {
        return [
            { id: 'data/javascript.json', name: 'JavaScript' },
            { id: 'data/aspnet.json', name: 'Asp.Net' },
            { id: 'data/csharp.json', name: 'C Sharp' },
            { id: 'data/designPatterns.json', name: 'Design Patterns' }
        ];
    }
};
QuizService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _result_service__WEBPACK_IMPORTED_MODULE_5__["ResultService"] }
];
QuizService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _result_service__WEBPACK_IMPORTED_MODULE_5__["ResultService"]])
], QuizService);



/***/ }),

/***/ "./src/app/services/result.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/result.service.ts ***!
  \********************************************/
/*! exports provided: ResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultService", function() { return ResultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ResultService = class ResultService {
    constructor(afs) {
        this.afs = afs;
        this.resultCollection = this.afs.collection('results');
    }
    getResultsForQuiz(id) {
        this.resultforQuizCollection = this.afs.collection('results', ref => ref.where('quizId', '==', id));
        this.resultforUser$ = this.resultforQuizCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                // console.log('data', data);
                return data;
            });
        }));
        console.log('printing users');
        console.log(this.resultforUser$);
        return this.resultforUser$;
    }
    getResultsByUser(userEmail) {
        console.log(userEmail);
        this.resultforUserCollection = this.afs.collection('results', ref => ref.where('user', '==', userEmail));
        this.resultforQuiz$ = this.resultforUserCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                // console.log('data', data);
                return data;
            });
        }));
        console.log('printing users');
        console.log(this.resultforQuiz$);
        return this.resultforQuiz$;
    }
    newResult(result) {
        this.resultCollection.add(result);
    }
};
ResultService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
ResultService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
], ResultService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UserService = class UserService {
    constructor(afs) {
        this.afs = afs;
        this.usersCollection = this.afs.collection('users', ref => ref.orderBy('lastName', 'asc'));
        console.log(this.usersCollection);
    }
    getUsers() {
        // Get clients with the id
        console.log('getting users');
        this.users = this.usersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                console.log('data', data);
                return data;
            });
        }));
        console.log('printing users');
        console.log(this.users);
        return this.users;
    }
    newUser(client) {
        this.usersCollection.add(client);
    }
    setLoggedInUser(email) {
        console.log('set logged in user');
        localStorage.setItem('userId', email);
        // this.currentUserCollection = this.afs.collection('users', ref => ref.where('email', '==', email));
        // this.noOfQuizesUser = this.currentUserCollection.snapshotChanges().pipe(map(changes => {
        //   return changes.map(action => {
        //     const data = action.payload.doc.data() as User;
        //     // data.id = action.payload.doc.id;
        //     console.log('data', data);
        //     console.log('data.noOfQuizes', data.noOfQuizes);
        //     return data.noOfQuizes;
        //   });
        // }));
    }
    // getUser(email: string): Observable<User> {
    //   // this.clientDoc = this.afs.doc<User>(`clients/${id}`);
    //   // this.user = this.clientDoc.snapshotChanges().map(action => {
    //   //   if(action.payload.exists === false) {
    //   //     return null;
    //   //   } else {
    //   //     const data = action.payload.data() as User;
    //   //     data.id = action.payload.id;
    //   //     return data;
    //   //   }
    //   // });
    //   console.log('getting users');
    //   this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
    //     return changes.map(action => {
    //       const data = action.payload.doc.data() as User;
    //       data.id = action.payload.doc.id;
    //       console.log('data', data);
    //       return data;
    //     });
    //   }));
    //   console.log('printing users');
    //   console.log(this.users);
    //   this.user = this.users.filter(x => {
    //     if(x.email == email) {
    //       return x;
    //     }
    //   })
    //   return this.user;
    // }
    updateNoofQuizes() {
        this.loggedInUser.noOfQuizes += 1;
        this.userDoc = this.afs.doc(`users/${this.loggedInUser.id}`);
        this.userDoc.update(this.loggedInUser);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
UserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
], UserService);



/***/ }),

/***/ "./src/app/take-quiz/take-quiz.component.css":
/*!***************************************************!*\
  !*** ./src/app/take-quiz/take-quiz.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n    width: 100%;\r\n    min-width: 300px;\r\n  }\r\n\r\n  mat-card-title,\r\n  mat-card-content {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  .main-div{\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  :host {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n\r\n  .button {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFrZS1xdWl6L3Rha2UtcXVpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Rha2UtcXVpei90YWtlLXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC10aXRsZSxcclxuICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYWluLWRpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/take-quiz/take-quiz.component.ts":
/*!**************************************************!*\
  !*** ./src/app/take-quiz/take-quiz.component.ts ***!
  \**************************************************/
/*! exports provided: TakeQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeQuizComponent", function() { return TakeQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let TakeQuizComponent = class TakeQuizComponent {
    constructor(router, quizService, flashMessage) {
        this.router = router;
        this.quizService = quizService;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
        this.takeQuizForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            quizId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
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
};
TakeQuizComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
TakeQuizComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-take-quiz',
        template: __webpack_require__(/*! raw-loader!./take-quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/take-quiz/take-quiz.component.html"),
        styles: [__webpack_require__(/*! ./take-quiz.component.css */ "./src/app/take-quiz/take-quiz.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
], TakeQuizComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDcwyDUSa2U5bAJf4iv8xjX064E2xINBcc",
        authDomain: "thequizmaster100.firebaseapp.com",
        databaseURL: "https://thequizmaster100.firebaseio.com",
        projectId: "thequizmaster100",
        storageBucket: "thequizmaster100.appspot.com",
        messagingSenderId: "883414385954",
        appId: "1:883414385954:web:3738eeb1c10316db2c517b",
        measurementId: "G-NQK1CG42YP"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\leela\Downloads\quizMaster\quizMaster\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map