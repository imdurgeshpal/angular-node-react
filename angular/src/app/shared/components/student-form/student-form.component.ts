import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;
  constructor(public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private studentService: StudentService) { }

  ngOnInit() {

    this.studentForm = this.fb.group({
      'username': '',
      'password': '',
      'firstName': '',
      'lastName': ''
    });
  }

  addStudent() {
    const student = this.studentForm.value;
    this.studentService.addStudent(student).subscribe();
    this.activeModal.close();
  }

}
