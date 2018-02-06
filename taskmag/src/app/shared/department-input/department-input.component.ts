import {
  ChangeDetectionStrategy, Component, forwardRef,
  OnInit, OnDestroy, Input, ViewChild,
  ElementRef, AfterViewInit} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';


@Component({
  selector: 'app-department-input',
  templateUrl: './department-input.component.html',
  styleUrls: ['./department-input.component.scss']
})
export class DepartmentInputComponent implements AfterViewInit {
// in Component
  data3: any = [{
    label: '一级 1',
    id: '1.1.1',
    children: [{
      label: '二级 1-1',
      id: '2.1.1',
      children: [{
        id: '3.1.1',
        label: '三级 1-1-1',
      }]
    }]
  }, {
    label: '一级 2',
    id: '1.2.1',
    children: [{
      id: '2.2.1',
      label: '二级 2-1',
    }]
  }, {
    id: '1.3.1',
    label: '一级 3',
  }];

  @ViewChild('tree') tree: any
  hooks: UserSafeHooks;
  findAllChecked(): void {
    console.log(this.hooks.findAllChecked())
  }

  removeAllChecked(): void {
    this.hooks.removeAllChecked()
  }

  updateItemChecked(): void {
    this.hooks.updateItemChecked('1.3.1')
  }

  updateItemExpanded(): void {
    this.hooks.updateItemExpanded('1.2.1')
  }

  ngAfterViewInit(): void {
    this.hooks = (<Tree>this.tree).userSafeHooks()
  }
  treeChange(event) {
    console.log('event' + event.target);
  }
}

