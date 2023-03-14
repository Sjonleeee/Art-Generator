import React from "react";

function ColorPalette({ colors, onColorChange }) {
  return (
    <div className="ColorPalette">
      {colors.map((color) => (
        <button
          key={color}
          style={{
            backgroundColor: color,
          }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
}

export default ColorPalette;
