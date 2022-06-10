import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  id! : number;
  user!: any;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id)
    .subscribe(data => {
      console.log(data);
      this.user = data;
    }, error => console.log(error));
  }

  usersList() {
    this.router.navigate(['users']);
  }

}
