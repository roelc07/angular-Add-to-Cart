import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import { QuestionService }           from './question.service'; 

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private qs: QuestionService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    // this.form.getRawValue()
      console.log(this.payLoad);
      this.qs.postrequest(this.payLoad).subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
    // this.payLoad.postrequest(this.payLoad)
    //   .subscribe(
    //     data => console.log('Success!', data),
    //     error => console.error('Error!', error)
    //   )
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/