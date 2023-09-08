import React, { useState } from 'react';
import { ContactManager } from '../../class/contact/contactManager';
import { Contacto } from '../../class/contact/contacto';

const ContactApp: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [correoElectronico, setCorreoElectronico] = useState<string>('');
  const [numeroTelefono, setNumeroTelefono] = useState<string>('');
  const [searchName, setSearchName] = useState<string>('');
  const [contactManager] = useState<ContactManager>(new ContactManager());
  const [contacts, setContacts] = useState<Contacto[]>([]);

  const handleAddContact = () => {
    if (nombre && correoElectronico && numeroTelefono) {

      contactManager.addContact(nombre, correoElectronico, numeroTelefono);
      setContacts(contactManager.getAllContacts());
      // Limpiar los campos después de agregar un contacto
      setNombre('');
      setCorreoElectronico('');
      setNumeroTelefono('');
    } else {
      alert('Por favor, complete todos los campos antes de agregar un contacto.');
    }
  };

  const handleSearchContact = () => {
    const foundContacts = contactManager.findContactsByName(searchName);
    setContacts(foundContacts);
  };

  const handleShowAllContacts = () => {
    setContacts(contactManager.getAllContacts());
  };

  return (
    <div>
        
      <h2>Lista de Contactos</h2>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Correo Electrónico"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número de Teléfono"
          value={numeroTelefono}
          onChange={(e) => setNumeroTelefono(e.target.value)}
        />
        <button onClick={handleAddContact}>Agregar Contacto</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearchContact}>Buscar</button>
        <button onClick={handleShowAllContacts}>Mostrar Todos</button>
      </div>
      <ul>
        {contacts.map((contact,idx) => (
          <li key={idx}>
            <strong>Nombre:</strong> {contact.nombre},{' '}
            <strong>Email:</strong> {contact.correoElectronico},{' '}
            <strong>Teléfono:</strong> {contact.numeroTelefono}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactApp;
