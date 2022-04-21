import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User{
  name: string,
  email: string,
  phonenumber: number
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User>{
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'authenticationToken': '1234565'
    });
    const params = new HttpParams()
    .set('pageName', '10')
    .set('pageSize', '100')
    return this.http.get<User>('https://jsonplaceholder.cypress.io/users', {headers: headers});
    
  }

  addUser(body:any){
    return this.http.post('https://jsonplaceholder.cypress.io/users', body)
  }




}
