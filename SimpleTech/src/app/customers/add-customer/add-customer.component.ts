import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  firstname: string = '';
  terms : boolean = false;
  country: string = '';
  pass:string = '';
  msg:string = '';
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  addContact(formValue: NgForm){

    const postBody = {
      title: formValue.value.firstname,
      body: formValue.value.msg,
    };
    this.usersService.addUser(postBody).subscribe(data => {
      console.log(data);
    }, (err)=> {
      console.log("Unable to add user");
      
    })
  }
  resetForm(formValue : NgForm){
    formValue.reset();

  }
}
