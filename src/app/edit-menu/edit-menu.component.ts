import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListContactService} from "../services/list-contact.service";
import {Contact} from "../entity/contact";
import {Phones} from "../entity/phones";

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {

  contact: Contact = new Contact('','');
  listPhones: Array<Phones> = [];
  phone: Phones = new Phones('','');

  constructor(
    private route: ActivatedRoute,
    public listContact: ListContactService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((parameter) => {
      this.contact = this.listContact.listOfContacts[parameter.id]

      for(let i of this.contact.phones){
        this.listPhones.push( this.listContact.loadNumber(i));
      }
    });
  }

  onSubmit(){
    this.phone.person = '/people/' + this.contact.id.toString()
    this.listContact.createPhone(this.phone);
  }
  get phones(): Array<Phones>{

    return this.listPhones;

  }
}
