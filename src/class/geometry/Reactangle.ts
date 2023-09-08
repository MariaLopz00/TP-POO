// src/classes/Rectangle.ts

import Shape from './Shape';

export class Rectangle extends Shape {
  constructor(private largo: number, private ancho: number) {
    super();
  }

  calcularArea(): number {
    return this.largo * this.ancho;
  }

  calcularPerimetro(): number {
    return 2 * (this.largo + this.ancho);
  }
}


