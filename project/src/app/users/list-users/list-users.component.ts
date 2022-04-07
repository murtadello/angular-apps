import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  cName ='Tech & Mac';
  tax = "2500";
  user ={}

  listUsers = {}
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.listUsers = this.usersService.getUser();

  }
  updatedUsers(event:any){
    this.user = event;
  }
  

}
