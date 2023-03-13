import React from "react";
import "../Drawing.css";

const Drawing = ({ items, color, radius }) => {
  const canvasWidth = 80;
  const canvasHeight = 80;
  const gridSize = Math.ceil(Math.sqrt(items.length));
  const gridItemSize = Math.min(
    canvasWidth / gridSize,
    canvasHeight / gridSize
  );

  const getItemPosition = (index) => {
    // Calculate a random width and height for the rectangle
    const width =
      Math.floor(Math.random() * 4 + 1) * (gridItemSize / 4) + radius * 2;
    const height =
      Math.floor(Math.random() * 4 + 1) * (gridItemSize / 4) + radius * 1;

    // Calculate the position of the rectangle within the grid
    const gridX = index % gridSize;
    const gridY = Math.floor(index / gridSize);

    // Calculate the position of the rectangle within the canvas
    const x = gridX * gridItemSize + (gridItemSize - width) / 2;
    const y = gridY * gridItemSize + (gridItemSize - height) / 2;

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
        const { x, y, width, height } = getItemPosition(index);
        const randomFill = getRandomColor();
        return (
          <rect
            key={index}
            x={x - radius}
            y={y - radius}
            width={width}
            height={height}
            fill={randomFill}
            stroke={color}
            radius={-radius}
          />
        );
      })}
    </svg>
  );
};

export default Drawing;
