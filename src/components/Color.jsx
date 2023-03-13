import React from "react";

function ColorPalette({ colors, activeColor, onColorChange }) {
  return (
    <div className="ColorPalette">
      {colors.map((color) => (
        <button
          key={color}
          style={{
            backgroundColor: color,
            border: color === activeColor ? "1px solid black" : "none",
          }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
}

export default ColorPalette;
