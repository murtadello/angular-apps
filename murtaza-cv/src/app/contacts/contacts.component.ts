import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor( public contactService: ContactsService) { }

  contactList = [];

  ngOnInit(): void {
    this.contactList = this.contactService.getContacts();
  }

}
