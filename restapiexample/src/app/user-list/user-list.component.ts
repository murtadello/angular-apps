import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: User[];

  user: User = new User();

  constructor(private userService : UserService, private router: Router){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
      
    })
  }
  userDetails(id: number){
    this.router.navigate(['users', 'id']);
    console.log(id);
    
  }

}
