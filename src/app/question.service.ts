import { Injectable } from "@angular/core";
import { DropdownQuestion } from "./question-dropdown";
import { QuestionBase } from "./question-base";
import { TextboxQuestion } from "./question-textbox";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  Http,
  Headers,
  Response,
  RequestOptions,
  RequestMethod
} from "@angular/http";
import { DynamicFormComponent } from "./dynamic-form.component";
import { of } from "rxjs";

@Injectable()
export class QuestionService {
  baseURL: string = "https://amod-tnt-cart-add-service.azurewebsites.net/api/cart/addToCart";

  constructor(private http: HttpClient) {}

  postrequest(request: string) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post<any>(this.baseURL, request, httpOptions);
  }

  // TODO: get from a remote source of question metadata
  getQuestions() {
    let questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: "userId",
        label: "User ID",
        value: "3",
        order: 1,
        required: 'true'
      }),

      new TextboxQuestion({
        key: "name",
        label: "Name",
        value: "Smita",
        order: 2
      }),

      new TextboxQuestion({
        key: "address",
        label: "Address",
        order: 3
      }),

      new TextboxQuestion({
        key: "dateOfBirth",
        label: "Date of Birth",
        order: 4
      }),

      new TextboxQuestion({
        key: "productId",
        label: "Product ID",
        value: "3",
        order: 5,
        required: 'true'
      }),

      new DropdownQuestion({
        key: 'productName',
        label: 'Product Name',
        options: [
          {key: 'pen',  value: 'Pen'},
          {key: 'paper',  value: 'Paper'},
          {key: 'marker',   value: 'Marker'},
          {key: 'book', value: 'Book'}
        ],
        order: 6
      }),

      new TextboxQuestion({
        key: "price",
        label: "Price",
        order: 7
      }),

      new TextboxQuestion({
        key: "quantity",
        label: "Quantity",
        order: 8,
        required: 'true'
      }),

      new TextboxQuestion({
        key: "dateAdded",
        label: "Date Added",
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
