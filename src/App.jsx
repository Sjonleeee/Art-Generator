import "./App.css";
import { useState } from "react";
import Amount from "./components/Amount";
import ColorPalette from "./components/Color";
import Drawing from "./components/Drawing";
import Slider from "./components/Slider";

const generateItem = () => ({
  y: Math.random() * 50,
  radius: 2,
  color: "#000000",
});

const defaultList = new Array(50).fill().map(() => generateItem());

const COLORS = ["#000000", "#FF0000", "#00FF00", "#0000FF"];

export default function App() {
  const [radius, setRadius] = useState(2);
  const [numItems, setNumItems] = useState(defaultList.length);
  const [items, setItems] = useState(defaultList);
  const [color, setColor] = useState(COLORS[0]);

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

  const handleNumItemsChange = (value) => {
    setNumItems(value);
    setItems(new Array(value).fill().map(() => generateItem()));
  };

  return (
    <div className="App">
      <ColorPalette
        colors={COLORS}
        activeColor={color}
        onColorChange={handleColorChange}
      />
      <Slider
        value={radius}
        onValueChange={handleRadiusChange}
        min={2}
        max={20}
        label="Radius"
      />
      <Amount
        value={numItems}
        onValueChange={handleNumItemsChange}
        label="Number of items"
        min={50}
        max={1000}
      />

      <Drawing items={items} color={color} radius={radius} />
    </div>
  );
}
