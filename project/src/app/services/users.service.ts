import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUser(){
    //return this.http.get('http:/www.firebase.com');

    const users = [
      {userId: 123, username: 'Murtaza'},
      {userId: 456, username: 'Karina kapoor'}
    ];
    return users;
  }
}
