import { Injectable } from '@angular/core';
import {Contact} from "../entity/contact";
import {HttpClient} from "@angular/common/http";
import {Phones} from "../entity/phones";

@Injectable({
  providedIn: 'root'
})
export class ListContactService {

  public listOfContacts: Array<Contact> = [];

  constructor(private http: HttpClient) {
    this.loadContact();
  }


  public createPhone(phone: Phones): void{
    this.http.post<Phones>('http://127.0.0.1:8000/phones', phone).subscribe();
  }

  public createContact(contact: Contact):void{
    this.http.post<Contact>('http://127.0.0.1:8000/people',contact).subscribe();
  }

  public update(contact: Contact):void{

  }

  public delete(contact: number):void{
    this.http.delete('http://127.0.0.1:8000/people/' + contact).subscribe();
    console.log('contact deleted');
  }

  public loadContact():void{
    this.listOfContacts = [];

    this.http.get('http://127.0.0.1:8000/people').subscribe((result: Array<object>)=>{
      this.listOfContacts = result.map((obj: object) => {
        const target = Object.assign(new Contact('',''),obj);
        return target;
      });
    });
  }

  public loadNumber(num: string):Phones{

    let phone: Phones = new Phones('','')
    this.http.get('http://127.0.0.1:8000' + num).subscribe((result: object)=> {
      console.log(result);
      phone = Object.assign(phone,result)
    });
    return phone;


  }

}
