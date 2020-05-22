import { Injectable }       from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { HttpClient }      from '@angular/common/http';
import { DynamicFormComponent } from './dynamic-form.component';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  baseURL: string = "https://postman-echo.com/post";

  constructor(private http: HttpClient) {
  }

  postrequest(dynamicformcomponent: DynamicFormComponent){
    return this.http.post<any>(this.baseURL, dynamicformcomponent);  
  }

  // TODO: get from a remote source of question metadata
  getQuestions() {

    let questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'userId',
        label: 'User ID',
        value: '3',
        order: 1
      }),

      new TextboxQuestion({
        key: 'name',
        label: 'Name',
        required: 'true',
        order: 2
      }),

      new TextboxQuestion({
        key: 'address',
        label: 'Address',
        order: 3
      }),

            new TextboxQuestion({
        key: 'dateOfBirth',
        label: 'Date of Birth',
        order: 4
      }),

      new TextboxQuestion({
        key: 'productId',
        label: 'Product ID',
        value: '3',
        order: 5
      }),

      new TextboxQuestion({
        key: 'productName',
        label: 'Product Name',
        order: 6
      }),

           new TextboxQuestion({
        key: 'price',
        label: 'Price',
        order: 7
      }),

                 new TextboxQuestion({
        key: 'quantity',
        label: 'Quantity',
        order: 8
      }),

                 new TextboxQuestion({
        key: 'dateAdded',
        label: 'Date Added',
        order: 9
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/