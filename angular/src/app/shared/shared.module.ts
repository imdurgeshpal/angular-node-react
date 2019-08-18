import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from '../student/students-list/students-list.component';



@NgModule({
  declarations: [StudentsListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StudentsListComponent
  ]
})
export class SharedModule { }
