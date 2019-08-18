import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [TeacherDashboardComponent, TeacherComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class TeacherModule { }
