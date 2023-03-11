import "./App.css";
import { useState } from "react";
import Drawing from "./components/Drawing.jsx";
import ColorPalette from "./components/Color.jsx";
import Slider from "./components/Slider";

const generateItem = () => ({
  y: Math.random() * 50,
  radius: 5,
  color: "#000000",
});
const defaultList = new Array(5).fill().map(() => generateItem());

export default function App() {
  const [radius, setRadius] = useState(100);
  const [items, setItems] = useState(defaultList);
  const [color, setColor] = useState("#000000"); 

  const handleRadiusChange = (value) => {
    setRadius(value);

    const tmpItems = [...items];
    setItems(
      tmpItems.map((item) => {
        const tmpItem = { ...item };
        tmpItem.radius = value;
        return tmpItem;
      })
    );
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);

    const tmpItems = [...items];
    setItems(
      tmpItems.map((item) => {
        const tmpItem = { ...item };
        tmpItem.color = newColor;
        return tmpItem;
      })
    );
  };

  return (
    <div className="App">
      <ColorPalette color={color} onColorChange={handleColorChange} />
      <Slider
        value={radius}
        onValueChange={handleRadiusChange}
        min={1}
        max={50}
        label="Radius"
      />

      <Drawing items={items} />
    </div>
  );
}
