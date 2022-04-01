import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  firstname: string = '';
  terms : boolean = false;
  country: string = '';
  pass:string = '';
  msg:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  addContact(formValue: NgForm){
    console.log(formValue.value)
  }
  resetForm(formValue : NgForm){
    formValue.reset();

  }

}
