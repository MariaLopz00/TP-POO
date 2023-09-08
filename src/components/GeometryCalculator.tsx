// src/components/GeometryCalculator.tsx

import React, { useState } from 'react';
import { Circle, Rectangle, Triangle } from '../class/geometry';


export const GeometryCalculator = () => {
  const [selectedShape, setSelectedShape] = useState<string>('circle');
  const [radius, setRadius] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [base, setBase] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleShapeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedShape(e.target.value);
  };

  const calculateAreaAndPerimeter = () => {
    switch (selectedShape) {
      case 'circle':
        const circle = new Circle(radius);
        return {
          area: circle.calcularArea(),
          perimeter: circle.calcularPerimetro(),
        };
      case 'rectangle':
        const rectangle = new Rectangle(length, width);
        return {
          area: rectangle.calcularArea(),
          perimeter: rectangle.calcularPerimetro(),
        };
      case 'triangle':
        const triangle = new Triangle(base, height);
        return {
          area: triangle.calcularArea(),
          perimeter: triangle.calcularPerimetro(),
        };
      default:
        return {
          area: 0,
          perimeter: 0,
        };
    }
  };

  const { area, perimeter } = calculateAreaAndPerimeter();

  return (
    <div>
      <h2>Calculadora de Geometría</h2>
      <div>
        <label>Selecciona una figura geométrica:</label>
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="circle">Círculo</option>
          <option value="rectangle">Rectángulo</option>
          <option value="triangle">Triángulo</option>
        </select>
      </div>
      {selectedShape === 'circle' && (
        <div>
          <label>Radio:</label>
          <input type="number" value={radius} onChange={(e) => setRadius(parseFloat(e.target.value))} />
        </div>
      )}
      {selectedShape === 'rectangle' && (
        <div>
          <label>Largo:</label>
          <input type="number" value={length} onChange={(e) => setLength(parseFloat(e.target.value))} />
          <label>Ancho:</label>
          <input type="number" value={width} onChange={(e) => setWidth(parseFloat(e.target.value))} />
        </div>
      )}
      {selectedShape === 'triangle' && (
        <div>
          <label>Base:</label>
          <input type="number" value={base} onChange={(e) => setBase(parseFloat(e.target.value))} />
          <label>Altura:</label>
          <input type="number" value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} />
        </div>
      )}
      <div>
        <h3>Resultado</h3>
        <p>Área: {area}</p>
        <p>Perímetro: {perimeter}</p>
      </div>
    </div>
  );
}

