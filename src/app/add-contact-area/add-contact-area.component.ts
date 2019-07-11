import { Component, OnInit } from '@angular/core';
import {ListContactService} from "../services/list-contact.service";
import {Contact} from "../entity/contact";

@Component({
  selector: 'app-add-contact-area',
  templateUrl: './add-contact-area.component.html',
  styleUrls: ['./add-contact-area.component.scss']
})
export class AddContactAreaComponent implements OnInit {

  contact: Contact = new Contact('','');

  constructor(public listContact: ListContactService) { }

  ngOnInit() {

  }

  onSubmit(){

    this.listContact.createContact(this.contact);
  }

}
