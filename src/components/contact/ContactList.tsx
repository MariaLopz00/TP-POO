// src/components/ContactList.tsx

import React from 'react';
import { Contacto } from '../../class/contact/contacto';


interface ContactListProps {
  contactos: Contacto[];
}

const ContactList: React.FC<ContactListProps> = ({ contactos }) => {
  return (
    <div>
      <h2>Lista de Contactos</h2>
      <ul>
        {contactos.map((contacto, index) => (
          <li key={index}>
            <strong>{contacto.nombre}</strong>
            <p>Correo Electrónico: {contacto.correoElectronico}</p>
            <p>Teléfono: {contacto.numeroTelefono}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
