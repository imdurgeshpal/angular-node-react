import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services';
import { Teacher } from 'src/app/models';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { StudentFormComponent } from 'src/app/shared/components/student-form/student-form.component';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  currentTeacher: Teacher;

  constructor(private teacherService: TeacherService, private modalService: NgbModal) { }

  ngOnInit() {
    this.currentTeacher = this.teacherService.currentTeacher;
  }

  addStudentPopup() {
    const modalRef: NgbModalRef = this.modalService.open(StudentFormComponent, {
      size: 'lg'
    });
  }
}
