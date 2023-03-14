import { useState } from "react";

import Amount from "./components/Amount";
import ColorPalette from "./components/Color";
import Drawing from "./components/Drawing";
import RandomRotation from "./components/RandomRotation";
import Slider from "./components/Slider";
import { stroke } from "./constants";

import "./App.css";

const generateItem = () => ({
  y: Math.random() * 50,
});

const defaultList = new Array(50).fill().map(() => generateItem());

export default function App() {
  const [isRotated, setIsRotated] = useState(false);
  const [color, setColor] = useState(stroke.COLORS[0]);

  const [widthMultiplier, setWidthMultiplier] = useState(2);
  const [numItems, setNumItems] = useState(defaultList.length);
  const [items, setItems] = useState(defaultList);

  const handleWidthChange = (value) => {
    setWidthMultiplier(value);

    const tmpItems = [...items];
    setItems(
      tmpItems.map((item) => {
        const tmpItem = { ...item };
        tmpItem.width = value;
        return tmpItem;
      })
    );
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setItems((prevItems) => {
      const mappedWithNewColors = prevItems.map((item) => {
        const newItem = { ...item, color: newColor };
        return newItem;
      });
      return mappedWithNewColors;
    });
  };

  const handleNumItemsChange = (value) => {
    setNumItems(value);
    const generated = new Array(value).fill();
    const mapped = generated.map(() => generateItem());

    setItems(mapped);
  };

  return (
    <div className="App">
      <ColorPalette activeColor={color} onColorChange={handleColorChange} />
      <Slider
        value={widthMultiplier}
        onValueChange={handleWidthChange}
        min={2}
        max={10}
        label="Rect width"
      />
      <Amount
        value={numItems}
        onValueChange={handleNumItemsChange}
        label="Number of items"
        min={50}
        max={1000}
      />
      <RandomRotation
        isRotated={isRotated}
        items={items}
        onRotationChange={setIsRotated}
      />
      <Drawing
        items={items}
        color={color}
        widthMultiplier={widthMultiplier}
        randomRotation={isRotated}
      />
    </div>
  );
}
