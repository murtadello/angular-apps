import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit{

  hideFormular = false;
  constructor(private http: HttpClient) {}

  ngOnInit(){

  }

  showFormular(){
    this.hideFormular = true;
  }
  hideFormulars(){
    this.hideFormular = false;
  }



  }

  

  

