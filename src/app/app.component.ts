import { Component }       from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase }    from './question-base';
import { Observable }      from 'rxjs';
import { HttpClient }      from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div class="maincontainer">
      <h2>Add to Cart Page</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
    
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(
    private service: QuestionService
    ) {
    this.questions$ = service.getQuestions();
  }

  onSubmit() {
    this.service.postrequest(this.payLoad)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/