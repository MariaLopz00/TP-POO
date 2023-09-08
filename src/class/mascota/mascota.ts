export class Mascota {
    public nombre: string;
    public nivelFelicidad: number;
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.nivelFelicidad = 50; // Puedes establecer un valor inicial
    }
  
    // Otros métodos de la clase...
  
    cuidar() {
      // Incrementar el nivel de felicidad en 1 cuando se cuida a la mascota
      this.nivelFelicidad += 1;
      if (this.nivelFelicidad > 100) {
        this.nivelFelicidad = 100; // Limitar el nivel de felicidad a 100
      }
    }
  
    alimentar() {
      // Incrementar el nivel de felicidad en 1 cuando se alimenta a la mascota
      this.nivelFelicidad += 1;
      if (this.nivelFelicidad > 100) {
        this.nivelFelicidad = 100; // Limitar el nivel de felicidad a 100
      }
    }
  
    jugar() {
      // Incrementar el nivel de felicidad en 1 cuando se juega con la mascota
      this.nivelFelicidad += 1;
      if (this.nivelFelicidad > 100) {
        this.nivelFelicidad = 100; // Limitar el nivel de felicidad a 100
      }
    }
  
    getEstado() {
      // Devolver el estado de la mascota, incluido el nivel de felicidad
      return {
        nombre: this.nombre,
        nivelFelicidad: this.nivelFelicidad,
      };
    }
  }
  