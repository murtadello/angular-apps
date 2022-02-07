import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beitrag',
  templateUrl: './beitrag.component.html',
  styleUrls: ['./beitrag.component.css']
  
})
export class BeitragComponent implements OnInit {
  showTravel: boolean = false;
  clsName = 'paragraph';
  colorName='black';

  state = 'normal';

  
  users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'Fatima'},
    {id: 3, name: 'Rostami'},
    {id: 4, name: 'Mohammadi'},
    {id: 5, name: 'Ahmad'},
    {id: 6, name: 'Jawad'}
  ];
  customers ={
    userId:20,
    firstName: 'FATIMA',
    lastName: 'Rostami',
    DOB:'07/23/1994',
    salary: 6000
  }
  constructor() { }

  ngOnInit(): void {
    this.showTravel = true;
  }
  showTrave(){
    this.showTravel = true;
  }

  hideTravel(){
    this.showTravel = false;
  } 
  focusMessage(){
    console.log('This is just a focus event');
    
  } 


  
}
