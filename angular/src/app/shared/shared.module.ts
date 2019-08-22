import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from '../student/students-list/students-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StudentsListComponent, StudentFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentsListComponent
  ],
  entryComponents: [
    StudentFormComponent
  ]
})
export class SharedModule { }
