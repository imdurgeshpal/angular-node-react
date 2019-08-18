import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TeacherService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private teacherService: TeacherService, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      'username': '',
      'password': ''
    });
  }

  loginButtonHandler(tab) {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    switch (tab) {
      case 'teacher-tab': {
        this.teacherService.loginTeacher(username, password).subscribe(res => {
          this.teacherService.currentTeacher = res;
          this.router.navigate(['/teacher']);
        });
        break;
      }
      case 'student-tab': {
        //statements; 
        console.log(tab);
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }

}
