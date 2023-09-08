// src/components/PetSimulator.tsx

import React, { useState } from 'react';
import { Mascota } from '../class/mascota/mascota';


const PetSimulator: React.FC = () => {
    const [mascota, setMascota] = useState<Mascota | null>(null);
    const [nombre, setNombre] = useState<string>('');
    const [nivelFelicidad, setNivelFelicidad] = useState<number>(50);

    const crearMascota = () => {
        const nuevaMascota = new Mascota(nombre);
        nuevaMascota.nivelFelicidad = nivelFelicidad; // Establecer el nivel de felicidad
        setMascota(nuevaMascota);
    };
    
    const cuidarMascota = () => {
        if (mascota) {
            mascota.cuidar();
            const updatedMascota = new Mascota(mascota.nombre); // Crear una nueva instancia de Mascota
            updatedMascota.nivelFelicidad = mascota.nivelFelicidad;
            setMascota(updatedMascota);
        }
    };
    
    const alimentarMascota = () => {
        if (mascota) {
            mascota.alimentar();
            const updatedMascota = new Mascota(mascota.nombre); // Crear una nueva instancia de Mascota
            updatedMascota.nivelFelicidad = mascota.nivelFelicidad;
            setMascota(updatedMascota);
        }
    };
    
    const jugarConMascota = () => {
        if (mascota) {
            mascota.jugar();
            const updatedMascota = new Mascota(mascota.nombre); // Crear una nueva instancia de Mascota
            updatedMascota.nivelFelicidad = mascota.nivelFelicidad;
            setMascota(updatedMascota);
        }
    };
    

    return (
        <div>
            <h2>Mascota Virtual</h2>
            {mascota ? (
                <>
                    <p>Nombre: {mascota.nombre}</p>
                    <p>Nivel de Felicidad: {mascota.nivelFelicidad}</p>
                    <p>Estado: {mascota.nivelFelicidad >= 50 ? 'Feliz' : 'Triste'}</p>

                    <button onClick={alimentarMascota}>Alimentar</button>
                    <button onClick={jugarConMascota}>Jugar</button>
                    <button onClick={cuidarMascota}>Cuidar</button>
                </>
            ) : (
                <>
                    <p>Ingresa el nombre de tu mascota:</p>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <p>Selecciona el nivel de felicidad:</p>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={nivelFelicidad}
                        onChange={(e) => setNivelFelicidad(Number(e.target.value))}
                    />
                    <button onClick={crearMascota}>Crear Mascota</button>
                </>
            )}
        </div>
    )
};

export default PetSimulator;
