import { Component, OnInit } from '@angular/core';
import {ListContactService} from "../services/list-contact.service";
import {Contact} from "../entity/contact";


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(public listContact: ListContactService) {

  }

  ngOnInit() {
  }

  get contacts():Array<Contact>{
    return this.listContact.listOfContacts;

  }
}
