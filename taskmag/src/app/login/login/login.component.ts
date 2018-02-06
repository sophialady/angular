import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Quote } from 'app/domain/quote';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote$: Observable<Quote>;
  constructor(private fb: FormBuilder) {

  }
  // constructor(private fb: FormBuilder,
  //             private store$: Store<fromRoot.State>) {
  //       this.quote$ = this.store$.select(fromRoot.getQuote);
  //   }
  // Validators.compose([Validators.required,Validators.emial])
  ngOnInit() {
    this.form = this.fb.group({
      name: ['zhaojx', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    })
  }

  onSubmit({value, valid}, e: Event) {
    e.preventDefault();
    console.log(JSON.stringify(value));
    console.log(valid);
    if (!valid) {
      return;
    }
  }

  validate(c: FormControl): {[key: string]: any} {
    if (!c.value) {
      return null;
    }
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emialNotValid: 'The emial must start with wang'
    }
  }

}
