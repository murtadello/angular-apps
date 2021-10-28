import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  constructor(){
    this.user = new User();

    this.user.name ='Murtaza Mohammadi',
    this.user.designation = 'Software Engineer',
    this.user.address ='Liebensteinstrasse',
    this.user.phone= [
      '5465-4654-6545',
      '01578-2488-8888'
    ];


  }
}
