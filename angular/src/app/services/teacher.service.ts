import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models';
import { api } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teacher: Teacher;

  get currentTeacher(): Teacher {
    return this.teacher;
  }

  set currentTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  constructor(private httpClient: HttpClient) { }

  loginTeacher(username: string, password: string): Observable<Teacher> {
    const httpParams = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.httpClient.get<Teacher>(`${api.teacher.login}`, {
      params: httpParams
    });
  }

  registerTeacher(teacher: Teacher): Observable<void> {
    return this.httpClient.post<void>(api.teacher.register, teacher);
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(api.teacher.getAllTeachers);
  }
}
