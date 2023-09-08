// src/components/ContactForm.tsx

import React, { useState } from 'react';
import { Contacto } from '../../class/contact/contacto';


interface ContactFormProps {
  agregarContacto: (contacto: Contacto) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ agregarContacto }) => {
  const [nombre, setNombre] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre && correoElectronico && numeroTelefono) {
      const nuevoContacto = new Contacto(nombre, correoElectronico, numeroTelefono);
      agregarContacto(nuevoContacto);
      setNombre('');
      setCorreoElectronico('');
      setNumeroTelefono('');
    }
  };

  return (
    <div>
      <h2>Agregar Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="text" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="text" value={numeroTelefono} onChange={(e) => setNumeroTelefono(e.target.value)} />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default ContactForm;
