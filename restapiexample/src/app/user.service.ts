import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = "https://ti-react-test.herokuapp.com/users";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public getUser(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`)

  }
}
