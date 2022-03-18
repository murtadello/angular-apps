import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcom to ARC Tutorial';
  person = {
    firstName: 'Angular',
    LastName : 'JS'
  }
  isUserLoggedIn = true;


  daysOfTheWeek = 'Montag';
    




  success_msg = false;
  divColor ="orange";
  txtColor = "blue";
  styleClsProp = 'c3';
  conditionClsProp = 'c5';
  contacts = [
    {
      'firstName': 'Angualr',
      'lastName': 'Tutorial',
      'contactId': 1234
    },
    {
      'firstName': 'HTML',
      'lastName': 'Tutorial',
      'contactId': 2020
    },
    {
      'firstName': 'AI',
      'lastName': 'Tutorial',
      'contactId': 50000
    },

  ];
  showMessage = 'This is Databinding';
  season = 'Spring';
  changeMessage(){
    this.showMessage = 'Change successfuly !';
  }
}
