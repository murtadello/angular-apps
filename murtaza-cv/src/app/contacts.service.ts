import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }


  getContacts(){


    // HTTP calls here
    const contactList = [
      {contactId: 1, contactName: 'Murtaza'},
      {contactId: 2, contactName: 'Turorials'},
      {contactId: 3, contactName: 'YouTube'},
      {contactId: 4, contactName: 'Angular'},
    ];
    return contactList;
  }

  displayMessage(){
    console.log('Calling from the name of Customer')
    
  }
}
