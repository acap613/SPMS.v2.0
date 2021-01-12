import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url = 'http://localhost:8080/test/all';


  constructor(private http: HttpClient) { }

  getTestInfo(): Observable<Test[]> {
    const searchUrl = `${this.url}`;
    return this.http.get<Test[]>(searchUrl);
  }
}
