import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {
   MdToolbarModule,
   MdIconModule,
   MdCardModule,
   MdButtonModule,
   MdInputModule,
   MdTabsModule,
   MdListModule,
   MdDatepickerModule,
   MdNativeDateModule,
   MdSlideToggleModule,
  } from '@angular/material';
import { DepartmentInputComponent } from './department-input/department-input.component';
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdListModule,
    MdDatepickerModule,
    MdSlideToggleModule,
    MdNativeDateModule,
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdListModule,
    MdNativeDateModule,
    MdDatepickerModule,
    ReactiveFormsModule,
    MdSlideToggleModule,
    DepartmentInputComponent,
    ImageListSelectComponent,
    FormsModule,
  ],
  declarations: [DepartmentInputComponent, ImageListSelectComponent],
  entryComponents: [
    DepartmentInputComponent
  ]
})
export class SharedModule {
   constructor() {

   }
}
