import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services';
import { Teacher } from 'src/app/models';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  currentTeacher: Teacher;

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.currentTeacher = this.teacherService.currentTeacher;
  }

}
