import React from "react";
import "../Drawing.css";

const Drawing = ({ items, color, radius }) => {
  const canvasWidth = 800;
  const canvasHeight = 800;
  const gridSize = Math.ceil(Math.sqrt(items.length));
  const gridItemSize = canvasWidth / gridSize;

  const getItemPosition = (index) => {
    const x = (index % gridSize) * gridItemSize;
    const y = Math.floor(index / gridSize) * gridItemSize;
    return { x, y };
  };

  return (
    <svg viewBox={`0 0 ${canvasWidth} ${canvasHeight}`} className="Drawing">
      {items.map((item, index) => {
        const { x, y } = getItemPosition(index);
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={gridItemSize}
            height={gridItemSize}
            fill="none"
            stroke={color}
            strokeWidth={radius}
          />
        );
      })}
    </svg>
  );
};

export default Drawing;
