import { Injectable } from '@angular/core';
import { Contact } from '../shared/contact';
import { CONTACTS } from '../shared/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts:Contact[]=CONTACTS;
  constructor() { }
  getContacts():Contact[]{
    return this.contacts;
  }
  getContactById(id:number):Contact|undefined{
   return this.contacts.find(contact=>contact.id==id)
  }
  deleteContactById(id:number){
    let index= this.contacts.findIndex(contact=>contact.id);
    this.contacts.splice(index,1);
  }

}
