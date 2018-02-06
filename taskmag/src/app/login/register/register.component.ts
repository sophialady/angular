import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {MdDialog} from '@angular/material';
import { DepartmentInputComponent } from 'app/shared/department-input/department-input.component';
import { LoginComponent } from 'app/login/login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  selectedTab = 0;
  form: FormGroup;
  toggleInfoCheck: boolean;
  avatars$: Observable<string[]>;

  private readonly avatarName = 'avatars';
  constructor(private fb: FormBuilder, private dialog: MdDialog) {
    this.toggleInfoCheck = true;
  }
  onSubmit({value, valid}, e: Event) {
    e.preventDefault();
    if (!valid) {
      return;
    }
  }

  ngOnInit() {
    const img = `${this.avatarName}:svg-${(Math.random() * 16).toFixed()}`;
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      repeat: ['', Validators.required],
      avatar: [img],
      depart: [],
      date: []
    });
  }

  onTabChange(index) {
    this.selectedTab = index;
  }
  onChangeToggle(checked) {
    this.toggleInfoCheck = checked;
    if (checked) {
      this.selectedTab = 1;
    }
  }
  openDepartDialog () {
    const img = `/assets/img/covers/${Math.floor(Math.random() * 40)}_tn.jpg`;
    const thumbnails$ = this.getThumbnailsObs();
    const dialogRef = this.dialog.open(DepartmentInputComponent, {data: { thumbnails: thumbnails$, img: img}});
    // dialogRef.afterClosed().take(1).subscribe(val => {
    //   if (val) {
    //     const converImg = this.buildImgSrc(val.coverImg);
    //     this.store$.dispatch(new actions.AddProjectAction({...val, coverImg: converImg}));
    //   }
    // });
  }

  private getThumbnailsObs(): Observable<string[]> {
    // return Observable
    //   .range(0, 40)
    //   .map(i => `/assets/img/covers/${i}_tn.jpg`)
    //   .reduce((r, x) => {
    //     return [...r, x];
    //   }, []);
      return null;
  }
}
