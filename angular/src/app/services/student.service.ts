import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models';
import { api } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  loginStudent(username: string, password: string): Observable<Student> {
    const httpParams = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.httpClient.get<Student>(`${api.student.login}`, {
      params: httpParams
    });
  }
}
