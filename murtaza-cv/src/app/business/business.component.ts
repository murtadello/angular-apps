import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  colorName='black';

  customers = ["Ahmad", "Ali", "Didar"];


  constructor() { }

  ngOnInit(): void {
    
  }

  addItem(){
    this.customers.push("Frahnaz");
  }


  
 
}
