import { stroke } from "../constants";

const ColorPalette = ({ onColorChange }) => {
  return (
    <div className="ColorPalette">
      {stroke.COLORS.map((color) => (
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
};

export default ColorPalette;
