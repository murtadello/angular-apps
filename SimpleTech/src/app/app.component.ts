import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleTech';
  success_msg = false;

  divColor ="orange";
  txtColor = "blue";

  styleClsProp = 'c3';

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

  ]


  season = 'Murtaz';


  
}
