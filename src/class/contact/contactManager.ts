// src/components/ContactManager.ts

import { Contacto } from "./contacto";


  
export class ContactManager {
    private contacts: Contacto[] = [];
    private nextId = 1;
  
    addContact(name: string, email: string, numeroTelefono: string): void {
      const newContact = new Contacto( name, email, numeroTelefono);
      this.contacts.push(newContact);
    }
  
    findContactsByName(name: string): Contacto[] {
      return this.contacts.filter((contact) =>
        contact.nombre.toLowerCase().includes(name.toLowerCase())
      );
    }
  
    getAllContacts(): Contacto[] {
      return this.contacts;
    }
}
  

  