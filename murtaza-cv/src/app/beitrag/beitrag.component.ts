import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beitrag',
  templateUrl: './beitrag.component.html',
  styleUrls: ['./beitrag.component.css']
})
export class BeitragComponent implements OnInit {

  showTravel: boolean = false;

  clsName = 'paragraph'

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
}
