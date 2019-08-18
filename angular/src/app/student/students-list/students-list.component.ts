import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student, Teacher } from 'src/app/models';
import { TeacherService } from 'src/app/services';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  teachers: Teacher[];
  constructor(private teacherServie: TeacherService) { }

  ngOnInit() {

    this.teacherServie.getAllTeachers().subscribe(res => {
      this.teachers = res;
    })
  }

}
