import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TeacherService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private teacherService: TeacherService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'username': [],
      'password': []
    });
  }

  registerButtonHandler() {

    const teacher = this.registerForm.value;

    this.teacherService.registerTeacher(teacher).subscribe(res => {

    });

  }
}
