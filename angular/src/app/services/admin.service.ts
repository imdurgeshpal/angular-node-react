import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models';
import { HttpParams, HttpClient } from '@angular/common/http';
import { api } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  loginAdmin(username: string, password: string): Observable<Admin> {
    const httpParams = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.httpClient.get<Admin>(`${api.admin.login}`, {
      params: httpParams
    });
  }
}
