import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student, Teacher } from 'src/app/models';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {

    this.studentService.getAllStudents().subscribe((student: Student[]) => {
      this.students = student;
    })
  }

}
