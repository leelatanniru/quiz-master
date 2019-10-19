import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizSuccessComponent } from './create-quiz-success.component';

describe('CreateQuizSuccessComponent', () => {
  let component: CreateQuizSuccessComponent;
  let fixture: ComponentFixture<CreateQuizSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuizSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
