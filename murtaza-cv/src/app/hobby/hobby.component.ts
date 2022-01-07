import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  showHobbies = true;
  constructor() { }

  ngOnInit(): void {
  }


  hideHobbies(){
    this.showHobbies= true;
  }
  showHobby(){
    this.showHobbies = false;
  }

}
