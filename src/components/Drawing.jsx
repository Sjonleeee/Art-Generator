import React from "react";
import "../Drawing.css";

const Drawing = ({ items, color, radius }) => {
  const canvasWidth = 800;
  const canvasHeight = 800;
  const gridSize = Math.ceil(Math.sqrt(items.length));
  const gridItemSize = canvasWidth / gridSize;

  const getItemPosition = (index) => {
    const maxWidth = canvasWidth / gridSize;
    const maxHeight = canvasHeight / gridSize;

    // Calculate a random width and height for the rectangle
    const width = Math.floor(Math.random() * (maxWidth - 10)) + 10;
    const height = Math.floor(Math.random() * (maxHeight - 10)) + 10;

    // Calculate the position of the rectangle
    const x = (index % gridSize) * (maxWidth - width);
    const y = Math.floor(index / gridSize) * (maxHeight - height);

    return { x, y, width, height };
  };

  // Random color generator
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <svg viewBox={`0 0 ${canvasWidth} ${canvasHeight}`} className="Drawing">
      {items.map((item, index) => {
        const { x, y } = getItemPosition(index);
        const randomFill = getRandomColor();
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={gridItemSize}
            height={gridItemSize}
            fill={randomFill}
            stroke={color}
            strokeWidth={radius}
          />
        );
      })}
    </svg>
  );
};

export default Drawing;
