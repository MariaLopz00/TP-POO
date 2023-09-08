// src/classes/Triangle.ts

import Shape from './Shape';

export class Triangle extends Shape {
  constructor(private base: number, private altura: number) {
    super();
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }

  calcularPerimetro(): number {
    // Calcular el perímetro de un triángulo no es tan simple como en círculos o rectángulos.
    // Debes implementar tu propia lógica aquí.
    // Este ejemplo asume un triángulo equilátero para simplificar.
    return 3 * this.base;
  }
}


