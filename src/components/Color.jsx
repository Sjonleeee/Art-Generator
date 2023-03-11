import React from "react";

const ColorPalette = ({ onColorChange, color }) => {
  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => onColorChange(e.target.value)}
      />
    </div>
  );
};

export default ColorPalette;
